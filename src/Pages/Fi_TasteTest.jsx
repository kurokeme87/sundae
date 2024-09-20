import React from 'react'
import Navigation2 from '../Components/Navigation2'
import Footer2 from '../Components/Footer2'
import TasteTestFAQ from '../Components/TasteTestFAQ'
import { scrollToSection } from '../scripts/utils'
// import { isHtmlElement } from 'react-router-dom/dist/dom'

const sections = [
    "Intro", "Benefits", "What's scooping?", "Ongoing and Prior Taste Tests", "FAQ"
]

const Fi_TasteTest = () => {
    const cardContent = [
        {
            color: `#0B99FA`,
            title: "Reduced Launch Volability.",
            svg: <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class={`h-8 w-8`}><path d="M11.5 1C11.7761 1 12 1.22386 12 1.5V13.5C12 13.7761 11.7761 14 11.5 14C11.2239 14 11 13.7761 11 13.5V1.5C11 1.22386 11.2239 1 11.5 1ZM9.5 3C9.77614 3 10 3.22386 10 3.5V13.5C10 13.7761 9.77614 14 9.5 14C9.22386 14 9 13.7761 9 13.5V3.5C9 3.22386 9.22386 3 9.5 3ZM13.5 3C13.7761 3 14 3.22386 14 3.5V13.5C14 13.7761 13.7761 14 13.5 14C13.2239 14 13 13.7761 13 13.5V3.5C13 3.22386 13.2239 3 13.5 3ZM5.5 4C5.77614 4 6 4.22386 6 4.5V13.5C6 13.7761 5.77614 14 5.5 14C5.22386 14 5 13.7761 5 13.5V4.5C5 4.22386 5.22386 4 5.5 4ZM1.5 5C1.77614 5 2 5.22386 2 5.5V13.5C2 13.7761 1.77614 14 1.5 14C1.22386 14 1 13.7761 1 13.5V5.5C1 5.22386 1.22386 5 1.5 5ZM7.5 5C7.77614 5 8 5.22386 8 5.5V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V5.5C7 5.22386 7.22386 5 7.5 5ZM3.5 7C3.77614 7 4 7.22386 4 7.5V13.5C4 13.7761 3.77614 14 3.5 14C3.22386 14 3 13.7761 3 13.5V7.5C3 7.22386 3.22386 7 3.5 7Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>,
            text: `By allowing price discovery in a controlled enviroment before open trading, "Taste Test" significantly dampens initial price savings, offering a more stable launch`
        },
        {
            color: `#B202EC`,
            title: "Fair and Democratic Access.",
            svg: <svg width="1em" height="1em" viewBox="0 0 256 256" class="h-8 w-8 text-secondary"><path d="M253.433 48.112a2.838 2.838 0 00-2.077-.77c-18.206.902-37.985 3.928-62.236 9.523a2.806 2.806 0 00-2.054 3.569l2.355 7.598c-17.88-6.78-43.03-10.684-64.799-9.827-7.98 0-17.09 3.96-25.416 9.835h-32.92l2.358-7.61a2.805 2.805 0 00-2.051-3.568c-24.25-5.595-44.027-8.621-62.236-9.523a2.846 2.846 0 00-2.076.77 2.819 2.819 0 00-.874 2.04v96.5a2.81 2.81 0 002.81 2.81h34.782c1.23 0 2.32-.8 2.683-1.977l1.327-4.28c28.625 33.36 57.734 63.998 80.461 63.998 4.375 0 8.512-1.155 12.367-3.625l.593.601c2.653 2.687 6.207 4.179 10.006 4.201h.09c3.763 0 7.298-1.447 9.964-4.077 2.344-2.318 3.65-5.263 4.036-8.307 2.613 2.167 5.791 3.316 9.009 3.316 3.6-.003 7.204-1.36 9.967-4.085 3.116-3.08 4.44-7.253 4.09-11.31 1.254.308 2.522.52 3.794.52 3.606 0 7.132-1.246 9.69-3.772 2.686-2.653 4.178-6.207 4.2-10.006s-1.424-7.368-3.897-9.855c-1.034-1.273-2.102-2.495-3.15-3.749l19.153-11.658.646 2.085a2.81 2.81 0 002.684 1.978h34.785a2.807 2.807 0 002.81-2.81V50.15c0-.77-.315-1.506-.874-2.037zM36.928 143.84H7.027V53.119c16.314 1.009 34.062 3.751 55.354 8.55l-25.453 82.17zm156.196 32.82c-3.2 3.165-9.3 2.825-12.802-.724-.048-.048-.11-.065-.16-.107-.188-.216-.332-.458-.537-.666l-30.77-31.152a2.818 2.818 0 00-3.975-.025 2.815 2.815 0 00-.026 3.976l30.77 31.152a8.496 8.496 0 012.459 6.07 8.492 8.492 0 01-2.532 6.035c-3.358 3.325-8.79 3.282-12.111-.073l-6.815-6.898-.01-.014-30.77-31.15a2.817 2.817 0 00-3.974-.025 2.813 2.813 0 00-.025 3.977l30.767 31.151c3.321 3.358 3.287 8.793-.073 12.111-3.361 3.322-8.796 3.282-12.111-.073l-37.598-38.061a2.807 2.807 0 00-3.974-.023 2.81 2.81 0 00-.025 3.974l32.908 33.312c-20.892 11.167-55.497-25.961-86.764-62.573l19.571-63.188h27.58C84.425 80.5 78.075 88.66 75.01 96.098c-3.923 9.515-1.369 14.865 1.464 17.678.073.073.152.143.233.208 10.799 8.562 21.435 10.72 38-6.416 5.623.343 10.41-.632 14.567-2.99 23.34 16.318 44.783 36.421 63.925 59.974 3.32 3.358 3.287 8.793-.074 12.109zm-2.554-23.957c-18-20.822-38.01-38.9-59.617-53.8a2.806 2.806 0 00-3.186-.003c-3.715 2.548-8.259 3.515-13.893 2.964a2.776 2.776 0 00-2.324.871c-15.694 16.7-23.446 13.084-31.216 6.95-2.799-2.92-1.621-7.824-.13-11.446 6.25-15.168 28.418-34.411 44.528-34.414 22.963-.88 49.594 3.586 66.839 11.147l20.097 64.886-21.098 12.845zm58.117-8.863h-29.904L193.33 61.67c21.291-4.8 39.042-7.542 55.354-8.551v90.72z" fill="currentColor" strokeWidth="20" strokeMiterlimit="10"></path></svg>,
            text: `Ensures equitable participation opportunities for both small and large investors, democratizing access to new token launches.`
        },
        {
            color: `#24A69A`,
            title: "Transparent Price Discovery",
            svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-8 w-8 text-success"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg>,
            text: `Offers clear visibility into the valuation process, fostering trust and confidence among participants and observers alike.`
        },
        {
            color: '#EE534F',
            title: "Enhanced Market Readiness",
            svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-8 w-8 text-error dark:text-error"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"></path></svg>,
            text: `Prepares the token and its community for the market by establishing a realistic and market-validated price, reducing speculation and potential market manipulation.`
        }
    ]

    const tasteTestCategories = [
        "Taste",
        "Status",
        "End Date",
        "TVL",
        "Current Price",
        "Change 24H",
        "Team",
        "Manage",
    ]

    const TasteCard = ({ index, color, title, text, svg }) => {
        // color = color?color:'white';
        // title = title?title:"Title"
        // text = text?text:"this is acardthat has not been filled in"

        return (
            <div className={`relative flex flex-col gap-6 md:gap-8 rounded-3xl overflow-hidden p-8 bg-${color} bg-opacity-5`}>
                <div className='z-[1] absolute inset-0' style={{ backgroundColor: color, opacity: 0.05 }}>

                </div>
                <img className={`${index != 0 ? "hidden" : ""} object-cover size-[400px] absolute -right-40 -top-12 z-10 rotate-90 opacity-10 dark:opacity-5 bg-gray-200/30 dark:bg-gray-800/40 transition-colors duration-300object-cover`} src='../public/swirls.png' />
                <img className={`${index != 3 ? "hidden" : ""} object-cover size-[400px] absolute -right-40 -top-32 z-10 rotate-45 opacity-10 dark:opacity-5 bg-gray-200/30 dark:bg-gray-800/40 transition-colors duration-300object-cover`} src='../public/swirls.png' />
                {/* Icon image */}
                <div class="z-[3] flex h-14 w-fit items-center justify-center rounded-full bg-[#0F0619] pl-4 pr-6" style={{ color: color }}>
                    {svg}
                </div>

                {/* Texts */}
                <div className='z-[3] -gap-4'>
                    <p className={`text-2xl md:text-3xl mb-3 font-medium`} style={{ color: color }}>
                        {title}
                    </p>
                    <p className='text-base md:text-xl text-gray-200/60'>
                        {text}
                    </p>
                </div>
            </div>
        )
    }

    const ScrollToButton = ({ sectionID }) => {
        return (
            <div className='group flex items-center justify-center size-5 cursor-pointer'
            onClick={()=>{
                scrollToSection(sectionID)
            }}
            >
                {/* circle */}
                <div className='size-2 bg-primary/40 group-hover:bg-primary/70 scale-100 group-hover:scale-150 rounded-full transition-all duration-300'></div>
                {/* Popups */}
                <div className='rounded-md opacity-0 group-hover:opacity-100 duration-200 delay-200 bg-background flex items-center justify-center px-4 py-2 min-w-12 absolute right-[120%] bg-[linear-gradient(155deg,_#0E132E_0%,_transparent_40%)]'>
                    <span className='text-gray-200 text-xs text-nowrap'>
                        {sectionID}
                    </span>
                </div>
            </div>
        )
    }

    return (
        <section className='w-[100vw] h-full bg-background'>
            {/* Dark bg tint and tint */}
            <div className='absolute w-[100vw] h-[100vh] bg-cover bg-center' style={{ backgroundImage: `url(../../public/liquid.png)`, }}>
                <div className='absolute inset-0 bg-background/90'></div>
            </div>

            <Navigation2 currentTab={"Taste Test"} />

            {/* scroll down */}
            <div onClick={()=>{scrollToSection(sections[1])}} className='animate-upDown absolute mx-auto opacity-50 z-20 w-full bottom-12 cursor-pointer'>
                <div className='flex flex-col justify-center items-center cursor-pointer' onClick={() => { scrollToSection("benefits") }}>
                    <p className="text-white">
                        Scroll to learn more
                    </p>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 flex transform rotate-[180deg]"  transition-transform duration-300`}>
                        <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="white" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                </div>
            </div>

            {/* Scroll to Buttons */}
            <div className='hidden  md:flex flex-col gap-1 px-1 right-0 top-1/2 -translate-y-1/2'>
                {sections.map((id, index) => (
                    <ScrollToButton
                        key={index}
                        sectionID={id}
                    />
                ))}
            </div>

            {/* max width div */}
            <div className='pt-6 md:pt-0 px-7 md:px-0 mb-20 max-w-[81rem] md:h-full mx-auto' >

                {/* Hero div */}
                <div id={sections[0]} className='w-full h-[100vh] flex px-0 md:px-12'>
                    <div className='pt-0 z-10 flex flex-col gap-5 md:gap-8 w-[60rem] px-5 lg:px-0 my-auto'>
                        <div className='aspect-square w-11 md:w-16'>
                            <img src='../../icon.png' className='w-full height-full' />
                        </div>
                        <p className='text-gray-200 text-3xl md:text-7xl font-medium max-w-[50rem]'>
                            Sundae Lab's presents: The <span className='text-primary'>Taste Test</span>.
                        </p>
                        <p className='text-lg md:text-2xl text-gray-200/60 max-w-[35rem] leading-snug'>
                            The Taste Test is a unique flavor of token launch. It creates a decentralized negotiation between a project and the community to decide a fair opening price for a new token, bootstrap liquidity for a trading market, and reduce initial market volability
                        </p>
                        <button className={`flex gap-2 items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] relative overflow-hidden group border-none text-white bg-gradient-to-r from-secondary to-primary hover:from-secondary-300 hover:to-primary-300 min-w-[125px] px-5 text-sm font-semibold md:text-lg h-8 md:h-11 rounded-lg w-fit`}>
                            Explore Taste Tests
                        </button>
                    </div>
                </div>



                {/* subheading div */}
                <div id={sections[1]} className='w-full pt-24 pb-18'>
                    <div className='flex flex-col gap-8 pb-8'>
                        <p className='max-w-[30rem] text-3xl md:text-5xl text-gray-200'>
                            Bringing stability and fairness in pricing to token launches.
                        </p>
                        <p className='max-w-[35rem] text-base md:text-xl text-gray-200/60'>
                            The Taste Test platform revolutionizes this process through an automated price discovery LBE, ensuring a smooth entry for new tokens into the market. By employing a controlled and participatory method of liquidity provision, "Taste Test" not only mitigates the early launch volatility often seen in new tokens but also paves the way for a more democratic and transparent market valuation.
                        </p>
                    </div>


                    {/* Cards */}
                    <div className='grid md:grid-cols-2 gap-4'>
                        {
                            cardContent.map((item, index) => (
                                <TasteCard
                                    key={index}
                                    index={index}
                                    color={item.color}
                                    title={item.title}
                                    text={item.text}
                                    svg={item.svg}
                                />
                            ))
                        }
                    </div>
                </div>


                {/* Schooping */}
                <div id={sections[2]} onScroll={() => { alert("okay") }} className='relative flex pt-[12rem] pb-[10rem] w-full'>

                    <div className='flex flex-col md:flex-row items-center justify-between gap-10 w-full'>
                        <div className='w-full md:max-w-[40rem] flex flex-col my-10 gap-6'>
                            <p className='text-3xl md:text-5xl text-gray-200 max-w-[34rem]'>
                                Schooping Soon: Sample our upcoming Taste Tests!
                            </p>
                            <p className='text:lg md:text-xl text-gray-200/60 max-w-[34rem]'>
                                Find your favorite flavor. Get early insights into the upcoming Taste Test launches and participate in shaping the future of Cardano.
                            </p>
                        </div>

                        <div className='flex'>
                            <img src='../../public/no-taste-tests.png' className='h-full' />
                        </div>

                    </div>
                </div>


                {/* Prior taste tests */}
                <div id={sections[3]} className='relative flex flex-col pt-24 pb-20 w-full rounded-3xl gap-7'>
                    <div className='max-w-[40rem] flex flex-col gap-7'>
                        <p className='text-3xl md:text-5xl text-gray-200 max-w-[34rem]'>
                            Check out ongoing Taste Tests, or explore prior ones.
                        </p>
                        <p className='text-lg md:text-xl text-gray-200/60 max-w-[34rem]'>
                            Discover how past launches fared and how current launches are performing
                        </p>
                    </div>

                    <div className='w-full overflow-hidden'>
                        {/* taste test category tabs */}
                        <div className='mb-5 flex gap-6'>
                            <span className='md:hidden text-base text-primary'>
                                Ongoing                             </span>
                            <span className='md:hidden text-base text-gray-200/60'>
                                Concluded
                            </span>
                            <span className='hidden md:inline text-xl text-primary'>
                                Ongoing Taste Tests
                            </span>
                            <span className='hidden md:inline text-xl text-gray-200/60'>
                                Concluded Taste Tests
                            </span>
                        </div>

                        {/* Taste test categoris */}
                        <div className='rounded-xl overflow-x-scroll min-w-[80rem]'>
                            <div className='bg-[#110B1B] border-b border-gray-200/10'>
                                <div className='grid grid-cols-8'>
                                    {
                                        tasteTestCategories.map((item, index) => (
                                            <div className=' py-2 pl-4'>
                                                <span className='font-bold flex w-fit gap-1 items-center py-1 text-gray-200/60 hover:text-gray-200 transition-colors duration-300 text-xs cursor-pointer'>
                                                    {item} 
                                                    <div class="inline"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-2 w-2 opacity-100"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"></path></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="-mt-[2px] h-2 w-2 opacity-100"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg></div>
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className='h-[13rem] grid grid-cols-3 bg-[linear-gradient(165deg,_#0E0B21_0%,_transparent_45%)]'>
                                <div></div>
                                <div className='flex items-center justify-center'>
                                    <p className='text/-sm text-gray-200'>No ongoing Taste Tests found.</p>
                                </div>
                                <div></div>
                            </div>
                        </div>

                    </div>
                </div>

                <section id={sections[4]} className="pt-24">
                    <TasteTestFAQ />
                </section>
            </div>

            <Footer2 />
        </section>
    )
}

export default Fi_TasteTest