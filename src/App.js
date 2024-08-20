import React from 'react';
import './App.css';
import {ReactKeycloakProvider} from "@react-keycloak/web";
import keycloak from "./keycloak";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from "./pages/HomePage";
import Auth from "./pages/auth/Auth";
import CreateProject from "./pages/createProject/CreateProject";
import CreateTask from "./pages/createTask/CreateTask";
import UpdateTask from "./pages/editTask/EditTask";
import PrivateRoute from "./components/PrivateRoute";


function App() {
    const initOptions = { pkceMethod: 'S256' };

    return (
        <ReactKeycloakProvider authClient={keycloak} initOptions={initOptions}>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<LandingPage />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <HomePage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/createproject"
                        element={
                            <PrivateRoute>
                                <CreateProject />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/createtask"
                        element={
                            <PrivateRoute>
                                <CreateTask />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/edittask"
                        element={
                            <PrivateRoute>
                                <UpdateTask />
                            </PrivateRoute>
                        }
                    />

                </Routes>
            </Router>
        </ReactKeycloakProvider>
    );
}

export default App;