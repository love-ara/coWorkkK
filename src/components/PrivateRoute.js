import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
return(
    <>
    <Navigate to="/"></Navigate></>
)
};

export default PrivateRoute;
