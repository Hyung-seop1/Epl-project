import "./App.css";
import Today from "../component/Today";
import Standing from "../pages/Standing";
import Stats from "../pages/Stats";
import {Route, Routes} from "react-router-dom"
import Navbar from "../pages/Navbar";
import Home from "../pages/Home";

function App() {
    return (
        <>
            
            <Navbar/>
            <Home/>
            <section className="container">
                <Standing />
                <Stats />
            </section>
        </>
    );
}

export default App;
