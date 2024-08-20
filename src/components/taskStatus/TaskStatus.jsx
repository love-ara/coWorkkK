import React from 'react';
import {
    Box,
    Text,
    CircularProgress,
    CircularProgressLabel, HStack,
} from '@chakra-ui/react';

const TaskStatus = ({ completed = 0, inProgress = 0, notStarted = 0 }) => {
    const showPlaceholder = completed === 0 && inProgress === 0 && notStarted === 0;

    return (
        <Box
            borderWidth={1}
            borderRadius="lg"
            p={5}
            bg="white"
            maxW="400px"
            mx="auto"
        >
            <Text fontSize="xl" fontWeight="bold" mb={4} color="black">
                Task Status
            </Text>
            <HStack spacing={8}>
                <Box textAlign="center">
                    <CircularProgress value={completed} color="green.400" size="100px">
                        <CircularProgressLabel fontSize="2xl" color="black">
                            {showPlaceholder ? '-' : `${completed}%`}
                        </CircularProgressLabel>
                    </CircularProgress>
                    <Text fontSize="1xl" color="black">Completed</Text>
                </Box>
                <Box textAlign="center">
                    <CircularProgress value={inProgress} color="blue.400" size="100px">
                        <CircularProgressLabel fontSize="2xl" color="black">
                            {showPlaceholder ? '-' : `${inProgress}%`}
                        </CircularProgressLabel>
                    </CircularProgress>
                    <Text fontSize="1xl" color="black">In Progress</Text>
                </Box>
                <Box textAlign="center">
                    <CircularProgress value={notStarted} color="pink" size="100px">
                        <CircularProgressLabel fontSize="2xl" color="black">
                            {showPlaceholder ? '-' : `${notStarted}%`}
                        </CircularProgressLabel>
                    </CircularProgress>
                    <Text fontSize="1xl" color="black">Not Started</Text>
                </Box>
            </HStack>
        </Box>
    );
};

export default TaskStatus;
