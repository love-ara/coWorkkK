
import { useLocation } from "react-router-dom";
import { Box, Text, VStack, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchProjectById } from "../api/ProjectService";

const AllProjects = () => {
    const location = useLocation();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const query = new URLSearchParams(location.search);
    const projectId = query.get("projectId");

    useEffect(() => {
        const getProject = async () => {
            try {
                if (projectId) {
                    const projectData = await fetchProjectById(projectId);
                    setProject(projectData);
                }
            } catch (err) {
                setError('Failed to fetch project');
            } finally {
                setLoading(false);
            }
        };

        getProject();
    }, [projectId]);

    return (
        <Box p={4}>
            {loading ? (
                <Spinner />
            ) : error ? (
                <Text color="red.500">{error}</Text>
            ) : project ? (
                <VStack spacing={4} align="stretch">
                    <Text fontSize="2xl" fontWeight="bold">{project.title}</Text>
                    <Text>{project.description}</Text>
                    {/* Add other project details here */}
                </VStack>
            ) : (
                <Text>No project details available.</Text>
            )}
        </Box>
    );
};

export default AllProjects;
