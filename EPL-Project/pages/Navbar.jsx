import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navBar">
                <div className="nav-logo">
                    <Link to="/">
                        <img src="img/epl_logo.png" alt="logo" />
                    </Link>
                </div>
                <ul className="nav-links">
                    <li className="link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="link">
                        <Link to="#">Teams</Link>
                    </li>
                    <li className="link">
                        <Link to="#">Players</Link>
                    </li>
                    <li className="link">
                        <Link to="/standings">Standings</Link>
                    </li>
                    <li className="link">
                        <Link to="/stats">Stats</Link>
                    </li>
                </ul>
                <button className="btn">Login</button>
            </nav>
    )
}