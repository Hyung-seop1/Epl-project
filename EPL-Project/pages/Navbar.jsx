import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navBar">
            <div className="nav-logo">
                <NavLink to="/">
                    <img src="img/epl_logo.png" alt="logo" />
                </NavLink>
            </div>
            <ul className="nav-links">
                <li className="link">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "current" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li className="link">
                    <NavLink
                        to="/teams"
                        className={({ isActive }) =>
                            isActive ? "current" : ""
                        }
                    >
                        Teams
                    </NavLink>
                </li>
                <li className="link">
                    <NavLink
                        to="/players"
                        className={({ isActive }) =>
                            isActive ? "current" : ""
                        }
                    >
                        Players
                    </NavLink>
                </li>
                <li className="link">
                    <NavLink
                        to="/standings"
                        className={({ isActive }) =>
                            isActive ? "current" : ""
                        }
                    >
                        Standings
                    </NavLink>
                </li>
                <li className="link">
                    <NavLink
                        to="/stats"
                        className={({ isActive }) =>
                            isActive ? "current" : ""
                        }
                    >
                        Stats
                    </NavLink>
                </li>
            </ul>
            <button className="btn">Login</button>
        </nav>
    );
}
