
const EducationalCard = ({ image, title, subtitle, link }) => {
    return (
        <article className='rounded-xl bg-tableColor2 flex flex-col overflow-hidden border border-gray-200/10 '>
            {/* Image div */}
            <div className=''>
                <img src={image}
                    className='w-full h-[9rem] object-cover'
                />
            </div>
            {/* Text div */}
            <div className='text-gray-200 py-3 px-4'>
                <p className='text-xl md:text-2xl font-bold mb-2'>
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

export default EducationalCard