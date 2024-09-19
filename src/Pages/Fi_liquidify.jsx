import React, { useState } from 'react'
import Navigation2 from '../Components/Navigation2'
import Star from "../Components/Star.jsx"
import data from "../Data/liquidity.json"
import EducationalCard from "../Components/EducationalCard.jsx"


const Fi_liquidify = () => {
    const liquidityData = data.liquidity;
    const [maxTableEntries, setmaxTableEntries] = useState(20)
    const loadMoreEntries = () => {
        setmaxTableEntries(maxTableEntries + 10)
    }

    const LiquidityTableRow = ({ index, combo, version, percent, hra, price, tvl }) => {
        const rowstyle = "py-[0.7rem] pl-4"
        return (
            <tr className={`${index % 2 != 0 ? "bg-tableColor1" : "bg-tableColor2"} hover:bg-primary/10 duration-200 delay-80`} >

                {/* pool */}
                <td className={rowstyle}>

                    <div className='flex items-center'>
                        <Star interactive={true} />

                        {/* images */}
                        <span className='relative h-[25px] w-[40px] ml-3 mr-2'>
                            <img className='rounded-full size-[25px] absolute left-0' src='../public/sundaeYF.png'></img>
                            <img className='rounded-full size-[25px] absolute right-0 z-[2]' src='../public/liquid.png'></img>
                        </span>
                        {/* name, version and percent */}
                        <div className='flex flex-col gap-0.5'>
                            <p className='text-gray-200'> ADA-USDM </p>
                            <div className='flex gap-1'>
                                {
                                    version > 1 ?
                                        <span className='flex items-center text-[10px] text-secondary bg-secondary/20 px-2.5 py-0.5 rounded-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="mr-[2px] h-3 w-3 text-secondary"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"></path></svg>
                                            V3
                                        </span>
                                        :
                                        <span className='flex items-center text-[10px] text-error bg-error/20 px-2.5 py-0.5 rounded-full'>
                                            V{version}
                                        </span>
                                }
                                <span className='flex items-center text-[10px] text-gray-300 bg-gray-600/50 px-2.5 py-0.5 rounded-full'>
                                    {percent}%
                                </span>
                            </div>
                        </div>
                    </div>
                </td>

                {/* hra */}
                <td className={rowstyle}>
                    <div>
                        {
                            hra !== "BMD" ?
                                <div className='flex w-fit items-center gap-2 py-[1px] pl-5 rounded-xl text-sm text-gray-200/60 bg-buttonGray'>
                                    {hra}%
                                    <img className='h-[25px]' src='../public/sundaeYF.png' />
                                </div>
                                :
                                <span className='text-xs text-gray-200/60'>
                                    Below Mininmum Delegation
                                </span>
                        }
                    </div>
                </td>

                {/* price */}
                <td className={rowstyle}>
                    <span className='pr-6 text-gray-200 text-sm'>
                        {price}
                    </span>
                </td>
                {/* tvl */}
                <td className={rowstyle}>
                    <span className='pr-5   text-gray-200 text-sm'>
                        {tvl}
                    </span>
                </td>
                {/* cennect wallet button */}
                <td className={rowstyle}>
                    <button className=' py-1 px-4 -mr-10 rounded-xl text-gray-200 bg-buttonGray'>
                        Connect Wallet
                    </button>
                </td>
            </tr>
        )
    }



    return (
        <section className='bg-[#0F0619] pt-9'>
            <Navigation2 currentTab={"Liquidify"} />
            <section className='flex flex-col min-h-[100vh] mx-auto max-w-[1296px] px-4 md:px-0 pt-20'>
                <div className='space-y-4 itemx-center mb-20'>

                    {/* buttons and stuff */}
                    <div className='flex gap-4 h-8'>
                        {/* <form className='flex'> */}
                        <form className=' flex'>
                            <div className='relative flex items-center'>
                                <input type="text" placeholder="Search pools.." className="text-gray-200 active:border-2 focus:border-primary focus:outline-none transition-all duration-300 rounded-md pl-8 w-60 border border-gray-200/20 hover:border-primary/40 bg-tableColor2 text-sm placeholder-gray-200/40 h-full"></input>
                                <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-200 z-10 absolute bottom-1/2 translate-y-1/2 h-4 w-4 left-2"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                            </div>
                        </form>
                        <button className='min-w-[100px] px-4 py-auto text-sm text-gray-200 flex items-center gap-2 bg-buttonGray rounded-lg'>
                            <Star filled={true} />
                            Favorites only
                        </button>
                        <button className='min-w-[100px] px-4 py-auto text-sm text-gray-200 flex items-center gap-2 bg-buttonGray rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 will-change-transform group-hover:scale-110 transition-transform duration-300"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"></path></svg>
                            Contract Version
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 will-change-transform transition-transform duration-300"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>
                        </button>
                        <button className='min-w-[100px] px-4 py-auto text-sm text-gray-200 flex items-center gap-2 bg-buttonGray rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 will-change-transform group-hover:scale-110 transition-transform duration-300"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"></path></svg>
                            LP Fee
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 will-change-transform transition-transform duration-300"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>
                        </button>
                        {/* </form> */}
                    </div>


                    {/* table div */}
                    <div className='space-y-4'>
                        <table className="table-auto w-full">
                            <thead className='bg-tableColor1 text-gray-200/60 text-left text-xs h-[2.6rem] border-b border-gray-200/10'>
                                <tr className='pl-4'>
                                    {
                                        ["Pool", "HRA", "Price", "TVL", "Manage"].map((item, index) => (
                                            <th className='pl-4' key={index}>
                                                <h4 className='inline'>
                                                    {item}
                                                </h4>
                                            </th>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    liquidityData.map((data, index) => {
                                        if (index + 1 <= maxTableEntries)
                                            return (
                                                <LiquidityTableRow
                                                    key={index}
                                                    index={index}
                                                    combo={data.combo}
                                                    version={data.version}
                                                    percent={data.percent}
                                                    hra={data.HRA}
                                                    price={data.price}
                                                    tvl={data.tvl}
                                                />
                                            )
                                    })
                                }
                            </tbody>
                        </table>

                        <div className='w-full flex '>
                            <button onClick={() => { loadMoreEntries() }} className='mx-auto py-1 px-4  rounded-xl text-gray-200 bg-buttonGray'>
                                Load More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Eduction and Help */}

                <p className='text-xl md:text-2xl text-gray-200 mt-5 mb-5 font-bold'>
                    Education and Help
                </p>
                <section className='flex flex-col gap-9 mb-9'>
                    <EducationalCard
                        image={"/liquidify1.png"}
                        title={"Liquidity Pools"}
                        subtitle={"Here, you can see what liquidify pools are, how to provide and withdraw liquidity, and how you're able to accure trading fees by being a liquiditt provider on SundaeSwap."}
                    />

                    <EducationalCard
                        image={"/liquidify2.png"}
                        title={"Impermanent Loss"}
                        subtitle={"Providing liquidity and accuring trading fees always comes with a risk. By provoding liquidify, you expose yourself to impermanent low."}
                    />
                </section>
            </section>
        </section>
    )
}

export default Fi_liquidify