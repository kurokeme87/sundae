import Navigation2 from "../Components/Navigation2";
import data from "../Data/liquidity.json"
import { useState } from "react";
import EducationalCard from "../Components/EducationalCard";
import Star from "../Components/Star";

const rewardLeaderboard = [
    {
        program: "NMKR Farm 3",
        last_30_days: "4.99M",
        last_24H: "172K",
        img_URL: "../public/sundaeYF.png"
    },
    {
        program: "INDY Farm",
        last_30_days: "36K",
        last_24H: "1.2K",
        img_URL: "../public/sundaeYF.png"
    },
    {
        program: "FACT Farm",
        last_30_days: "90K",
        last_24H: "3K",
        img_URL: "../public/sundaeYF.png"
    },
    {
        program: "CLARITY Farm",
        last_30_days: "1.2M",
        last_24H: "39.0K",
        img_URL: "../public/sundaeYF.png"
    },
    {
        program: "Sundae Yield Farming v2",
        last_30_days: "13.5M",
        last_24H: "442K",
        img_URL: "../public/sundaeYF.png"
    },
]

const Fi_YieldFarming = () => {
    const liquidityData = data.liquidity;
    let browserWidth = document.body.getBoundingClientRect().width
    const [maxTableEntries, setmaxTableEntries] = useState(browserWidth < 760 ? 10 : 20)
    const loadMoreEntries = () => {
        setmaxTableEntries(maxTableEntries + 10)
    }

    const delegationStyle = (delegation) => {
        let isBlue = true
        if (typeof delegation == "number") {
            if (delegation < 7) isBlue = false
        }
        return `pr-6 text-sm ${isBlue ? "text-primary" : "text-gray-200 "}`
    }
    const delegationText = (delegation) => {
        if (typeof delegation == "number") {
            if (delegation == 0)
                return "-"
        }
        return delegation
    }

    const LiquidityTableRow = ({ index, combo, version, percent, hra, delegation, tvl }) => {
        const rowstyle = "py-[0.4rem] md:py-[0.7rem] pl-4"
        return (
            <tr className={`${index % 2 != 0 ? "bg-tableColor1" : "bg-tableColor2"} over:bg-primary/10 duration-200 delay-80`} >

                {/* pool */}
                <td className={` ${rowstyle}`}>

                    <div className='flex pr-20 md:pr-0 items-center'>
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
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="mr-[2px] h-3 w-3 text-secondary"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"></path></svg>
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
                                <div className='text-xs text-gray-200/60 leading-tight'>
                                    Below Mininmum Delegation
                                </div>
                        }
                    </div>
                </td>

                {/* price */}
                <td className={rowstyle}>
                    {
                        <span className={delegationStyle(delegation)}>
                            {delegationText(delegation)}
                        </span>
                    }
                </td>
                {/* tvl */}
                <td className={rowstyle}>
                    <span className='pr-5   text-gray-200 text-sm'>
                        {tvl}
                    </span>
                </td>
                {/* cennect wallet button */}
                <td className={rowstyle}>
                    <button className='flex text-nowrap py-1 px-4 -mr-10 rounded-xl text-gray-200 bg-buttonGray '>
                        Connect Wallet
                    </button>
                </td>
            </tr>
        )
    }


    return (
        <section className="w-fulll min-h-screen bg-[#0F0619]">
            <Navigation2 currentTab={"Yield Farming"} />

            {/* Max width container */}
            <div className='flex flex-col mx-auto max-w-[72rem] px-3 md:px-0'>

                {/* Hero */}
                <section className="flex flex-col md:flex-row items-center justify-center mx-auto w-full mt-10 md:mt-0 md:h-screen pt-7 md:pt-7 mb-20 md:mb-0">

                    {/* left heor info */}
                    <div className="mt-8 md:mt-0 py-10 md:py-14 px-8 basis-1/2 bg-[linear-gradient(155deg,_#0E132E_0%,_transparent_40%)] rounded-2xl">
                        <div className="space-y-3 md:space-y-4 ">
                            <p className="text-3xl md:text-4xl font-bold text-gray-200 max-w-[15rem] sm:max-w-[25rem]">
                                Community-driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Yield Farming</span>.
                            </p>
                            <p className="text-sm md:text-base text-gray-200">
                                Welcome to Cardano's most decentralized and user-friendly Yield Farming program! Let SundaeSwap do the heavy lifting for you. It's easy to get started and learn as you go.
                            </p>
                            <div className="grid grid-cols-2 justify-between gap-6 h-8">
                                <button className={`text-sm col-span-1 gap-2 items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] relative overflow-hidden group border-none text-white bg-gray-800  min-w-[125px] px-auto  md:text-sm h-auto rounded-lg`}>
                                    View Top Farms
                                </button>
                                <button className={`text-sm col-span-1 gap-2 grow items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] relative overflow-hidden group border-none text-white bg-gradient-to-r from-secondary to-primary hover:from-secondary-300 hover:to-primary-300 h-auto font-semibold rounded-lg`}>
                                    {browserWidth < 560 ? "Connect" : "Connect Wallet"}
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* right hero image */}
                    <div className="hidden md:flex basis-1/2  items-center justify-center">
                        <img src="../public/yield_farming.png" className=" scale-90" />
                    </div>
                </section>

                {/* noisy stats */}
                <section className="mb-20 relative">
                    {/* <div className="absolute -left-12 -right-12 -bottom-6 -top-12 overflow-hidden rounded-3xl dark:opacity-75" style={{ backgroundImage: 'url(../public/noise.svg)' }}></div> */}
                    {/* overall stas */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 space-y-10 md:space-y-0 h-auto">
                        <div className="space-y-5 col-span-1">
                            <p className="text-gray-200 font-bold text-sm md:text-base py-1">
                                Overall Statistics
                            </p>
                            <div className="space-y-1">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-200">Total Value Locked</span>
                                    <span className="text-sm text-gray-200">87,087,145.605021</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-200">Average Daily Rewards</span>
                                    <span className="text-sm text-gray-200">9,487.905236</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-200">Next Rewards Cycle</span>
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
                                    <button className={`flex gap-2 text-sm items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] relative overflow-hidden group border-none text-white bg-gradient-to-r from-secondary to-primary hover:from-secondary-300 hover:to-primary-300 min-w-[125px] px-3 py-2 h-full max-h-8 rounded-lg lg:w-fit`}>
                                        Connect Wallet
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
                                            {
                                                ["Program", "Last 30 Days", "Last 24H"].map((item, index) => (
                                                    <th key={index} className="pl-1">
                                                        <h4 className="text-left text-xs font-bold text-gray-200">
                                                            {item}
                                                        </h4>
                                                    </th>
                                                ))
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            rewardLeaderboard.map((data, index) => (
                                                <tr key={index} className="h-12 md:h-14">
                                                    <td className="text-sm text-gray-200">
                                                        {data.program}
                                                    </td>
                                                    <td className="text-sm text-gray-200">
                                                        <div className="flex h-12 md:h-14 w-full items-center">
                                                            <img src={data.img_URL} className="inline size-6 mr-2" />
                                                            <span className="inline">
                                                                {data.last_30_days}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-200">
                                                        <div className="flex h-12 md:h-14 w-full items-center">
                                                            <img src={data.img_URL} className="inline size-6 mr-2" />
                                                            <span className="inline">
                                                                {data.last_24H}
                                                            </span>
                                                        </div>
                                                    </td>

                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>


                {/* yet another table */}
                <section className="mb-7 md:mb-16 ">
                    <p className="mb-5 text-xl md:text-2xl font-bold text-gray-200">Top Farms by Voting Delegation</p>

                    <div className='flex flex-wrap gap-2 mb-2'>
                        {/* <form className='flex'> */}
                        <form className=' flex'>
                            <div className='relative flex items-center h-8'>
                                <input type="text" placeholder="Search pools.." className="text-gray-200 active:border-2 focus:border-primary focus:outline-none transition-all duration-300 rounded-md pl-8 w-60 border border-gray-200/20 hover:border-primary/40 bg-tableColor2 text-sm placeholder-gray-200/40 h-full"></input>
                                <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-200 z-10 absolute bottom-1/2 translate-y-1/2 h-4 w-4 left-2"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                            </div>
                        </form>
                        <button className='text-nowrap min-h-8 min-w-[100px] px-4 py-auto text-sm text-gray-200 flex items-center gap-2 bg-buttonGray rounded-lg'>
                            <Star filled={true} />
                            Favorites only
                        </button>
                        <button className='text-nowrap min-h-8 min-w-[100px] px-4 py-auto text-sm text-gray-200 flex items-center gap-2 bg-buttonGray rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 will-change-transform group-hover:scale-110 transition-transform duration-300"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"></path></svg>
                            Contract Version
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 will-change-transform transition-transform duration-300"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>
                        </button>
                        <button className='text-nowrap min-h-8 min-w-[100px] px-4 py-auto text-sm text-gray-200 flex items-center gap-2 bg-buttonGray rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 will-change-transform group-hover:scale-110 transition-transform duration-300"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"></path></svg>
                            LP Fee
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 will-change-transform transition-transform duration-300"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>
                        </button>
                        {/* </form> */}
                    </div>

                    <div className='space-y-4'>
                        <table className="table-auto w-full min-w-[43rem] overflow-x-auto">
                            <thead className='bg-tableColor1 text-gray-200/60 text-left text-xs h-[3.6rem] border-b border-gray-200/10'>
                                <tr className='pl-4'>
                                    {
                                        ["Pool", "HRA", "Community Delegation", "TVL", "Manage"].map((item, index) => (
                                            <th className='pl-4' key={index}>
                                                <h4 className={`inline ${item == "Community Delegation" ? "text-gray-200" : ""}`}>
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
                                                    delegation={data.delegation}
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
                </section>

                <section className='grid lg:grid-cols-2 gap-2 md:gap-9'>
                    <EducationalCard
                        image={"/liquidify1.png"}
                        title={"Liquidity Pools & Yield Farms"}
                        subtitle={"Here, you can learn what liquidity pools are, how to provide and withdraw liquidity, and how your portfolio can earn revenue through trading fees and rewards on Sundae."}
                    />

                    <EducationalCard
                        image={"/liquidify2.png"}
                        title={"Understanding the risk"}
                        subtitle={"Providing liquidity and accruing trading fees always comes with a risk. By providing liquidity, you expose yourself to impermanent loss."}
                    />

                    <div></div>
                </section>

            </div>
        </section>
    )
}

export default Fi_YieldFarming;