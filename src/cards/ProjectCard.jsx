import { Box, Text } from "@chakra-ui/react";

const ProjectCard = ({ project }) => {
    return (
        <Box
            p={4}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            width="100%"
        >
            <Text fontSize="lg" fontWeight="bold">
                {project.title}
            </Text>
            <Text mt={2}>{project.description}</Text>
            <Text mt={2} color="gray.500">
                Start Date: {new Date(project.startDate).toLocaleDateString()}
            </Text>
            <Text mt={2} color="gray.500">
                Due Date: {new Date(project.dueDate).toLocaleDateString()}
            </Text>
        </Box>
    );
};

export default ProjectCard;
