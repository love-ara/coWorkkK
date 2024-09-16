// import React, { createContext, useContext, useState, useEffect } from 'react';
//
// const AuthContext = createContext();
//
// export const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useState({
//         token: null,
//         user: null
//     });
//
//     // Load auth from localStorage on initialization
//     useEffect(() => {
//         const storedToken = localStorage.getItem('authToken');
//         const storedUser = localStorage.getItem('authUser');
//
//         try {
//             if (storedToken && storedUser) {
//                 setAuth({
//                     token: storedToken,
//                     user: JSON.parse(storedUser),  // Ensure it's valid JSON
//                 });
//             }
//         } catch (error) {
//             console.error("Failed to parse stored user data:", error);
//             localStorage.removeItem('authUser');  // Clean up if JSON is invalid
//         }
//     }, []);
//
//     const saveToken = (token, user) => {
//         localStorage.setItem('authToken', token);
//         localStorage.setItem('authUser', JSON.stringify(user)); // Ensure correct JSON format
//         setAuth({ token, user });
//     };
//
//     const logout = () => {
//         localStorage.removeItem('authToken');
//         localStorage.removeItem('authUser');
//         setAuth({ token: null, user: null });
//     };
//
//     return (
//         <AuthContext.Provider value={{ auth, saveToken, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
//
// export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(() => {
        const savedAuthData = localStorage.getItem("authData");
        return savedAuthData ? JSON.parse(savedAuthData) : null;
    });

    const saveToken = (token, ...user) => {
        try {
            const authData = { token, ...user };
            localStorage.setItem("authData", JSON.stringify(authData));
            setAuthState(authData);
        } catch (error) {
            console.error("Failed to save auth data:", error);
        }
    };

    const logout = () => {
        localStorage.removeItem("authData");
        setAuthState(null);
    };

    return <AuthContext.Provider value={{ authState, saveToken, logout }}>{children}</AuthContext.Provider>;
};
