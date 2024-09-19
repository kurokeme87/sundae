import React from 'react'
import { useState } from 'react';
// import { psuedoUUID } from '../scripts/utils'

const QnA = [
    [
        {
            Q: "What is the Taste Test by Sundae Labs?",
            A: "The Taste Test is an innovative Liquidity Bootstrapping Event (LBE) platform designed for projects or tokens planning to launch their pre-sale in a decentralized, community-driven manner. It aims to prevent pump and dump schemes by facilitating community participation in the initial price discovery phase of a new token.",
        },
        {
            Q: "How can i participate in the Taste Test?",
            A: <div className='flex flex-col gap-2'>
                <p>
                    <span className='text-gray-200 font-bold'>1. Connect Wallet</span>: Begin by connecting your crypto wallet to the Taste Test platform.
                </p>
                <p>
                    <span className='text-gray-200 font-bold'>2. Contribute ADA</span>: Decide the amount of ADA you wish to contribute and enter it into the Taste Test.
                </p>
                <p>
                    <span className='text-gray-200 font-bold'>3. Transaction and Share Calculation</span>: After confirming the transaction, the platform calculates your share of the upcoming liquidity pool.
                </p>
                <p>
                    <span className='text-gray-200 font-bold'>4. Withdrawal and Penalties</span>: You can withdraw your contribution at any point before the Taste Test concludes. However, withdrawals in the last 24 hours incur a penalty fee to prevent disruptive last-minute fund removals.
                </p>
            </div>,
        },
        {
            Q: "What happens after the Taste Test concludes",
            A: "Once the Taste Test concludes, contributed assets are consolidated into a liquidity pool to generate LP Tokens. Participants then receive LP Tokens based on their share of the contribution.",
        },
        {
            Q: "Are there any penalties for withdrawing my contribution?",
            A: "Yes, withdrawals within the last 24 hours of the Taste Test incur a penalty fee. This policy is in place to stabilize the final phase of price discovery by discouraging last-minute withdrawals.",
        },
    ],
    [
        {
            Q: "Where can I participate in the Taste Test?",
            A: <div>
                You can participate in the Taste Test through the Sundae Labs platform by visiting <a className='text-primary cursor-pointer'>https://app.sundae.fi/taste-test</a>
            </div>,
        },
        {
            Q: "Why does the Taste Test discourage last-minute withdrawals?",
            A: "Last-minute withdrawals can negatively impact the final price discovery process by causing sudden changes in the liquidity pool. The penalty fee is a deterrent to ensure a more stable and fair price setting for the token.",
        },
        {
            Q: "Can I see how my contribution affects the token price?",
            A: "Yes, the interactive chart feature allows you to visualize how individual contributions impact the token's target price, offering a transparent and dynamic approach to price discovery.",
        },
        {
            Q: "What are LP Tokens and how do they work?",
            A: "LP Tokens represent your share in the liquidity pool created during the Taste Test. They signify ownership and entitlement to a portion of the pool's assets and any accrued fees. LP Tokens can typically be used for further trading, staking, or participation in governance within the platform.",
        },
    ],
    [
        {
            Q: "How is the initial price of the new token determined?",
            A: "The initial price is determined through the contributions made during the Taste Test. This process is driven by community participation and allows for a decentralized price discovery mechanism that reflects the collective valuation of the token by its future users and investors.",
        },
        {
            Q: "Can I increase my contribution after my inital transaction?",
            A: "Yes, participants are generally allowed to increase their contribution to the liquidity pool before the Taste Test concludes. Each additional contribution will be reflected in the share calculation, potentially increasing your received LP Tokens.",
        },
        {
            Q: "What happens if the Taste Test does not reach its contribution goal?",
            A: "Depending on the specific rules set by the project, if a Taste Test does not meet its predetermined contribution goal, the event may be extended, or contributions might be returned to participants. It’s important to check the specific terms and conditions of each Taste Test event.",
        },
        {
            Q: "Is there a minimum contribution required to participate?",
            A: "Some Taste Test events have a minimum contribution threshold to ensure meaningful participation and avoid spam. The exact amount can vary based on the project and should be specified in the event details.",
        },
    ],
    [
        {
            Q: "How can participants ensure that their contributions are secure?",
            A: "Security measures for contributions typically include smart contract audits and secure wallet connections. Participants are advised to only contribute through the official platform and ensure their wallet is compatible and secure.",
        },
        {
            Q: "What risks should participants be aware of?",
            A: "Like any investment in the crypto space, participating in an LBE carries risks such as market volatility and project failure. It’s important to research the project thoroughly and consider the risk of losing your contribution.",
        },
        {
            Q: "Are there any geographical restrictions for participants?",
            A: "Due to regulatory considerations, participants from certain countries might be restricted from joining the Taste Test. It’s essential to review the terms of participation and ensure compliance with your local laws regarding cryptocurrency investments.",
        },
        {
            Q: "How can participants track the progress of the Taste Test?",
            A: "Progress can usually be monitored directly on the platform through the interactive chart and recent contributions table. Some projects may also offer email updates or Telegram/Discord channels for real-time notifications and community discussion.",
        },
    ],
]


const TasteTestFAQ = () => {
    // number 1 to 4
    const [questionTab, setquestionTab] = useState(1)
    /// question currently open
    const [openQuestionCardTitle, setopenQuestionCardTitle] = useState(QnA[0][0].Q)

    const ChangeQuestionTabButton = ({ tabNumber }) => {
        return (
            <button
                className={`${questionTab == tabNumber ? 'bg-primary text-gray-200' : 'bg-transparent hover:bg-primary/20 text-gray-200/60'} transition-colors duration-200 rounded-lg aspect-square w-8`}
                onClick={() => {
                    setopenQuestionCardTitle(QnA[tabNumber - 1][0].Q)
                    setquestionTab(tabNumber);
                }}
            >
                {tabNumber}
            </button>
        )
    }

    const QuestionCard = ({ open, question, answer, index }) => {
        open = open ? open : false;
        return (
            <div className='flex flex-col transition-all duration-300'>
                {/* Quiestion Title */}
                <div className='py-3 pl-6 cursor-pointer flex items-center justify-between' onClick={() => setopenQuestionCardTitle(question)}>
                    <span className={`text-base md:text-xl font-semibold ${open ? 'text-primary' : 'text-gray-200'}`}>
                        {question}
                    </span>
                    <div className='px-3'>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 flex transform ${open ? "rotate-[180deg]" : "rotate-[0deg]"} transition-transform duration-300`}>
                            <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill={`${open ? "#0B99FA" : "white"}`} fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                    </div>
                </div>

                {/* Quiestion anser */}
                <div className={`${open ? "h-auto "+index < 3?"border-b border-primary/20":"" : "h-0"} transition-all duration-300 overflow-hidden`}>
                {/* <div className={`${open ? "max-h-[100rem] border-b border-primary/20" : "max-h-0"}  transition-all duration-300 overflow-hidden`}> */}
                    <p className='text-sm md:text-base text-gray-200/60 mb-4 mt-5 mx-6 leading-relaxed'>
                        {answer}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className='flex flex-col md:flex-row w-full justify-between gap-12 pb-10 md:pb-20'>
            {/* Questions */}
            <div className='order-2 md:order-1 flex flex-col gap-6'>
                {/* Quiestion cards div */}
                <div className='max-w-[36rem] flex flex-col pt-0.5 md:pt-1 gap-1.5 bg-[linear-gradient(100deg,_#0E122D_0%,_transparent_60%)]'>
                    {
                        QnA[questionTab - 1].map((item, index) => (
                            <QuestionCard
                                key={index}
                                open={openQuestionCardTitle == item.Q}
                                question={item.Q}
                                answer={item.A}
                                index={index}
                            />
                        ))
                    }
                </div>

                {/* Qestion page selector div */}
                <div className='flex gap-2 pl-2 md:pl-4'>
                    <ChangeQuestionTabButton tabNumber={1} />
                    <ChangeQuestionTabButton tabNumber={2} />
                    <ChangeQuestionTabButton tabNumber={3} />
                    <ChangeQuestionTabButton tabNumber={4} />
                </div>
            </div>

            {/* Frequiently asked quiestions */}
            <div className='oreder-1 md:order-2 flex flex-col gap-8 max-w-[36rem] md:my-auto'>
                <p className='text-3xl md:text-5xl text-gray-200'>Frequently Asked Questions</p>
                <p className='text-lg md:text-xl text-gray-200/60'>
                    Navigate your Taste Test Journey with Confidence: Explore our comprehensive guide to find detailed answers to all your questions about the Taste Test. From participation steps to understanding benefits, we've got you covered. Dive into our FAQs to make your Taste Test Journey smooth and informed.
                </p>
            </div>
        </div>
    )
}

export default TasteTestFAQ