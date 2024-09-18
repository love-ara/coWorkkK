import { useState, useEffect } from "react";
import SideBar from "../../components/sidebar";
import style from "./index.module.css";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    return (
        <>
            <div className={style.mainContainer}>
                <SideBar />
                <div className={style.projects}>
                    <p className={style.projectsHeader}>Projects</p>
                    <p className={style.allYourProjects}>All your projects</p>


                    <div className={style.projectsGrid}>
                        {!loading && !error && projects.length > 0 ? (
                            projects.map((project) => (
                                <div key={project.id} className={style.projectCard}>
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                </div>
                            ))
                        ) : (
                            !loading && <p>No projects found</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
