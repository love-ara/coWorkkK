import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProjects = (token) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/projects', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    cancelToken: source.token,
                });
                setProjects(response.data);
                setLoading(false);
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled:', error.message);
                } else {
                    setError('No projects available.');
                    setLoading(false);
                }
            }
        };

        fetchProjects().then(() => {
            console.log('Projects successfully fetched');
        });

        return () => {
            source.cancel();
        };
    }, [token]);

    return { projects, loading, error };
};

export default useFetchProjects;
