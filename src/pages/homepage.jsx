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

    const styles ={

        sidebar : {
            height: '100%',
            marginTop: isMobile ? '16px' : '24px',
            marginLeft: isMobile ? '10px' : '20px',
            borderRadius: '25px',
            // overflow: 'hidden',
            width: isMobile ? '100%' : '250px',
            // height: isMobile ? 'auto' : '100vh',
            backgroundColor: '#ffffff',
            // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
            gap: "12px",
            width: "100%",
            backgroundColor: "#f3f2f7"
        },
        heading: {
            // marginBottom: '10px',
        },
        content: {
            // flex: 1,
            marginLeft: isMobile ? '0' : '50px',
            padding: '2px',
            display: 'flex',
            flexDirection: 'column',
            // gap: '12px',
        },
        statRow:{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "20px",
            width: "100%"
        },
        project: {
// marginBottom: "20px"
        },
        card:{
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            width: "100%",
        },
        label:{
            fontFamily: "Montserrat",
            fontSize: '20px',
            fontWeight: '700',
            color: "#413E54",
        },
        calendar:{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "100%",
        }

    };


    return (
        <>
            <div style={styles.container}>
                <div style={styles.sidebar}>
                    <SideBar/>
                </div>
                <main style={styles.content}>
                    <header>
                        <Header/>
                    </header>
                    <div  style={styles.statRow}>
                            <Stats/>
                            {/*<Activity/>*/}
                            {/*<CompletedTasks />*/}

                    </div>
                    <div style={styles.project}>
                        <label style={styles.label}>Ongoing projects</label>
                        <div style={styles.card}>
                            <ProjectCard/>
                            {/*<ProjectCard/>*/}
                            {/*<ProjectCard/>*/}
                            {/*<MenuRight />*/}
                        </div>
                    </div>

                    <div style={styles.calendar}>
                        <label style={styles.label}>Planning </label>
                            {/*<Cal/>*/}
                    </div>
                </main>
            </div>
        </>
    );
};

export default Home;
