import data from "../Data/liquidity.json"
import { useState } from "react";
import Star from "../Components/Star";
import ConnectWalletSpan from "../Components/ConnectWalletSpan.jsx"


const TableSection = ({ title, showDelegationInstead }) => {
    // showDelegationInstead = showDelegationInstead?true:false;
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

    const TableRow = ({ index, combo, version, percent, hra, price, delegation, tvl }) => {
        const rowstyle = "py-[0.7rem] px-4"
        return (
            <tr className={`${index % 2 != 0 ? "bg-tableColor1" : "bg-tableColor2"} md:hover:bg-primary/10 duration-200 delay-80`} >

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
                            <p className='text-gray-200 text-xs md:text-sm'>{combo} </p>
                            <div className='flex gap-1'>
                                {
                                    version > 1 ?
                                        <span className='max-h-[18px] flex items-center text-[10px] text-secondary bg-secondary/20 px-2.5 rounded-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="mr-[2px] h-3 w-3 text-secondary"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"></path></svg>
                                            V3
                                        </span>
                                        :
                                        <span className='max-h-[18px] flex items-center text-[10px] text-error bg-error/20 px-2.5 rounded-full'>
                                            V{version}
                                        </span>
                                }
                                <span className='max-h-[18px] flex items-center text-[10px] text-gray-300 bg-gray-600/50 px-2.5 py-0.5 rounded-full'>
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
                                <div className='flex w-fit items-center gap-2 py-[1px] pl-2 rounded-xl text-xs md:text-sm text-gray-200/60 bg-buttonGray'>
                                    {hra}%
                                    <img className='h-[20px] md:h-[25px]' src='../public/sundaeYF.png' />
                                </div>
                                :
                                <div className='text-xs md:text-sm text-gray-200/60 leading-tight'>
                                    Below Mininmum Delegation
                                </div>
                        }
                    </div>
                </td>

                {/* price or delegation */}
                <td className={rowstyle}>
                    <span className={`${showDelegationInstead ? delegationStyle(delegation) : 'pr-6 text-gray-200 text-sm'}`}>
                        {showDelegationInstead ? delegationText(delegation) : price}
                    </span>
                </td>

                {/* tvl */}
                <td className={rowstyle}>
                    <span className='pr-5   text-gray-200 text-xs md:text-sm'>
                        {tvl}
                    </span>
                </td>
                {/* cennect wallet button */}
                <td className={rowstyle}>
                    <button className='flex text-xs md:text-sm text-nowrap py-1 px-4 md:-mr-10 rounded-lg text-gray-200 bg-buttonGray '>
                      <ConnectWalletSpan />
                    </button>
                </td>
            </tr>
        )
    }


    return (
        <section className="mb-7 md:mb-16 ">
            <p className={`${title ? "mb-5 text-xl md:text-2xl font-bold text-gray-200" : "hidden"}`}>{title}</p>

            <div className='flex flex-wrap gap-2 mb-2 md:mb-4'>
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
                <div className="overflow-x-auto">
                    <table className="table-auto min-w-[43rem] w-full overflow-x-scroll">
                        <thead className='bg-tableColor1 text-gray-200/60 text-left text-xs h-[2.6rem] border-b border-gray-200/10'>
                            <tr className='pl-4'>
                                {
                                    ["Pool", "HRA", `${showDelegationInstead ? "Community Delegation" : "Price"}`, "TVL", "Manage"].map((item, index) => (
                                        <th className='pl-4' key={index}>
                                            <h4 className={`flex w-fit gap-1 items-center ${item == "Community Delegation" ? "text-gray-200" : ""}`}>
                                                {item}
                                                <div class="inline"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-2 w-2 opacity-100"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"></path></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="-mt-[2px] h-2 w-2 opacity-100"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg></div>
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
                                            <TableRow
                                                key={index}
                                                index={index}
                                                combo={data.combo}
                                                version={data.version}
                                                percent={data.percent}
                                                hra={data.HRA}
                                                price={data.price}
                                                delegation={data.delegation}
                                                tvl={data.tvl}
                                            />
                                        )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className='w-full flex '>
                    <button onClick={() => { loadMoreEntries() }} className='mx-auto py-1 px-4  rounded-xl text-gray-200 bg-buttonGray'>
                        Load More
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TableSection;