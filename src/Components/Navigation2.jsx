// import React from 'react'

import CWButton from "./CWButton"

const Navigation2 = () => {
  const buttonClass = "px-4 h-full flex items-center justify-center rounded-md"
  const linkButtons = [
    "Home",
    "Exchange",
    "Liquidify",
    "Yield Farmig",
    "Taste Test"
  ]
  return (
    <nav className="z-50 sticky top-0 bg-[#0F0619] flex justify-center items-center w-full h-[5.3rem] px-5 border-b border-gray-200">

      {/* inner div */}
      <div className="h-10 w-full flex justify-between text-sm">

        {/* left div */}
        <div className="flex">
          {/* logo */}
          <div className="h-full aspect-square p-1 mr-7">
            <img className="w-full h-full" src="../../public/icon.png" />
          </div>

          {/* Links */}
          <div className="flex text-gray-200 gap-1">
            {
              linkButtons.map((item, index) => (
                <button className={buttonClass} key={index}>
                  <span>{item}</span>
                </button>
              ))
            }
          </div>

        </div>

        {/* right div */}
        <div className="flex items-center">
          <CWButton />
          <div className="h-full aspect-square"></div>
          <div className="h-full aspect-square"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation2