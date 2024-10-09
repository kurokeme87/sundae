import Navigation2 from "../Components/Navigation2";
import EducationalCard from "../Components/EducationalCard";
import TableSection from "../Components/TableSection";
import ConnectWalletSpan from "../Components/ConnectWalletSpan";
import SundaeConnectButton from "../Components/global/SundaeConnectButton";
import { shortenAddressSmall } from "../Components/utils";
import { useAccount } from "wagmi";

const rewardLeaderboard = [
  {
    program: "NMKR Farm 3",
    last_30_days: "4.99M",
    last_24H: "172K",
    img_URL: "/sundaeYF.png",
  },
  {
    program: "INDY Farm",
    last_30_days: "36K",
    last_24H: "1.2K",
    img_URL: "/sundaeYF.png",
  },
  {
    program: "FACT Farm",
    last_30_days: "90K",
    last_24H: "3K",
    img_URL: "/sundaeYF.png",
  },
  {
    program: "CLARITY Farm",
    last_30_days: "1.2M",
    last_24H: "39.0K",
    img_URL: "/sundaeYF.png",
  },
  {
    program: "Sundae Yield Farming v2",
    last_30_days: "13.5M",
    last_24H: "442K",
    img_URL: "/sundaeYF.png",
  },
];

const Fi_YieldFarming = () => {
  let browserWidth = document.body.getBoundingClientRect().width;
  const { address } = useAccount();

  return (
    <section className="w-fulll min-h-20 bg-[#0F0619] ">
      <Navigation2 currentTab={"Yield Farming"} />

      {/* Max width container */}
      <div className="flex flex-col mx-auto max-w-[72rem] px-3 md:px-0">
        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center justify-center mx-auto w-full mt-10 md:mt-0 md:h-screen pt-7 md:pt-7 mb-20 md:mb-0">
          {/* left heor info */}
          <div className="mt-8 md:mt-0 py-10 md:py-14 px-8 basis-1/2 bg-[linear-gradient(155deg,_#0E132E_0%,_transparent_40%)] rounded-2xl">
            <div className="space-y-3 md:space-y-4 ">
              <p className="text-3xl md:text-4xl font-bold text-gray-200 max-w-[15rem] sm:max-w-[25rem]">
                Community-driven{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                  Yield Farming
                </span>
                .
              </p>
              <p className="text-sm md:text-base text-gray-200">
                Welcome to Cardano's most decentralized and user-friendly Yield
                Farming program! Let SundaeSwap do the heavy lifting for you.
                It's easy to get started and learn as you go.
              </p>
              <div className="grid grid-cols-2 justify-between gap-6 h-8">
                <button
                  className={`text-sm col-span-1 gap-2 items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] relative overflow-hidden group border-none text-white bg-gray-800  min-w-[125px] px-auto  md:text-sm h-auto rounded-lg`}
                >
                  View Top Farms
                </button>
                <SundaeConnectButton
                  isNavbar
                  connect={
                    <button
                      className={`text-sm h-8 w-full col-span-1 gap-2 grow items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] relative overflow-hidden group border-none text-white bg-gradient-to-r from-secondary to-primary hover:from-secondary-300 hover:to-primary-300 font-semibold rounded-lg`}
                    >
                      <ConnectWalletSpan />
                    </button>
                  }
                  component={
                    <button
                      className={`text-sm h-8 col-span-1 gap-2 grow items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] relative overflow-hidden group border-none text-white bg-gradient-to-r from-secondary to-primary hover:from-secondary-300 hover:to-primary-300 font-semibold rounded-lg w-full`}
                    >
                      Connected {shortenAddressSmall(address)}
                    </button>
                  }
                />
              </div>
            </div>
          </div>

          {/* right hero image */}
          <div className="hidden md:flex basis-1/2  items-center justify-center">
            <img src="/yield_farming.png" className=" scale-90" />
          </div>
        </section>

        {/* noisy stats */}
        <section className="mb-20 relative">
          {/* <div className="absolute -left-12 -right-12 -bottom-6 -top-12 overflow-hidden rounded-3xl dark:opacity-75" style={{ backgroundImage: 'url(/noise.svg)' }}></div> */}
          {/* overall stas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 space-y-10 md:space-y-0 h-auto">
            <div className="space-y-5 col-span-1">
              <p className="text-gray-200 font-bold text-sm md:text-base py-1">
                Overall Statistics
              </p>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-200">
                    Total Value Locked
                  </span>
                  <span className="text-sm text-gray-200">
                    87,087,145.605021
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-200">
                    Average Daily Rewards
                  </span>
                  <span className="text-sm text-gray-200">9,487.905236</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-200">
                    Next Rewards Cycle
                  </span>
                  <span className="text-sm text-gray-200">08:00:00</span>
                </div>
              </div>
            </div>

            {/* NO wallet */}
            <div className="col-span-1">
              <div className="w-full items-center flex flex-col gap-5 items-cneter">
                <div className="text-center text-gray-200 font-bold w-fit text-sm md:text-base">
                  No Wallet Connection <span className="text-base">🔌</span>
                </div>

                <div className="space-y-4 flex flex-col items-center">
                  <p className="text-gray-200/60 text-sm text-center">
                    Connect your wallet to see your positions
                  </p>
                  <button
                    className={`flex gap-2 text-sm items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] relative overflow-hidden group border-none text-white bg-gradient-to-r from-secondary to-primary hover:from-secondary-300 hover:to-primary-300 min-w-[125px] px-3 py-2 h-full max-h-8 rounded-lg lg:w-fit`}
                  >
                    <ConnectWalletSpan />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="w-full flex flex-col gap-5 items-cneter pl-0 lg:pl-9">
                <span className="text-gray-200 font-bold text-sm md:text-base py-1">
                  Daily Rewards Leaderboard
                </span>

                <table className="table-auto z-10">
                  <thead className="bg-tableColor1 h-12 border-b border-gray-200/20">
                    <tr>
                      {["Program", "Last 30 Days", "Last 24H"].map(
                        (item, index) => (
                          <th key={index} className="pl-1">
                            <h4 className="text-left text-xs font-bold text-gray-200">
                              {item}
                            </h4>
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {rewardLeaderboard.map((data, index) => (
                      <tr key={index} className="h-12 md:h-14">
                        <td className="text-sm text-gray-200">
                          {data.program}
                        </td>
                        <td className="text-sm text-gray-200">
                          <div className="flex h-12 md:h-14 w-full items-center">
                            <img
                              src={data.img_URL}
                              className="inline size-6 mr-2"
                            />
                            <span className="inline">{data.last_30_days}</span>
                          </div>
                        </td>
                        <td className="text-sm text-gray-200">
                          <div className="flex h-12 md:h-14 w-full items-center">
                            <img
                              src={data.img_URL}
                              className="inline size-6 mr-2"
                            />
                            <span className="inline">{data.last_24H}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* yet another table */}
        <TableSection
          showDelegationInstead={true}
          title={"Top Farms by Voting Delegation"}
        />

        <section className="grid lg:grid-cols-2 gap-2 md:gap-9">
          <EducationalCard
            image={"/liquidify1.png"}
            title={"Liquidity Pools & Yield Farms"}
            subtitle={
              "Here, you can learn what liquidity pools are, how to provide and withdraw liquidity, and how your portfolio can earn revenue through trading fees and rewards on Sundae."
            }
          />

          <EducationalCard
            image={"/liquidify2.png"}
            title={"Understanding the risk"}
            subtitle={
              "Providing liquidity and accruing trading fees always comes with a risk. By providing liquidity, you expose yourself to impermanent loss."
            }
          />

          <div></div>
        </section>
      </div>
    </section>
  );
};

export default Fi_YieldFarming;
