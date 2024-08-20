import { Box, Button, Flex, IconButton, Input, InputGroup, InputRightElement, Link, Text } from "@chakra-ui/react";
import { BellIcon, CalendarIcon, SearchIcon } from "@chakra-ui/icons";
import ToggleColorMode from "./ToggleColorMode";

const Navbar = () => {
    return (
        <Box
            boxShadow={5}
            p={6}
            pos="fixed"
            top={0}
            width="100%"
            bg="#83b5aa"
            zIndex={1000}
        >
            <Flex direction="row" align="center" justify="space-around">
                <Text color="blue" fontSize="2xl" fontWeight="bold">
                    Co
                    <Text as="span" color="red.300">
                        Wo
                    </Text>
                    <Text as="span" color="blue">rkk</Text>
                </Text>


                <Flex direction="row" gap={3}>
                    <InputGroup width="600px">
                        <InputRightElement pointerEvents="none" color="white">
                            <SearchIcon color="black" />
                        </InputRightElement>
                        <Input
                            placeholder="Search your task here..."
                            size="lg"
                            borderColor="pink.700"
                            bg="white"
                            _placeholder={{color: "white"}}
                            _hover={{ borderColor: "green" }}
                            _focus={{ borderColor: "red", boxShadow: "none" }}
                            height="48px"
                        />
                    </InputGroup>

                    <Button
                        colorScheme="teal"
                        _hover={{ bg: "teal.600" }}
                        _active={{ bg: "teal.700" }}
                        height="48px"
                        px={6}
                    >
                        <Text color="white">Search</Text>
                    </Button>
                </Flex>



                <Flex align="center" gap={2} direction="row">
                    <IconButton
                        aria-label="Notifications"
                        icon={<BellIcon />}
                        size="lg"
                        colorScheme="teal"
                        variant="solid"
                    />
                    <Link to="/calendar">
                        <IconButton
                            aria-label="Calendar"
                            icon={<CalendarIcon />}
                            size="lg"
                            ml={3}
                            colorScheme="teal"
                            variant="solid"
                        />
                    </Link>
                    <ToggleColorMode />

                    <Text fontSize="lg" color="black.700">
                        {new Date().toLocaleDateString('en-US', {
                            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                        })}
                    </Text>
                </Flex>

            </Flex>
        </Box>
    );
};

export default Navbar;
