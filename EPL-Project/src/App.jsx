import Standing from "../src/pages/Standing";
import Stats from "../src/pages/Stats";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/pages/Navbar";
import Home from "../src/pages/Home";
import Aboutus from "../src/pages/Aboutus";
import Matches from "../src/pages/Matches";
import LogIn from "../src/pages/LogIn";
import SignUp from "../src/pages/SignUp";

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
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
