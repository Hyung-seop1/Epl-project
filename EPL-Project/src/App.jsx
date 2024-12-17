import "./App.css";
import Standing from "../pages/Standing";
import Stats from "../pages/Stats";
import {Route, Routes} from "react-router-dom"
import Navbar from "../pages/Navbar";
import Home from "../pages/Home";

function App() {
    return (
        <>
            <Navbar/>
            <div className="container">
            <span className="blur"></span>
            <span className="blur"></span>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Standing" element={<Standing/>}/>
                    <Route path="/Stats" element={<Stats/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
