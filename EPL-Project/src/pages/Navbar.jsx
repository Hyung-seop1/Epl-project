/**
 * @file Navbar.jsx
 * @description This file defines the `Navbar` component, which serves as the navigation menu for the application.
 * It provides a consistent navigation experience across different pages using React Router's `NavLink` component.
 * The component includes links to various sections such as Home, Matches, Standings, Stats, and About Us,
 * along with a button to navigate to the login page.
 *
 * Features:
 * - Navigation links for Home, Matches, Standings, Stats, and About Us.
 * - Active link styling using conditional class application.
 * - Login button for navigating to the login page.
 *
 * Data Handling:
 * - Uses `NavLink` to manage navigation between different routes.
 *
 * @author Hyung-seop Lee
 * @date Jan.2.2025
 *
 */

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
