
import React from 'react';
import { Box, Button, Center, Flex, Stack, Text, Image } from "@chakra-ui/react";

const token = localStorage.getItem('googleToken');


const SharedAuthLayout = ({
                              isSignup,
                              formComponent,
                              onToggle,
                              loading,
                              title,
                              toggleText,
                              imageSrc,
                              onGoogleSuccess,
                              onGoogleError
                          }) => {
    return (
        <Flex
            bg="white"
            borderRadius="md"
            boxShadow="xl"
            width={{ base: "90%", md: "800px" }}
            maxW="95%"
            zIndex={3}
            position="relative"
            p={6}
            justifyContent="space-between"
        >
            {isSignup && (
                <Box
                    width="50%"
                    display={{ base: "none", md: "block" }}
                    textAlign="center"
                >
                    <Image src={imageSrc} alt={title} boxSize="500px" objectFit="cover" />
                </Box>
            )}
            <Center
                width={isSignup ? "50%" : "100%"}
                bg="white"
                borderRadius="md"
                justifyContent="center"
            >
                <Stack align="center" justify="center" direction="column" gap={3}>
                    <Text color="black" fontSize="3xl" fontWeight="bold">
                        {title}
                    </Text>
                    {formComponent}
                    <Button
                        color="blackAlpha.700"
                        fontSize={13}
                        textTransform="uppercase"
                        _hover={{ color: "blue.400" }}
                        onClick={onToggle}
                        isLoading={loading}
                        variant="ghost"
                    >
                        {toggleText}
                    </Button>
                </Stack>
            </Center>
            {!isSignup && (
                <Box
                    width="50%"
                    display={{ base: "none", md: "block" }}
                    textAlign="center"
                >
                    <Image src={imageSrc} alt={title} boxSize="500px" objectFit="cover" />
                </Box>
            )}
        </Flex>
    );
};

export default SharedAuthLayout;
