// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
//
// const PrivateRoute = ({ children }) => {
//     const { auth } = useAuth();
//
//     if (!auth.user) {
//         return <Navigate to="/login" />;
//     }
//
//     return children;
// };
//
// export default PrivateRoute;
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { authState } = useAuth();
    const location = useLocation();

    // Debugging line to inspect the authentication state
    console.log("Auth State:", authState);


    if (!authState || !authState.token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
