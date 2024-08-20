import { Box, Flex, IconButton, Text, Spinner, VStack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProjects } from "../../api/ProjectService";
import ProjectCard from "../../cards/ProjectCard";

const ProjectManager = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const projectsData = await fetchProjects();
                setProjects(projectsData);
            } catch (err) {
                setError('Failed to fetch projects');
            } finally {
                setLoading(false);
            }
        };

        getProjects();
    }, []);

    const projectsToDisplay = projects.length > 0 ? projects.slice(0, 3) : Array(3).fill(null);

    const handleProjectClick = (projectId) => {
        navigate(`/allProjects?projectId=${projectId}`);
    };

    return (
        <Box p={4}>
            {/* Header and Create Project button */}
            <Flex align="center" justify="space-between" mb={4}>
                <Flex direction="column">

                    <Text color="black" fontSize="xl" fontWeight="bold">
                        My Projects
                    </Text>
                    <Text mb={4} fontSize="small">
                        {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long'})}
                    </Text>
                </Flex>

                <Flex align="center" gap={2}>
                    <IconButton
                        colorScheme='blue'
                        variant="ghost"
                        aria-label='Add to projects'
                        icon={<AddIcon />}
                        onClick={() => navigate("/createProject")}
                    />
                    <Text>Create Project</Text>
                </Flex>
            </Flex>


            {loading ? (
                <Spinner />
            ) : (
                <VStack spacing={4} align="stretch">
                    {projectsToDisplay.map((project, index) => (
                        project ? (
                            <Box
                                key={project.id}
                                p={4}
                                borderWidth="1px"
                                borderRadius="md"
                                boxShadow="md"
                                cursor="pointer"
                                transition="all 0.3s"
                                _hover={{
                                    bg: "blue.50",
                                    boxShadow: "lg",
                                    transform: "scale(1.02)"
                                }}
                                _active={{
                                    bg: "blue.100",
                                    transform: "scale(0.98)"
                                }}
                                onClick={() => handleProjectClick(project.id)}
                            >
                                <ProjectCard project={project} />
                            </Box>
                        ) : (
                            <Box
                                key={index}
                                p={4}
                                borderWidth="1px"
                                borderRadius="md"
                                boxShadow="md"
                                cursor="pointer"
                                transition="all 0.3s"
                                _hover={{
                                    bg: "blue.50",
                                    boxShadow: "lg",
                                    transform: "scale(1.02)"
                                }}
                                onClick={() => navigate("/allProjects")}
                                textAlign="center"
                            >
                                <Text>No Project Found</Text>

                            </Box>
                        )
                    ))}
                </VStack>
            )}
        </Box>
    );
};

export default ProjectManager;
