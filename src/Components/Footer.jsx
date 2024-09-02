function Footer() {
  return (
    <div className="Footer">
      <div className="max-w-[1300px] m-auto pt-[150px] pb-10">
       <div className="flex flex-col lg:flex-row p-8 justify-between">
       <div className="flex flex-col max-w-[300px] lg:max-w-[390px] w-full fredokaFont">
          <div className="flex gap-2 items-center text-white">
            <img src="/icon.png" alt="sundae" className="w-8 md:w-12" />
            <h1 className="text-xl md:text-3xl font-semibold">Sundae Labs</h1>
          </div>
          <p className="text-[#b4a5c1] mt-4">
            Building sweeter blockchain infrastructure. One scoop at a time.
          </p>
        </div>

        <div className="fredokaFont mt-10 lg:mt-0">
          <h1 className="text-[#b4a5c1] text-sm mb-4">Products</h1>
          <ol className="text-white text-sm flex flex-col gap-5">
            <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer">Sundae Rewards</li>
            <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer">Sundae Governance</li>
            <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer">SundaeSwap</li>
            <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer">Catalyst Proposals</li>
          </ol>
        </div>

        <div className="fredokaFontt mt-10 lg:mt-0">
          <h1 className="text-[#b4a5c1] text-sm mb-4">Learn</h1>
          <ol className="text-white text-sm flex flex-col gap-5">
            <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer flex items-center gap-2">Help Center <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"className="h-3 w-3"><path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd"></path></svg></li>
            <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer flex items-center gap-2">Governance <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"className="h-3 w-3"><path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd"></path></svg></li>
            <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer flex items-center gap-2">Medium <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"className="h-3 w-3"><path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd"></path></svg></li>
            <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer flex items-center gap-2">Governance Forum <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"className="h-3 w-3"><path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd"></path></svg></li>
          </ol>
        </div>

        <div className="fredokaFontt mt-10 lg:mt-0">
          <h1 className="text-[#b4a5c1] text-sm mb-4">Community</h1>
          <ol className="text-white text-sm flex flex-col gap-5">
            <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer flex items-center gap-2">Twitter <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"className="h-3 w-3"><path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd"></path></svg></li>
            <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer flex items-center gap-2">Reddit <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"className="h-3 w-3"><path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd"></path></svg></li>
            <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer flex items-center gap-2">Discord <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"className="h-3 w-3"><path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd"></path></svg></li>
            <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer flex items-center gap-2">Medium <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"className="h-3 w-3"><path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd"></path></svg></li>
          </ol>
        </div>

        <div className="fredokaFontt mt-10 lg:mt-0">
          <h1 className="text-[#b4a5c1] text-sm mb-4">Resources</h1>
          <ol className="text-white text-sm flex flex-col gap-5">
            <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer">Media Kit</li>
            <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer">News & Updates</li>
          </ol>
        </div>

        <div className="fredokaFontt mt-10 lg:mt-0">
          <h1 className="text-[#b4a5c1] text-sm mb-4">Foundation</h1>
          <ol className="text-white text-sm flex flex-col gap-5">
            <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer">Careers</li>
            <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer">Contact</li>
          </ol>
        </div>
       </div>
       <div className="mt-4 px-8 max-w-[330px] lg:max-w-lg">
            <p className="text-[#b4a5c1] text-sm">© 2024 SundaeSwap Labs, Inc. All rights reserved.</p>
          </div>
      </div>
    </div>
  );
}

export default Footer;
