import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {
    MdHome,
    MdFolder,
    MdCheckCircle,
    MdCalendarToday,
    MdPerson,
    MdAdd
} from "react-icons/md";
import user from "../assets/def.png";
import { Link } from "react-router-dom";


const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const isMobile = window.innerWidth <= 768;

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const styles = {
        sider: {
            borderRadius: '25px',
            width: isOpen || !isMobile ? '250px' : '0',
            height: '190vh',
            // background: '#ffffff',
            // overflow: 'hidden',
            transition: 'width 0.3s ease',
            // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        toggleButton: {
            position: 'fixed',
            top: '10px',
            left: '10px',
            zIndex: '1000',
        },
        menuItemWithSquare: {
            position: 'relative',
            paddingLeft: '30px',
        },
        square: (color) => ({
            content: '""',
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '12px',
            height: '12px',
            borderRadius: '20px',
            backgroundColor: color,
        }),
        footer: {
            marginTop: "auto",
            borderTop: "1px dashed #ccc",
            paddingTop: "10px",
            textAlign: "center",
            color: "#b19cd9",
        },
        newTask: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
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
            marginLeft: "69px",
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
        }
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
                            <img src={user} alt='User' style={styles.image} />
                        </div>
                        <div style={styles.bottomColor}>
                            <div style={{display: "flex", flexDirection:
                                    "column", justifyContent: "center", alignItems: "center"}}>
                                <h3 style={{color: "white"}}>Theo G.</h3>
                                <p style={{color: "whitesmoke", marginTop: "0px"}}>FullStack Developer</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Menu style={{color: "#2b2b4e"}}>
                    <MenuItem icon={<MdHome />} active>Home</MenuItem>
                    <MenuItem icon={<MdFolder />}>Projects</MenuItem>
                    <MenuItem icon={<MdCheckCircle />}>Tasks</MenuItem>
                    <MenuItem  routerLink={<Link to="/calendar" />} icon={<MdCalendarToday />}>Agenda</MenuItem>
                    <MenuItem icon={<MdPerson />}>Contacts</MenuItem>
                    <SubMenu label="Favorites" style={{color: "#737089"}}>
                        {['Refactor Project', 'CoWork', 'Alternative to...', 'Rearrangement...'].map((item, index) => (
                            <MenuItem key={index} style={styles.menuItemWithSquare}>
                                <div style={styles.square(squareColors[index])}></div>
                                {item}
                            </MenuItem>
                        ))}
                    </SubMenu>
                </Menu>

                <div className="footer" style={styles.footer}>
                    <div className="new-task" style={styles.newTask}>
                        <span>New</span>
                        <MdAdd size={20} />
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
