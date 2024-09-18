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
import Calendar from "./components/calendar";
import NewProject from "./pages/newproject/NewProject";
import Projects from "./pages/Projects/Projects";

import ProjectCard from "./components/projectCard";



function App() {

    return (
            <Router>
                <Routes>
                    <Route path="/" element={<NewLandingPage />} />
                    <Route path="/home" element={<NewLandingPage />} />
                    <Route path="/signup" element={<Signup />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/newproject" element={<NewProject />}/>
                    <Route path="/projects" element={<Projects />} />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/projects"
                        element={
                            <PrivateRoute>
                                <ProjectCard />
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
                    <Route
                        path="/calendar"
                        name="Calendar"
                        element={
                            <PrivateRoute>
                                <Calendar />
                            </PrivateRoute>
                        }
                    />

                </Routes>
            </Router>
    );
}

export default App;