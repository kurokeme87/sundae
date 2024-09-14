import React from 'react'
import Navigation2 from '../Components/Navigation2'

const Fi_liquidify = () => {

    const EducationalCard = ({ image, title, subtitle, link }) => {
        return (
            <article className='rounded-xl flex-col overflow-hidden border border-gray-200/10 max-h-min'>
                {/* Image div */}
                <div className='basis-1/2'>
                    <img src={image}
                        className='w-full'
                    />
                </div>
                {/* Text div */}
                <div className='basis-1/2 text-gray-200 py-3 px-4'>
                    <p className='text-2xl font-bold mb-2'>
                        {title}
                    </p>
                    <p className='text-sm md:text-base'>
                        {subtitle}
                    </p>
                    <span className='text-sm md:text-base relative bottom-[2px] text-primary hover:text-primary/70'>
                        <a href='link'>Learn More</a>
                    </span>
                </div>
            </article>
        )
    }
    return (
        <section className='bg-[#0F0619]'>
            <Navigation2 currentTab={"Liquidify"} />
            <section className='flex flex-col min-h-[100vh]  border border-gray-200/10 mx-auto max-w-screen-2xl px-4 md:px-8 pt-20'>


                {/* Eduction and Help */}

                <p className='text-xl md:text-2xl text-gray-200 mt-5 mb-5 font-bold'>
                    Education and Help
                </p>
                <section className='flex lg:flex-ro flex-col gap-9'>
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