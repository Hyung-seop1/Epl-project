import Standing from "../pages/Standing";
import Stats from "../pages/Stats";
import { Route, Routes } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Home from "../pages/Home";
import Aboutus from "../pages/Aboutus";
import Matches from "../pages/Matches";

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/matches" element={<Matches />} />
                    <Route path="/standings" element={<Standing />} />
                    <Route path="/stats" element={<Stats />} />
                    <Route path="/aboutus" element={<Aboutus />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
