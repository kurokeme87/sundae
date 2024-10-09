import { ConnectButton } from "@rainbow-me/rainbowkit";

const SundaeConnectButton = ({
  component: Component,
  connect: Connect,
  isNavbar,
}) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            role="button"
            onClick={connected ? null : openConnectModal}
            // className="bg-[#381836] w-[94%] px-4 py-2 rounded-lg flex items-center mx-auto justify-between cursor-pointer"
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <div role="button" onClick={openConnectModal}>
                    {Connect}
                  </div>
                );
              }
              if (connected) {
                return (
                  <div
                    role="button"
                    onClick={isNavbar ? openAccountModal : null}
                  >
                    {Component}
                  </div>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }
              return null;
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default SundaeConnectButton;
