import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { authState } = useAuth();
    const location = useLocation();

    console.log("Auth State:", authState);


    if (!authState || !authState.token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
