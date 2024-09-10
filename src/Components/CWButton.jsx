// import React from 'react'

const CWButton = ({bgcol, text}) => {
  bgcol = bgcol?bgcol:'gradient-to-r from-secondary to-primary hover:from-secondary-300 hover:to-primary-300'
  text = text?text:"Connect Wallet"
  return (
    <button className={`flex gap-2 items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] relative overflow-hidden group border-none text-white bg-${bgcol} min-w-[125px] px-5 text-lg h-11 rounded-lg lg:w-fit`}>
        {text}
    </button>
  )
}

export default CWButton