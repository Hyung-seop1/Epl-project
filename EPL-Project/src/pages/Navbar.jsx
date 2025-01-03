/**
 * @file Navbar.jsx
 * @description This file defines the `Navbar` component, which serves as the navigation menu for the application.
 * It provides a consistent navigation experience across different pages using React Router's `NavLink` component.
 * The component includes links to various sections such as Home, Matches, Standings, Stats, and About Us.
 * Additionally, it displays the user's email when logged in and provides a dropdown menu for logging out.
 *
 * Features:
 * - Navigation links for Home, Matches, Standings, Stats, and About Us.
 * - Active link styling using conditional class application.
 * - Login button for navigating to the login page when the user is not logged in.
 * - Displays the logged-in user's email and a "Log Out" option in a dropdown menu on hover.
 * - User state management using React Context API.
 *
 * Data Handling:
 * - Uses `NavLink` to manage navigation between different routes.
 * - Accesses `userEmail` and `setUserEmail` from `UserContext` for managing user login state.
 * - Toggles dropdown visibility using component state.
 *
 * @author Hyung-seop Lee
 * @date Jan.3.2025
 */

import { NavLink } from "react-router-dom";
import logo from "/src/img/epl_logo.png";
import { useContext, useState } from "react";
import { UserContext } from "../component/UserContext";

export default function Navbar() {
    const { userEmail, setUserEmail } = useContext(UserContext); // Access user email
    const [showDropdown, setShowDropdown] = useState(false); // State to toggle dropdown

    const handleMouseEnter = () => setShowDropdown(true);
    const handleMouseLeave = () => setShowDropdown(false);
    const handleLogout = () => setUserEmail(null); // Clear email on logout

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
            <div
                className="user-info"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {userEmail ? (
                    <div>
                        <span className="displayEmail">{userEmail}</span>
                        {showDropdown && (
                            <div className="logOut">
                                <button onClick={handleLogout}>Log Out</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <button className="btn">
                        <NavLink to="/login">Login</NavLink>
                    </button>
                )}
            </div>
        </nav>
    );
}
