import { useState, useContext } from "react";
import { Box, IconButton, Text, VStack, Avatar, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { MdMenu, MdLogout } from "react-icons/md";
import { UserContext } from "../../context/UserContext";
import sidebarItems from "./data";

const SidebarItem = ({ title, to, icon, selected, setSelected }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        setSelected(title);
        navigate(to);
    };

    return (
        <MenuItem
            active={selected === title}
            style={{
                color: selected === title ? "#6870fa" : "#636de4",
                transition: "background-color 0.3s ease, border-radius 0.3s ease",
                borderRadius: "12px",

            }}
            onClick={handleClick}
            icon={icon}
            sx={{
                "&:hover": {
                    backgroundColor: "#6870fa",
                }
            }}

        >

                <Text>{title}</Text>
        </MenuItem>
    );
};

const SideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    return (
        <Box
            height="95vh"
            width={isCollapsed ? "10px" : "250px"}
            // bg="#83b5aa"
            // boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            // borderRadius={isCollapsed ? "10px" : "30px"}
            transition="width 0.3s ease-in-out"
            display="flex"
            flexDirection="column"
        >
            <Sidebar collapsed={isCollapsed}
                     style={{
                         height: "100%",
                         width: "100%",
                         borderRadius: isCollapsed ? "10px" : "50px",

                     }}>
                <Menu iconShape="square"  style={{ flexGrow: 1, padding: "0" }}>
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MdMenu /> : undefined}
                        style={{ margin: "10px 0 20px 0", color: "brown" }}

                    >
                        {!isCollapsed && (
                            <Flex justify="space-between" align="center" ml="15px">
                                <Text variant="h1" color="black">Dashboard</Text>
                                <IconButton
                                    aria-label="Toggle menu"
                                    icon={<MdMenu />}
                                    variant="ghost"
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                />
                            </Flex>
                        )}
                    </MenuItem>

                    {!isCollapsed && user && (
                        <Box mb="25px">
                            <Flex direction="column" align="center">
                                <Avatar src={user.avatar || ""} alt="Profile" size="xl" mb={4} />
                                <Text fontSize="xl" fontWeight="bold">{user.name}</Text>
                                <Text fontSize="sm">{user.email}</Text>
                            </Flex>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"} flexGrow={1}>
                        <VStack spacing={4} align="stretch">
                            {sidebarItems.map(item => (
                                <SidebarItem
                                    key={item.title}
                                    title={item.title}
                                    to={item.to}
                                    icon={item.icon}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            ))}
                        </VStack>
                    </Box>

                    <Box mt="auto" mb="9px">
                        <MenuItem
                            icon={<MdLogout />}
                            style={{ color: "red" }}
                            onClick={() => navigate("/home")}
                        >
                            {!isCollapsed && <Text>Logout</Text>}
                        </MenuItem>
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    );
};

export default SideBar;
