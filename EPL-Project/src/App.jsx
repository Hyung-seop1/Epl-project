import "./App.css";
import Today from "../component/Today";
import Standing from "../pages/Standing";
import Stats from "../pages/Stats";
import {Route, Routes} from "react-router-dom"
import Navbar from "../pages/Navbar";

function App() {
    return (
        <>
            
            <Navbar/>
            <header className="container">
                <div className="content">
                    <span className="blur"></span>
                    <span className="blur"></span>
                    <h4>" WHERE PASSION MEETS THE PREMIER LEAGUE "</h4>
                    <h1>
                        Welcome to My <span className="fill">EPL</span>{" "}
                        Information Website
                    </h1>
                    <p>
                        CREATED BY : <span>HYUNG SEOP LEE</span>
                    </p>
                    <Today />
                    <button className="btn">My Profile</button>
                </div>
                <div className="image">
                    <img src="img/first.webp" alt="epl" />
                </div>
            </header>
            <section className="container">
                <Standing />
                <Stats />
            </section>
        </>
    );
}

export default App;
