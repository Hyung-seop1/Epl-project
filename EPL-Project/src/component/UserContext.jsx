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
