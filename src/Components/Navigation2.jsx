// import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import SundaeConnectButton from "./global/SundaeConnectButton";
import ConnectedButton from "./global/ConnectedButton";
const Navigation2 = ({ currentTab }) => {
  const linkButtons = [
    { name: "Home", path: "/fi" },
    { name: "Exchange", path: "/fi/exchange" },
    { name: "Liquidify", path: "/fi/liquidify" },
    { name: "Yield Farming", path: "/fi/yield-farming" },
    { name: "Taste Test", path: "/fi/taste-test" },
  ];
  const [activeTab, setactiveTab] = useState(currentTab);
  const [isMenyOpen, setisMenyOpen] = useState(false);
  return (
    <nav
      id="navbar"
      className="fixed top-0 z-50 bg-[#0F0619]/95 flex justify-center items-center w-screen h-[4.5rem] md:h-[5.3rem] px-5 border-b border-gray-200/10"
    >
      {/* inner div */}
      <div className="h-10 w-full flex justify-between">
        {/* left div */}
        <div className="flex">
          {/* logo */}
          <div className="h-full aspect-square p-1 mr-7">
            <img className="w-full h-full" src="/icon.png" />
          </div>

          {/* Links */}
          <div className="hidden md:flex text-white gap-2 py-[2px]">
            {linkButtons.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className={`px-3 h-full flex items-center justify-center rounded-md hover:bg-[#0E2142] transition-colors duration-300 ${
                  activeTab === item.name
                    ? "text-primary bg-primary/20"
                    : "text-gray-200 hover:text-gray-200"
                }`}
                onClick={() => {
                  setactiveTab(item.name);
                }}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* right div */}
        <div className="flex items-center gap-2">
          {/* Menu button */}
          <div className="md:hidden flex">
            <button
              onClick={() => setisMenyOpen(!isMenyOpen)}
              className="text-gray-200"
            >
              {isMenyOpen ? "Close" : "Menu"}
            </button>
          </div>

          <div className="me-4 hidden lg:block">
            <h1>
              ADA Price: <span className="text-white font-bold"> $0.00</span>
            </h1>
          </div>

          <div className="hidden gap-2 lg:flex">
            <SundaeConnectButton
              isNavbar
              component={<ConnectedButton />}
              connect={
                <button
                  className={`flex gap-2 text-sm items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] relative overflow-hidden group border-none text-white bg-gradient-to-r from-secondary to-primary hover:from-secondary-300 hover:to-primary-300 min-w-[125px] px-3 py-2 h-full max-h-8 rounded-lg lg:w-fit`}
                >
                  Connect Wallet
                </button>
              }
            />
            <button
              className="flex gap-2 items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] hover:bg-gray-400 hover:dark:bg-gray-600/75 hover:bg-gray-400 hover:dark:bg-gray-600/75 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray border-transparent min-w-[100px] px-3 text-sm h-8 rounded-lg h-8 w-8 !min-w-0 !px-0"
              data-testid="button"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-black dark:text-gray-200 w-4 h-4 fill-current text-black dark:text-white"
              >
                <path
                  d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="relative inline-block text-left">
              <button
                className="flex gap-2 items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] hover:bg-gray-400 hover:dark:bg-gray-600/75 hover:bg-gray-400 hover:dark:bg-gray-600/75 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray border-transparent min-w-[100px] px-3 text-sm h-8 rounded-lg h-8 w-8 !min-w-0 !px-0"
                data-testid="popover-trigger"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r1e:"
                data-state="closed"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current text-black dark:text-white"
                >
                  <path
                    d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed ${
          isMenyOpen ? "left-0" : "left-[100%]"
        } transition-all duration-300 top-[4.5rem] w-full h-[100dvh] bg-[#0F0619]`}
      >
        {/* Connect walltet buttong */}
        <div className="flex justify-center pt-4 pb-2">
          <button
            className={`flex gap-2 text-sm items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] relative overflow-hidden group border-none text-white bg-gradient-to-r from-secondary to-primary hover:from-secondary-300 hover:to-primary-300 min-w-[125px] px-3 py-2 text-lg h-full max-h-8 rounded-lg lg:w-fit`}
          >
            Connect
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col text-gray-200 gap-2">
          {linkButtons.map((item, index) => (
            <Link
              to={item.path}
              className={`w-full py-2 text-left ${
                activeTab === item.name
                  ? "text-primary bg-primary/20"
                  : "text-gray-200 hover:text-gray-200"
              }`}
              key={index}
            >
              <span className="text-2xl pl-5">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* others */}
        <div className="flex gap-4 pl-5 pt-5">
          <div className="relative inline-block text-left">
            <button
              className="flex gap-2 items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] hover:bg-gray-400 hover:dark:bg-gray-600/75 hover:bg-gray-400 hover:dark:bg-gray-600/75 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray border-transparent min-w-[100px] px-3 text-sm h-8 rounded-lg h-8 w-8 !min-w-0 !px-0"
              data-testid="popover-trigger"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:r1e:"
              data-state="closed"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current text-black dark:text-white"
              >
                <path
                  d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <button
            className="flex gap-2 items-center justify-center disabled:cursor-not-allowed disabled:opacity-60 group transition duration-300 border active:scale-[0.975] hover:bg-gray-400 hover:dark:bg-gray-600/75 hover:bg-gray-400 hover:dark:bg-gray-600/75 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray border-transparent min-w-[100px] px-3 text-sm h-8 rounded-lg h-8 w-8 !min-w-0 !px-0"
            data-testid="button"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-black dark:text-gray-200 w-4 h-4 fill-current text-black dark:text-white"
            >
              <path
                d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation2;
