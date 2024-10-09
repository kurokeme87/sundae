import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import WagmiRainbowKitProvider from "./Components/Providers/WagmiRainbowKitProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <WagmiRainbowKitProvider>
        <App />
      </WagmiRainbowKitProvider>
    </BrowserRouter>
  </StrictMode>
);
