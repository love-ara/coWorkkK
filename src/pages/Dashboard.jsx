import React from 'react';
import { Box, Flex} from "@chakra-ui/react";
import ProjectManager from "../components/project/ProjectManager";
import PleasuringBoard from "./pleasuringBoard";
import TaskStatus from "../components/taskStatus/TaskStatus";
import TodoList from "../components/todo/TodoList";

const Dashboard = () => {
    return (
        <>
        <Box h="100vh" mb={400} w="100%" p={9} pt={12}>
            {/*<Grid*/}
            {/*    templateRows="1fr 4fr"*/}
            {/*    templateColumns="repeat(2, 1fr)"*/}
            {/*    gap={1}*/}
            {/*    h="100%"*/}
            {/*    w="100%"*/}
            {/*>*/}
            {/*    <GridItem colSpan={2} bg="transparent" p={6} borderRadius={8} style={{ height: '100%' }}>*/}
                    <PleasuringBoard />
                {/*</GridItem>*/}

                {/*<GridItem colSpan={2}>*/}
                    <Box border="2px solid grey" borderRadius={10} p={4} h="100%">
                        {/*<Grid templateColumns="repeat(2, 1fr)" gap={4} h="100%">*/}
                        {/*    <GridItem bg="white" p={6} borderRadius={10} boxShadow="lg" h="100%">*/}
                                <ProjectManager />
                            {/*</GridItem>*/}

                            <Flex direction="column" gap={4} h="100%">
                                {/*<GridItem bg="transparent" p={6} borderRadius={10} boxShadow="lg" h="80%" w="100%">*/}
                                    <TaskStatus />
                                {/*</GridItem>*/}

                                {/*<GridItem bg="transparent" p={6} borderRadius={10} boxShadow="lg" h="50%" w="100%">*/}
                                    <TodoList />
                                {/*</GridItem>*/}
                            </Flex>
                        {/*</Grid>*/}
                    </Box>
                {/*</GridItem>*/}
            {/*</Grid>*/}
        </Box>
        </>
    );
};

export default Dashboard;
