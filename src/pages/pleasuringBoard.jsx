import React, { useEffect, useState } from 'react';
import { Text } from "@chakra-ui/react";
import axios from 'axios';

const PleasuringBoard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/api/users');
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUser();
    }, []);

    if (!user) return <Text>Loading...</Text>;

    return (
        <>
            <Text>
                Welcome {user.firstName}
            </Text>
        </>
    );
};

export default PleasuringBoard;
