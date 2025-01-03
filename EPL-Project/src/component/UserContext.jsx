/**
 * @file UserContext.jsx
 * @description This file defines the `UserContext` and `UserProvider` components.
 * The `UserContext` provides a way to manage and share the user's email state globally
 * across the application using React Context API. The `UserProvider` wraps the application
 * components that require access to the user's email or need to update it.
 *
 * Features:
 * - Global state management for user email.
 * - Provides a `setUserEmail` function to update the email.
 *
 * Usage:
 * - Wrap the root component with `UserProvider` to provide access to the context.
 * - Access `userEmail` and `setUserEmail` via `useContext(UserContext)`.
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

    return (
        <UserContext.Provider value={{ userEmail, setUserEmail }}>
            {children}
        </UserContext.Provider>
    );
};
