import React from 'react';
import { useAuth } from '../context/AuthContext';
import useFetchProjects from '../hooks/useFetchProjects';

const ProjectCard = () => {
    const { authState } = useAuth();
    const { projects, loading, error } = useFetchProjects(authState.token);

    const style = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            padding: '30px',
            position: 'relative',
            height: '260px',
            width: '241px',
            borderRadius: '10px',
            overflow: 'hidden',
            background: '#ffffff',
        },
        projectCard: {
            marginBottom: '10px',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '10px',
        }
    };

    return (
        <div style={style.container}>
            {loading ? (
                <p>Loading projects...</p>
            ) : error ? (
                <p>{error}</p>
            ) : projects.length === 0 ? (
                <p>No projects found.</p>
            ) : (
                projects.map((project) => (
                    <div key={project.id} style={style.projectCard}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProjectCard;
