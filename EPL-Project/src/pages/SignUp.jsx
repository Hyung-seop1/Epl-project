import logos from "../component/getImg";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../component/UserContext";

export default function signIn() {
    const { setUserEmail } = useContext(UserContext); // Access context
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
        }

        // Verification for password
        if (!password) {
            setPasswordError("Password is required.");
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long.");
            isValid = false;
        }

        if (isValid) {
            setUserEmail(email);
            navigate("/login");
        }
    };

    const navToSignUp = (e) => {
        // Navigate to Sign Up page
        navigate("/login");
    };

    return (
        <>
            <div className="loginPage">
                <div className="login-logo">
                    <img src={logos.TOT}></img>
                </div>
                <div className="login">
                    <h1>Sign Up</h1>
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
                    <button onClick={handleLogin}>Create an account</button>
                    <div className="linkTo">
                        <p>Already have an account?</p>
                        <button className="signup" onClick={navToSignUp}>
                            LogIn
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
