import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { MdHome, MdFolder, MdCheckCircle, MdCalendarToday, MdPerson, MdAdd, MdChat } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import userImage from '../assets/defaultAvatar.png';
import { useAuth } from "../context/AuthContext";
import useFetchProjects from '../hooks/useFetchProjects';

const SideBar = () => {
    const { authState } = useAuth();
    const { projects } = useFetchProjects(authState.token);

    const [isOpen, setIsOpen] = useState(true);
    const isMobile = window.innerWidth <= 768;
    const navigate = useNavigate();

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const viewProject = () => {
        if (projects && projects.length > 0) {
            navigate("/projects");
        } else {
            console.log("No projects available");
        }
    };

    const viewCalendar = () => {
        navigate("/calendar");
    };

    const handleAI = () => {
        window.location.href = "https://cowork-ai-repo.onrender.com";
    };

    const toggleSidebar = () => setIsOpen(!isOpen);

    const userName = localStorage.getItem('fullName');

    const handleClick = ()=>{
        navigate("/create");
    }

    const styles = {
        sider: {
            borderRadius: '25px',
            width: isOpen || !isMobile ? '250px' : '0',
            height: '170vh',
            // background: '#ffffff',
            // overflow: 'hidden',
            transition: 'width 0.3s ease',
            // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

            marginTop: isMobile ? '16px' : '24px',
            marginLeft: isMobile ? '10px' : '20px',
            // borderRadius: '25px',
            // width: isMobile ? '42%' : '250px',
            backgroundColor: '#ffffff',
        },
        toggleButton: {
            position: 'fixed',
            top: '1px',
            left: '10px',
            // zIndex: '1000',
            border: "none"
        },
        menuItemWithSquare: {
            position: 'relative',
            paddingLeft: '30px',
            marginLeft: "20px"
        },
        square: (color) => ({
            content: '""',
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-45%)',
            width: '12px',
            height: '12px',
            borderRadius: '5px',
            backgroundColor: color,
        }),
        footer: {
            paddingTop: "10px",
            paddingBottom: "20px",
            textAlign: "center",
            color: "#b19cd9",
            position: 'sticky',
        },
        createIcon: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            border: "1px dashed #ccc",
            borderRadius: "10px",
            marginBottom: "10px",
        },
        heading: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: '20px'
        },
        image: {
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            objectFit: "cover",
            zIndex: 2,
            position: 'absolute',
            marginLeft: "80px",
            marginTop: "8px"
        },
        imageContainer: {
            position: 'relative',
            height: '200px',
            width: '100%',
            borderRadius: "30px",
            overflow: 'hidden',
        },
        topColor: {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '20%',
            backgroundColor: '#faf5cb',
            zIndex: 1,
        },
        bottomColor: {
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            height: '80%',
            backgroundColor: '#3b3946',
            zIndex: 0,
        },


    };

    const squareColors = ['#f4cd80', '#f48080', '#80d9f4', '#c180f4', '#80d2f4'];


    return (
        <>
            {isMobile && (
                <button onClick={toggleSidebar} style={styles.toggleButton}>
                    {isOpen ? 'Close' : 'Open'} Sidebar
                </button>
            )}
            <div style={styles.sider}>
                <div style={styles.heading}>
                    <div><h3>CoWorkk</h3></div>
                    <div style={styles.imageContainer}>
                        <div style={styles.topColor}>
                            <img src={userImage} alt='user' style={styles.image} />
                        </div>
                        <div style={styles.bottomColor}>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                <h3 style={{color: "white"}}>{userName}</h3>
                                <p style={{color: "whitesmoke", marginTop: "0px"}}>Member</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Menu style={{color: "#2b2b4e"}}>
                    <MenuItem icon={<MdHome />} onClick={()=> navigate("/dashboard")}>Home</MenuItem>
                    <MenuItem icon={<MdFolder />} onClick={viewProject}>Projects</MenuItem>
                    <MenuItem icon={<MdCheckCircle />}>Tasks</MenuItem>
                    <MenuItem icon={<MdCalendarToday />} onClick={viewCalendar}>Agenda</MenuItem>
                    <MenuItem icon={<MdPerson />}>Contacts</MenuItem>
                    <MenuItem icon={<MdChat />} onClick={handleAI}>Cowork AI</MenuItem>


                    <SubMenu label="Favorites" style={{color: "#737089"}}>
                        {['Refactor Project', 'CoWork', 'Alternative to...', 'Rearrangement...']
                            .map((item, index) => (
                                <MenuItem key={index} style={styles.menuItemWithSquare}>
                                    <div style={styles.square(squareColors[index])}></div>
                                    {item}
                                </MenuItem>
                            ))}
                    </SubMenu>
                </Menu>



                <div className="footer" style={styles.footer}>
                    <div className="new-task" style={styles.createIcon}>
                        <span>New</span>
                        <MdAdd
                            onClick={(handleClick)}
                            size={20} style={{
                            background: "#413e54",
                            borderRadius: "10px",
                            width: "24px"
                        }}  />
                    </div>
                    <div className="time">
                        <h4>{currentTime.toLocaleTimeString()}</h4>
                        <p>{currentTime.toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;
