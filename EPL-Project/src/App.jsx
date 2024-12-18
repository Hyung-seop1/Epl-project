import Standing from "../pages/Standing";
import Stats from "../pages/Stats";
import { Route, Routes } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Home from "../pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/standings" element={<Standing />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
