import { Route, Routes } from "react-router-dom";
import Navbar from "../pages/Navbar";
import { lazy, suspense } from "react";

const Home = lazy(() => import("../pages/Home"));
const Matches = lazy(() => import("../pages/Matches"));
const Standing = lazy(() => import("../pages/Standing"));
const Stats = lazy(() => import("../pages/Stats"));
const Aboutus = lazy(() => import("../pages/Aboutus"));

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <suspense>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/matches" element={<Matches />} />
                        <Route path="/standings" element={<Standing />} />
                        <Route path="/stats" element={<Stats />} />
                        <Route path="/aboutus" element={<Aboutus />} />
                    </Routes>
                </suspense>
            </div>
        </>
    );
}

export default App;
