import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navBar">
                <div class="nav-logo">
                    <Link to="/">
                        <img src="img/epl_logo.png" alt="logo" />
                    </Link>
                </div>
                <ul class="nav-links">
                    <li class="link">
                        <Link to="/">Home</Link>
                    </li>
                    <li class="link">
                        <Link to="#">Teams</Link>
                    </li>
                    <li class="link">
                        <Link to="#">Players</Link>
                    </li>
                    <li class="link">
                        <Link to="/standings">Standings</Link>
                    </li>
                    <li class="link">
                        <Link to="/stats">Stats</Link>
                    </li>
                </ul>
                <button class="btn">Login</button>
            </nav>
    )
}