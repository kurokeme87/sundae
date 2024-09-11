import { useState } from "react";
import CWButton from "../Components/CWButton";
import Navigation2 from "../Components/Navigation2";
import { Sliders, ChevronDown, ArrowDown, Info } from "lucide-react";

function Exchange() {
  const [activeTab, setActiveTab] = useState('Market');
  const bgcol = 'gradient-to-r from-secondary to-primary hover:from-secondary-300 hover:to-primary-300'

  return (
    <div>
      <section className="bg-[#0F0619] text-gray-400 scrollbar-custom" style={{height:"100vh"}}>
        <Navigation2 currentTab={"Exchange"}/>
        <div className="relative grid place-items-center gap-4 lg:gap-8 lg:grid-cols-1 pt-8  md:pt-20 px-4">
          <div className="relative order-1 mx-auto flex h-fit w-full max-w-lg flex-col gap-8 self-start lg:order-2 lg:col-span-3 xl:col-span-2 xl:mx-0">
            <div data-guide-selector="exchange-widget">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {['Market', 'Limit'].map((tab) => (
                    <h3
                      key={tab}
                      role="button"
                      className={`text-sm font-normal cursor-pointer rounded-full px-4 py-1.5 transition-colors duration-300 ${
                        activeTab === tab
                          ? 'text-primary bg-primary/20'
                          : 'text-gray-400 hover:text-gray-400'
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
                      balance="0.00"
                      usdValue="$0.00"
                    />
                    
                    <div className="z-10 h-8 w-8 rounded-full !transition-all active:scale-[0.975] text-gray-400 border-[#0f0619] border-4 bg-[#120b1b] cursor-not-allowed select-none text-gray-400 absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2" style={{marginBottom:"30px"}}>
                      <ArrowDown className="absolute h-4 w-4 text-current right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2" />
                    </div>
                    
                    <AssetInput
                      label="To buy approximately"
                      asset="Select Token"
                      balance="0"
                      showUsdValue={false}
                    />
                  </div>
                  <button className={`flex gap-2 items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] relative overflow-hidden group border-none text-white bg-${bgcol} min-w-[125px] px-5 text-lg h-11 rounded-lg lg:w-full`}>
                  Connect Wallet
    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const AssetInput = ({ label, asset, balance, usdValue, showUsdValue = true }) => {
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
                disabled
                maxLength={79}
                placeholder="0"
                className="outline-none w-full flex-grow text-4xl text-gray-400 bg-transparent"
                style={{
                  maskImage: 'linear-gradient(to left, transparent, #000 7%, #000 100%, transparent)',
                }}
              />
            </div>
            <div className="flex items-center gap-2 h-9 w-fit rounded-full select-none border-gray-600 border shadow-lg transition duration-300 active:scale-[0.975] cursor-pointer hover:bg-gray-700 pl-1 pr-2">  
              {asset === 'ADA' ? (
                <span className="bg-[#0F0619] transition duration-300 h-6 w-6 rounded-full">
                  <img
                    src="https://app.sundae.fi/static/images/cardano.png"
                    alt="ADA"
                    className="w-full rounded-full bg-gray-800 transition-colors duration-300 rounded-none !bg-transparent object-cover"
                    width="24"
                    style={{ aspectRatio: '1 / 1' }}
                  />
                </span>
              ) : null}
              <span className="text-sm text-white font-semibold transition-colors duration-300 ms-2">
                {asset}
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
              {asset === 'ADA' && (
                <div className="text-gray-400 transition-opacity duration-300 hover:opacity-75 cursor-help">
                  <Info className="mx-[2px] h-3 w-3 cursor-help text-gray-400" />
                </div>
              )}:
            </span>{' '}
            <div className="inline-flex">
              <span className="text-xs text-gray-400 font-normal transition-colors duration-300">
                {asset === 'ADA' ? `₳${balance}` : balance}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;