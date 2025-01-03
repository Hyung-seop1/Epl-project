/**
 * @file UserContext.jsx
 * @description This file defines the `UserContext` and `UserProvider` components.
 * The `UserContext` provides a way to manage and share the user's email and password states globally
 * across the application using React Context API. The `UserProvider` wraps the application
 * components that require access to the user's email or password, or need to update them.
 *
 * Features:
 * - Global state management for user email and password.
 * - Provides `setUserEmail` and `setSignUpPassword` functions to update the email and password respectively.
 *
 * Usage:
 * - Wrap the root component with `UserProvider` to provide access to the context.
 * - Access `userEmail`, `setUserEmail`, `signUpEmail`, `setSignUpEmail`, `signUpPassword`, and `setSignUpPassword` via `useContext(UserContext)`.
 *
 * @author Hyung-seop Lee
 * @date Jan.3.2025
 *
 */

import React, { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

// Provide the context
export const UserProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState(null); // Store the user's email
    const [signUpEmail, setSignUpEmail] = useState(null); // Store signed up email
    const [signUpPassword, setSignUpPassword] = useState(null); // Store signed up password

    return (
        <UserContext.Provider
            value={{
                userEmail,
                setUserEmail,
                signUpEmail,
                setSignUpEmail,
                signUpPassword,
                setSignUpPassword,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
