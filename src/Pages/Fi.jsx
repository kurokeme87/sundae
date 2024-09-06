// import React from 'react'
import CWButton from '../Components/CWButton'
import Footer2 from '../Components/Footer2'
import Navigation2 from '../Components/Navigation2'

function Fi() {
  return (
    <section className=' bg-[#0F0619] text-offwhite scrollbar-custom'>
      <Navigation2 />

      {/* body*/}
      <div className='flex flex-col gap-10 px-10'>
      
        {/* Hero 1 */}
        <section className='flex flex-col bg-[linear-gradient(155deg,_#0E132E_0%,_transparent_40%)] md:flex-row mt-4 rounded-2xl'>
          <div className='flex flex-col gap-6 px-10 rounded-3xl w-1/2 justify-center'>
            <h1 className='text-7xl font-medium text-gray-200 leading-ight'>Fast, easy and secure trading</h1>
            <p className='text-2xl font-semibold text-gray-200/60'>Experience low-fee trading and ultra-fast transaction settlment</p>
            <CWButton />
          </div>
          <div className='flex w-1/2 items-center justify-center p-6 rounded-3xl'>
            <img src='../../public/hero1.png'
              className="mx-auto max-w-[60%] aspect-[0.649485 / 1] drop-shadow-lg xxl:max-w-[70%] bg-gray-200/30 dark:bg-gray-800/40 transition-colors duration-300 rounded-none !bg-transparent object-cover motion-safe:animate-fadeIn no-js-fast_easy_secure"
              width={378}
            />
          </div>
        </section>

        {/* Hero 2 */}
        <section className='flex flex-col bg-[linear-gradient(30deg,_#0E132E_100%,_transparent_70%)] md:flex-row px-8 py-20 mt-3'>
          <div className='flex w-1/2 items-center justify-center p-16 rounded-3xl'>
            <img src='../../public/hero2.png'
            />
          </div>
          <div className='flex flex-col gap-6 py-auto px-10 rounded-3xl w-1/2 justify-center'>
            <p className='text-4xl font-medium text-gray-200 leading-ight'>Grow Your Portfolio</p>
            <p className='text-xl font-semibold text-gray-200/60'>Trading Cardano Assets has never been easier. Connect your wallet and start trading</p>
            <CWButton />
          </div>
        </section>

        {/* Hero 3 */}
        <section className='flex flex-col bg-[linear-gradient(155deg,_#0E132E_0%,_transparent_40%)] md:flex-row px-8 py-20 mt-3'>
          <div className='flex flex-col gap-6 py-auto px-10 rounded-3xl w-1/2 justify-center'>
            <p className='text-4xl font-medium text-gray-200 leading-ight'>Provide Liquidity and earn rewards</p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className='text-xl font-semibold text-gray-200/60'>Put your assets to work by providing liquidity or participating in Sundae's Yield Farming program.</p>
            <CWButton />
          </div>
          <div className='flex w-1/2 items-center justify-center p-16 rounded-3xl'>
            <img src='../../public/hero3.png'
            />
          </div>
        </section>


        {/* Hero 4 */}
        <section className='flex flex-col bg-[#0A91EA] md:flex-row px-3 pt-0 mt-3 rounded-2xl'>
          <div className='flex flex-col gap-6 px-10 rounded-3xl w-1/2 justify-center'>
            <p className='text-4xl font-medium text-gray-200 leading-ight'>Start trading now.</p>
            <p className='text-xl font-semibold text-gray-200/60'>Connect your wallet and start trading Caradno assets with Sundae.</p>
            <CWButton bgcol='[#202231]'/>
          </div>
          <div className='flex w-1/2 items-center justify-center  rounded-2xl'>
            <img src='../../public/cta1.png' 
            className='max-w-[70%] drop-shadow-lg rounded-none object-cover motion-safe:animate-fadeIn no-js-trade_now'/> 
            {/* <img className="max-w-[70%] drop-shadow-lg rounded-none object-cover motion-safe:animate-fadeIn no-js-trade_now" src="../../public/cta1.png" width="441" style="aspect-ratio: 1 / 1;"></img> */}
          </div>

          
        </section>


      </div>

      <Footer2 />
    </section>
  )
}

export default Fi