import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Fi from "./Pages/Fi";
import Exchange from "./Pages/Exchange";
import Fi_liquidify from "./Pages/Fi_liquidify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fi" element={<Fi />} />
        <Route path="/fi/exchange" element={<Exchange />} />
        <Route path="fi/liquidify" element={<Fi_liquidify />} />
      </Routes>
    </div>
  );
}

export default App;
