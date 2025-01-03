/**
 * @file LogIn.jsx
 * @description This file defines the `LogIn` component, which prompts the user to enter their email
 * and password. The component uses React's `useState` to manage form input values and validation errors.
 * It verifies the validity of the input fields (email format and password length). If the input is invalid,
 * the user is prevented from navigating to the main page ("/"). Upon successful validation, the user is
 * redirected to the main page using React Router's `useNavigate`.
 *
 * Features:
 * - Email validation (required and proper format)
 * - Password validation (required and minimum length of 6 characters)
 * - Error messages for invalid input
 * - Authentication using context to check and validate user credentials
 * - Redirection to the main page on successful login
 *
 * @author Hyung-seop Lee
 * @date Jan.3.2025
 *
 */

import logos from "../component/getImg";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../component/UserContext";

export default function logIn() {
    const { setUserEmail } = useContext(UserContext); // Access context
    const { signUpEmail } = useContext(UserContext);
    const { signUpPassword } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        let isValid = true;

        // Verification for email
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError("Email is required.");
            isValid = false;
        } else if (!emailFormat.test(email)) {
            setEmailError("Please enter a valid email address.");
            isValid = false;
        } else if (email != signUpEmail) {
            setEmailError(
                "Email not found. Please sign up or check your email address"
            );
            isValid = false;
        }

        // Verification for password
        if (!password) {
            setPasswordError("Password is required.");
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long.");
            isValid = false;
        } else if (password != signUpPassword) {
            setPasswordError("Incorrect password. Please try again.");
            isValid = false;
        }

        console.log(signUpPassword);

        if (isValid) {
            setUserEmail(email);
            navigate("/");
        }
    };

    const navToSignUp = (e) => {
        // Navigate to Sign Up page
        navigate("/signup");
    };

    return (
        <>
            <div className="loginPage">
                <div className="login-logo">
                    <img src={logos.TOT}></img>
                </div>
                <div className="login">
                    <h1>Login</h1>
                    <div className="text">
                        <label htmlFor="email"> </label>
                        <input
                            type="email"
                            className="email"
                            name="email"
                            placeholder="Email address"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {emailError && <p className="error">{emailError}</p>}
                        <label htmlFor="password"> </label>
                        <input
                            type="password"
                            className="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {passwordError && (
                            <p className="error">{passwordError}</p>
                        )}
                    </div>
                    <button onClick={handleLogin}>Login to your account</button>
                    <div className="linkTo">
                        <p>Don't have an account?</p>
                        <button className="signup" onClick={navToSignUp}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
