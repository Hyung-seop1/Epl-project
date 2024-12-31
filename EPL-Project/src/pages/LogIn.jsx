import logos from "../component/getImg";
import { useState } from "react";

export default function logIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
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
                        <label htmlFor="password"> </label>
                        <input
                            type="password"
                            className="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button>Login to your account</button>
                    <div className="linkToSignUp">
                        <p>Don't have an account?</p>
                        <p>Sign Up</p>
                    </div>
                </div>
            </div>
        </>
    );
}
