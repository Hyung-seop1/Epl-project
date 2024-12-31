import { NavLink } from "react-router-dom";
import logo from "/src/img/epl_logo.png";

export default function Navbar() {
    return (
        <nav className="navBar">
            <div className="nav-logo">
                <NavLink to="/">
                    <img src={logo} alt="logo" />
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
                        to="/matches"
                        className={({ isActive }) =>
                            isActive ? "current" : ""
                        }
                    >
                        Matches
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
                <li className="link">
                    <NavLink
                        to="/aboutUs"
                        className={({ isActive }) =>
                            isActive ? "current" : ""
                        }
                    >
                        About Us
                    </NavLink>
                </li>
            </ul>
            <button className="btn">
                <NavLink to="/login">Login</NavLink>
            </button>
        </nav>
    );
}
