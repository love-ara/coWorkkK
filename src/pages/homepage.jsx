import React from 'react';
import SideBar from "../components/sidebar";
import Header from "../components/header";
import Stats from "../components/stats";
import Activity from "../components/activityFeed";
import CompletedTasks from "../components/completedTasks";
import ProjectCard from "../components/projectCard";
import Cal from "../components/calendar";
import MenuRight from "../components/menuRight";

const Home = () => {
    const isMobile = window.innerWidth <= 768;

    const styles = {
        sidebar: {
            height: '100%',
            marginTop: isMobile ? '16px' : '24px',
            marginLeft: isMobile ? '10px' : '20px',
            borderRadius: '25px',
            width: isMobile ? '42%' : '250px',
            backgroundColor: '#ffffff',
            // position: 'sticky',
            // top: 0,

        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            height: '190vh',
            gap: "10px",
            width: "100%",
            // padding: "5px",
            backgroundColor: "#f3f2f7",
            overflow: 'hidden',
        },
        heading: {
            marginTop: '20px',
            marginBottom: '20px',
            width: "100%",
        },
        content: {
            flex: 1,
            marginLeft: isMobile ? '0' : '50px',
            // padding: '2px',
            display: 'flex',
            flexDirection: 'column',
            // gap: '12px',
            overflowY: 'auto',
        },
        statRow: {
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-between",
            gap: "12px",
            width: "100%",
        },
        project: {
            display: "flex",
            flexDirection: "row",
            flexWrap: 'wrap',
        },
        card: {
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            flex: 1,
        },
        label: {
            fontFamily: "Montserrat",
            fontSize: '20px',
            fontWeight: '700',
            color: "#413E54",
        },
        calendar: {
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "space-around",
            width: "100%",
        },
        menuRight:{
            position: 'absolute',
            right: 0,
            top: '65%',
        }
    };

    return (
        <>
            <div style={styles.container}>
                <div style={styles.sidebar}>
                    <SideBar />
                </div>
                <main style={styles.content}>
                    <header style={styles.heading}>
                        <Header />
                    </header>
                    <div style={styles.statRow}>
                        <Stats />
                        <Activity />
                        <CompletedTasks />
                    </div>
                    <div style={{ marginTop: "50px"}}>
                        <label style={styles.label}>Ongoing projects</label>
                        <div style={styles.project}>
                            <div style={styles.card}>
                                <ProjectCard />
                                <ProjectCard />
                                {/*<ProjectCard />*/}
                            </div>
                        </div>
                    </div>

                    <div style={styles.calendar}>
                        <label style={styles.label}>Planning </label>
                        <Cal />
                    </div>

                </main>
                <div style={styles.menuRight}>
                    <MenuRight />
                </div>

            </div>
        </>
    );
};

export default Home;
