// import React from 'react'

const CWButton = ({bgcol}) => {
  bgcol = bgcol?bgcol:'gradient-to-r from-secondary to-primary hover:from-secondary-300 hover:to-primary-300'
  
  return (
    <button className={`flex gap-2 items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] relative inline-flex justify-center items-center overflow-hidden group border-none text-white bg-${bgcol} min-w-[125px] px-5 text-lg h-full max-h-11 rounded-lg lg:w-fit`}>
        Connect Wallet
    </button>
  )
}

export default CWButton