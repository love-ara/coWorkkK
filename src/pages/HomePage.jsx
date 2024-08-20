import React from 'react';
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Nav";
import SideBar from "../components/sidebar/SideBar";
import Dashboard from "./Dashboard";

const HomePage = () => {
    return (
        <Flex direction="column" h="100vh">
            <Box>
                <Navbar />
            </Box>

            <Flex flex="1" overflow="auto" >
                <Box
                    as="aside"
                    width={{ base: "100px", md: "250px" }}
                    p={2}

                    // overflowY="auto"
                    display="flex"
                    flexDirection="column"
                    mt={20}
                    mb={2}
                    mr={2}
                >
                    <SideBar />
                </Box>

                <Box
                    as="main"
                    flex="1"
                    // overflow="auto"
                    mt={20}
                    p={4}
                >
                    <Dashboard />
                </Box>
            </Flex>
        </Flex>
    );
};

export default HomePage;
