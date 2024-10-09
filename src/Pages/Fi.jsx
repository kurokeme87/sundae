// import React from 'react'
import CWButton from "../Components/CWButton";
import Footer2 from "../Components/Footer2";
import SundaeConnectButton from "../Components/global/SundaeConnectButton";
import Navigation2 from "../Components/Navigation2";

function Fi() {
  return (
    <section className=" bg-[#0F0619] text-offwhite scrollbar-custom pt-20">
      <Navigation2 currentTab={"Home"} />

      {/* body*/}
      <div className="flex flex-col gap-10 px-2 md:px-10">
        {/* Hero 1 */}
        <section className="flex flex-col bg-[linear-gradient(155deg,_#0E132E_0%,_transparent_40%)] md:flex-row mt-7 md:mt-4 rounded-2xl">
          <div className="flex flex-col gap-6 px-9 md:px-10 py-8 rounded-3xl basis-1/2 justify-center">
            <h1 className="text-5xl lg:text-7xl font-medium text-gray-200 leading-ight">
              Fast, easy and secure trading
            </h1>
            <p className="text-2xl font-medium text-gray-200/60">
              Experience low-fee trading and ultra-fast transaction settlment
            </p>
            <SundaeConnectButton isNavbar connect={<CWButton />} />
          </div>
          <div className="flex basis-1/2 items-center justify-center p-6 rounded-3xl">
            <img
              src="/hero1.png"
              className="mx-auto max-w-[60%] aspect-[0.649485 / 1] drop-shadow-lg xxl:max-w-[70%] bg-gray-200/30 dark:bg-gray-800/40 transition-colors duration-300 rounded-none !bg-transparent object-cover motion-safe:animate-fadeIn no-js-fast_easy_secure"
              width={378}
            />
          </div>
        </section>

        {/* Hero 2 */}
        <section className="flex flex-col bg-[linear-gradient(210deg,_#0E132E_0%,_transparent_50%)] md:flex-row px-8 py-20 mt-3">
          <div className="order-2 md:order-1 flex basis-1/2 items-center justify-center p-16 rounded-3xl">
            <img src="/hero2.png" />
          </div>
          <div className="order-1 md:order-2 flex flex-col gap-6 rounded-3xl basis-1/2 justify-center">
            <p className="text-4xl font-medium text-gray-200 leading-ight">
              Grow Your Portfolio
            </p>
            <p className="text-xl font-semibold text-gray-200/60">
              Trading Cardano Assets has never been easier. Connect your wallet
              and start trading
            </p>
            <SundaeConnectButton isNavbar connect={<CWButton />} />
          </div>
        </section>

        {/* Hero 3 */}
        <section className="flex flex-col bg-[linear-gradient(155deg,_#0E132E_0%,_transparent_40%)] md:flex-row mt-4 rounded-2xl">
          <div className="flex flex-col gap-6 px-8 md:px-14 py-8 rounded-3xl basis-1/2 justify-center">
            <p className="text-4xl font-medium text-gray-200 leading-ight">
              Provide Liquidity and earn rewards
            </p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-xl font-semibold text-gray-200/60">
              Put your assets to work by providing liquidity or participating in
              Sundae's Yield Farming program.
            </p>
            <SundaeConnectButton isNavbar connect={<CWButton />} />
          </div>
          <div className="flex basis-1/2 items-center justify-center px-24 md:p-32 rounded-3xl">
            <img
              src="/hero3.png"
              // className='size-[70%] md:size-[80%] '
            />
          </div>
        </section>

        {/* Hero 4 */}
        <section className="flex flex-col md:flex-row bg-[#0A91EA] py-5 md:py-0 px-0 md:px-6 md:mt-3 mx-2 rounded-2xl">
          <div className="flex basis-1/2">
            <div className="flex flex-col gap-4 px-6 rounded-3xl justify-center">
              <p className="text-4xl font-medium text-gray-200 ">
                Start trading now.
              </p>
              <p className="text-xl font-semibold text-gray-200/60">
                Connect your wallet and start trading Caradno assets with
                Sundae.
              </p>
              <SundaeConnectButton
                connect={
                  <CWButton
                    bgcol=" bg-gray-800 hover:bg-gray-800/75 transition duration-300 font-medium"
                    text="Connect Wallet"
                  />
                }
              />
            </div>
          </div>
          <div className="hidden md:flex basis-1/2 items-center justify-center rounded-2xl">
            <img
              className="max-w-[70%] drop-shadow-lg rounded-none object-cover aspect-square"
              src="/cta1.png"
              width="401"
            />
          </div>
        </section>
      </div>

      <Footer2 />
    </section>
  );
}

export default Fi;
