import "./App.css";
import Today from "../component/Today";
import Standing from "../pages/Standing";
import Stats from "../pages/Stats";

function App() {
    return (
        <>
            <nav>
                <div class="nav-logo">
                    <a href="index.html">
                        <img src="img/epl_logo.png" alt="logo" />
                    </a>
                </div>
                <ul class="nav-links">
                    <li class="link">
                        <a href="index.html">Home</a>
                    </li>
                    <li class="link">
                        <a href="#">Teams</a>
                    </li>
                    <li class="link">
                        <a href="#">Players</a>
                    </li>
                    <li class="link">
                        <a href="#">Standings</a>
                    </li>
                    <li class="link">
                        <a href="#">Stats</a>
                    </li>
                </ul>
                <button class="btn">Login</button>
            </nav>

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
