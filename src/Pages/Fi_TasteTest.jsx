import React from 'react'
import Navigation2 from '../Components/Navigation2'
import Footer2 from '../Components/Footer2'
// import { isHtmlElement } from 'react-router-dom/dist/dom'

const Fi_TasteTest = () => {
    const cardContent = [
        {
            color: `primary`,
            title: "Reduced Launch Volability.",
            text: `By allowing price discovery in a controlled enviroment before open trading, "Taste Test" significantly dampens initial price savings, offering a more stable launch`
        },
        {
            color: `secondary`,
            title: "Fair and Democratic Access.",
            text: `Ensures equitable participation opportunities for both small and large investors, democratizing access to new token launches.`
        },
        {
            color: `success`,
            title: "Transparent Price Discovery",
            text: `Offers clear visibility into the valuation process, fostering trust and confidence among participants and observers alike.`
        },
        {
            color: `error`,
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
            <div className={`flex flex-col gap-8 rounded-3xl overflow-hidden p-8 bg-${color} bg-opacity-5`}>
                {/* Icon image */}
                <div className='h-14 w-fit rounded-full flex item-center justify-center gap-4 overflow-hidden bg-background'>
                    <img src='/icon.png' className='w-8 h-8' />
                </div>
                {/* Texts */}
                <div className='-gap-4'>
                    <p className={`text-3xl mb-3 font-medium text-${color}`}>
                        {title}
                    </p>
                    <p className='text-xl text-gray-200/60'>
                        {text}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <section className='relative w-[100vw] h-full bg-background'>
            {/* Dark bg tint and tint */}
            <div className='absolute w-[100vw] h-[100vh] bg-cover bg-center' style={{ backgroundImage: `url(../../public/liquid.png)`, }}>
                <div className='absolute inset-0 bg-background/90'></div>
                <Navigation2 currentTab={"Taste Test"} />
            </div>


            {/* max width div */}
            <div className='max-w-[81rem] h-full mx-auto' >
                {/* Hwro div */}
                <div className='w-full h-[100vh] flex px-12'>
                    <div className='pt-0 z-10 flex flex-col gap-8 w-[60rem] px-12 lg:px-0 my-auto'>
                        <div className='aspect-square w-16'>
                            <img src='../../icon.png' className='w-full height-full' />
                        </div>
                        <p className='text-gray-200 text-7xl font-medium max-w-[50rem]'>
                            Sundae Lab's presents: The <span className='text-primary'>Taste Test.</span>
                        </p>
                        <p className='text-2xl text-gray-200/60 max-w-[35rem]'>
                            The Taste Test is a unique flavor of token launch. It creates a decentralized negotiation between a project and the community to decide a fair opening price for a new token, bootstrap liquidity for a trading market, and reduce initial market volability
                        </p>
                        <button className={`flex gap-2 items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] relative overflow-hidden group border-none text-white bg-gradient-to-r from-secondary to-primary hover:from-secondary-300 hover:to-primary-300 min-w-[125px] px-5 text-lg h-11 rounded-lg lg:w-fit`}>
                            Explore Taste Tests
                        </button>
                    </div>
                </div>



                {/* subheading div */}
                <div className='- w-full flex flex-col gap-8 px-4 mt-24 mb-10'>
                    <p className='max-w-[30rem] text-5xl text-gray-200'>
                        Bringing stability and fairness in pricing to token launches.
                    </p>
                    <p className='max-w-[35rem] text-xl text-gray-200/60'>
                        The Taste Test platform revolutionizes this process through an automated price discovery LBE, ensuring a smooth entry for new tokens into the market. By employing a controlled and participatory method of liquidity provision, "Taste Test" not only mitigates the early launch volatility often seen in new tokens but also paves the way for a more democratic and transparent market valuation.
                    </p>
                </div>


                {/* Cards */}
                <div className='grid md:grid-cols-2 gap-4 px-5'>
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
                <div className='relative flex pt-[12rem] pb-[17rem] w-full'>

                    <div className='flex w-full'>
                        <div className='max-w-[40rem] flex flex-col my-10 gap-8'>
                            <p className='text-5xl text-gray-200 max-w-[34rem]'>
                                Schooping Soon: Sample our upcoming Taste Tests!
                            </p>
                            <p className='text-xl text-gray-200/60 max-w-[34rem]'>
                                Find your favorite flavor. Get early insights into the upcoming Taste Test launches and participate in shaping the future of Cardano.
                            </p>
                        </div>

                        <div className='absolute right-0'>
                            <img src='../../public/no-taste-tests.png' className='h-full' />
                        </div>

                    </div>
                </div>


                {/* Prior taste tests */}
                <div className='relative flex flex-col pb-[15rem] w-full rounded-3xl gap-7'>
                    <div className='max-w-[40rem] flex flex-col gap-7'>
                        <p className='text-5xl text-gray-200 max-w-[34rem]'>
                            Check out ongoing Taste Tests, or explore prior ones.
                        </p>
                        <p className='text-xl text-gray-200/60 max-w-[34rem]'>
                            Discover how past launches fared and how current launches are performing
                        </p>
                    </div>

                    <div className='w-full'>
                        {/* taste test category tabs */}
                        <div className='mb-5 flex gap-6'>
                            <span className='text-xl text-primary'>
                                Ongoing Taste Tests
                            </span>
                            <span className='text-xl text-gray-200/60'>
                                Concluded Taste Tests
                            </span>
                        </div>

                        {/* Taste test categoris */}
                        <div className='rounded-xl overflow-hidden'>
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



            </div>

            <Footer2 />
        </section>
    )
}

export default Fi_TasteTest