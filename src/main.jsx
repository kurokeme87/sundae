import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import WagmiRainbowKitProvider from "./Components/Providers/WagmiRainbowKitProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { AppProvider } from "./Components/Providers/AppProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <WagmiRainbowKitProvider>
        <ToastContainer autoClose={2000} hideProgressBar={true} />
        <AppProvider>
          <App />
        </AppProvider>
      </WagmiRainbowKitProvider>
    </BrowserRouter>
  </StrictMode>
);
