import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const AssetSwapModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Placeholder function for loading more assets
  const loadMoreAssets = () => {
    console.log("Loading more assets...");
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div
        className="fixed  z-10"
        aria-hidden="true"
      />
      <div className="fixed inset-0 bg-black/10 backdrop-blur-sm inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="max-w-xl w-full mt-10 max-w-md transform overflow-hidden rounded-2xl bg-[#0d0e23] p-6 text-left align-middle shadow-xl transition-all">
          <div className="absolute right-4 top-4">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <Dialog.Title
            as="h2"
            className="text-xl text-white font-semibold mb-2"
          >
            Select the asset you want to swap
          </Dialog.Title>
          <p className="text-sm text-gray-500 mb-4">
            Search for a token by name or policy ID.
          </p>
          {/* <input
            type="text"
            placeholder="Search assets..."
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          /> */}
          <div className="max-h-[20rem] overflow-y-auto">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="mb-2 p-4 flex items-center gap-4 rounded-lg bg-[#110b1b] border border-gray-800"
              >
                <div className="h-10 w-10 rounded-full bg-[#202231]"></div>
                <div className="flex-grow">
                  <div className="h-5 w-2/3 rounded-lg bg-[#202231] mb-1"></div>
                  <div className="h-3 w-full rounded-lg bg-[#202231]"></div>
                </div>
                <div className="text-right">
                  <div className="h-3 w-10 rounded-lg bg-[#202231] mb-1"></div>
                  <div className="h-5 w-24 rounded-lg bg-[#202231]"></div>
                </div>
              </div>
            ))}
          </div>
          {/* <button
            onClick={loadMoreAssets}
            className="mt-4 w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Load More
          </button> */}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AssetSwapModal;
