"use client";

import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [displayBalance, setDisplayBalance] = useState(null);
  const [fromAssets, setFromAssets] = useState({
    image: "https://app.sundae.fi/images/cardano.png",
    symbol: "ADA",
    amount: null,
    name: "Cardano",
  });

  const [toAssets, setToAssets] = useState({
    image: "",
    symbol: "",
    amount: null,
    name: "",
  });

  const values = {
    toAssets,
    setToAssets,
    fromAssets,
    setFromAssets,
    displayBalance,
    setDisplayBalance,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
