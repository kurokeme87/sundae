import React from 'react'
import Navigation2 from '../Components/Navigation2'
import Footer2 from '../Components/Footer2'
import TasteTestFAQ from '../Components/TasteTestFAQ'
import { scrollToSection } from '../scripts/utils'
// import { isHtmlElement } from 'react-router-dom/dist/dom'

const Fi_TasteTest = () => {
    const cardContent = [
        {
            color: `#0B99FA`,
            title: "Reduced Launch Volability.",
            text: `By allowing price discovery in a controlled enviroment before open trading, "Taste Test" significantly dampens initial price savings, offering a more stable launch`
        },
        {
            color: `#B202EC`,
            title: "Fair and Democratic Access.",
            text: `Ensures equitable participation opportunities for both small and large investors, democratizing access to new token launches.`
        },
        {
            color: `#24A69A`,
            title: "Transparent Price Discovery",
            text: `Offers clear visibility into the valuation process, fostering trust and confidence among participants and observers alike.`
        },
        {
            color: '#EE534F',
            title: "Enhanced Market Readiness",
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

    const TasteCard = ({ color, title, text }) => {
        // color = color?color:'white';
        // title = title?title:"Title"
        // text = text?text:"this is acardthat has not been filled in"

        return (
            <div className={`relative flex flex-col gap-6 md:gap-8 rounded-3xl overflow-hidden p-8 bg-${color} bg-opacity-5`}>
                <div className='absolute inset-0' style={{backgroundColor:color,opacity:0.05}}>

                </div>
                {/* Icon image */}
                <div className='h-14 w-fit rounded-full flex item-center justify-center overflow-hidden bg-background'>
                    <img src='/icon.png' className='w-8 h-8' />
                </div>
                {/* Texts */}
                <div className='-gap-4'>
                    <p className={`text-2xl md:text-3xl mb-3 font-medium`} style={{color:color}}>
                        {title}
                    </p>
                    <p className='text-base md:text-xl text-gray-200/60'>
                        {text}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <section className='w-[100vw] h-full bg-background'>
            {/* Dark bg tint and tint */}
            <div className='absolute w-[100vw] h-[100vh] bg-cover bg-center' style={{ backgroundImage: `url(../../public/liquid.png)`, }}>
                <div className='absolute inset-0 bg-background/90'></div>
                {/* Scholl to learn more */}
            </div>

            <Navigation2 currentTab={"Taste Test"} />

            {/* scroll down */}
            <div className='animate-upDown absolute mx-auto opacity-40 z-20 w-full bottom-12'>
                <div className='flex flex-col justify-center items-center cursor-pointer' onClick={()=>{scrollToSection("benefits")}}>
                <p className="text-white">
                    Scroll to learn more
                </p>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 flex transform rotate-[180deg]"  transition-transform duration-300`}>
                    <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="white" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
                </div>
            </div>

            {/* max width div */}
            <div className='pt-6 md:pt-0 px-7 md:px-0 mb-20 max-w-[81rem] md:h-full mx-auto' >

                {/* Hero div */}
                <div className='w-full h-[100vh] flex px-0 md:px-12'>
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
                <div id='benefits' className='w-full flex flex-col gap-8 md:px-4 pt-24 pb-10'>
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
                                color={item.color}
                                title={item.title}
                                text={item.text}
                            />
                        ))
                    }
                </div>


                {/* Schooping */}
                <div className='relative flex pt-[12rem] pb-[10rem] md:pb-[17rem] w-full'>

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
                <div className='relative flex flex-col pb-20 md:pb-[15rem] w-full rounded-3xl gap-7'>
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
                                                <span className='font-bold text-gray-200/60 hover:text-gray-200 transition-colors duration-300 text-xs cursor-pointer'>
                                                    {item}
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


                <TasteTestFAQ />
            </div>

            <Footer2 />
        </section>
    )
}

export default Fi_TasteTest