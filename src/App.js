import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CreateProject from "./pages/createProject/CreateProject";
import CreateTask from "./pages/createTask/CreateTask";
import UpdateTask from "./pages/editTask/EditTask";
import PrivateRoute from "./components/PrivateRoute";
import NewLandingPage from "./pages/landingPage/LandingPage"
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/homepage";



function App() {

    return (
            <Router>
                <Routes>
                    <Route path="/" element={<NewLandingPage />} />
                    <Route path="/home" element={<NewLandingPage />} />
                    {/*<Route path="/newpage" element={<NewLandingPage />}/>*/}
                    <Route path="/signup" element={<Signup />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route
                        path="/dashboard"
                        element={
                            // <PrivateRoute>
                                <Home />
                            // </PrivateRoute>
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
        // </ReactKeycloakProvider>
    );
}

export default App;