import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navBar">
                <div class="nav-logo">
                    <Link to="index.html">
                        <img src="img/epl_logo.png" alt="logo" />
                    </Link>
                </div>
                <ul class="nav-links">
                    <li class="link">
                        <Link to="index.html">Home</Link>
                    </li>
                    <li class="link">
                        <Link to="#">Teams</Link>
                    </li>
                    <li class="link">
                        <Link to="#">Players</Link>
                    </li>
                    <li class="link">
                        <Link to="#">Standings</Link>
                    </li>
                    <li class="link">
                        <Link to="#">Stats</Link>
                    </li>
                </ul>
                <button class="btn">Login</button>
            </div>
    )
}