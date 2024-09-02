import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Navigation">
      <div className="text-white flex items-center justify-between max-w-screen-2xl m-auto px-6 lg:px-20 py-6 lg:py-8">
        <div className="fredokaFont flex gap-2 items-center">
          <img src="/icon.png" alt="sundae" className="w-8 md:w-12" />
          <h1 className="text-xl md:text-3xl font-semibold">Sundae Labs</h1>
        </div>
        <ol className="lg:flex items-center gap-10 text-lg font-normal hidden">
          <li className="flex gap-2 items-center cursor-pointer">
            Products{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-3 w-3 text-current transition duration-500"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </li>
          <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer">
            Services
          </li>
          <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer">
            News & Updates
          </li>
          <li className="hover:text-[#f070d0] ease-in-out duration-500 cursor-pointer">
            Careers
          </li>
        </ol>

        <nav
          className="relative flex h-8 w-8 items-center justify-center rounded-sm bg-white/10 block lg:hidden"
          role="button"
          onClick={toggleMenu}
        >
          <span className="sr-only">
            {isOpen ? "Close main menu" : "Open main menu"}
          </span>
          <span
            aria-hidden="true"
            className={`absolute block h-[1px] w-3 transform bg-white transition duration-500 ease-in-out ${
              isOpen ? "rotate-45" : "-translate-y-1"
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`absolute block h-[1px] w-3 transform bg-white transition duration-500 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`absolute block h-[1px] w-3 transform bg-white transition duration-500 ease-in-out ${
              isOpen ? "-rotate-45" : "translate-y-1"
            }`}
          ></span>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
