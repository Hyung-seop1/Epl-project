import logos from "../component/getImg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function logIn() {
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
            navigate("/");
        }
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
                    <div className="linkToSignUp">
                        <p>Don't have an account?</p>
                        <p className="signup">Sign Up</p>
                    </div>
                </div>
            </div>
        </>
    );
}
