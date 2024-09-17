import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(() => {
        const savedAuthData = localStorage.getItem("authData");
        return savedAuthData ? JSON.parse(savedAuthData) : null;
    });

    const saveToken = (token, user) => {
        try {
            const authData = { token, ...user };

            console.log("user data = ", authData)
            console.log("user data = ", user)
            localStorage.setItem("authData", JSON.stringify(authData));
            setAuthState(authData);
        } catch (error) {
            console.error("Failed to save auth data: ", error);
        }
    };

    const logout = () => {
        localStorage.removeItem("authData");
        setAuthState(null);
    };

    return <AuthContext.Provider value={{ authState, saveToken, logout }}>{children}</AuthContext.Provider>;
};
