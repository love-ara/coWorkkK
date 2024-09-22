import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateProject from "./pages/createProject/CreateProject";
import CreateTask from "./pages/createTask/CreateTask";
import UpdateTask from "./pages/editTask/EditTask";
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./pages/landingPage/LandingPage"
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/homepage";
import Calendar from "./components/calendar";
import Projects from "./pages/Projects/Projects";

import ProjectCard from "./components/projectCard";
import CreateNew from "./components/createNew";



function App() {

    return (
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<LandingPage />} />
                    <Route path="/signup" element={<Signup />}/>
                    <Route path="/login" element={<Login />}/>

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
                    <Route path="/create"
                           element={
                               <PrivateRoute>

                               <CreateNew />
                                   </PrivateRoute>
                           }
                               />


                    <Route
                        path="/create_project"
                        element={
                            <PrivateRoute>
                                <CreateProject />
                            </PrivateRoute>
                        }
                    />

                    <Route path="/projects"
                           element={
                            <PrivateRoute>
                                <Projects />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/create_task"
                        element={
                            <PrivateRoute>
                                <CreateTask />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/edit_task"
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