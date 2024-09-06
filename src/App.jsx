import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Fi from "./Pages/Fi";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fi" element={<Fi />} />
      </Routes>
    </div>
  );
}

export default App;
