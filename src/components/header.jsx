import React from 'react';

const Header = () =>{
    const styles ={
        header: {
            display: "flex",
            flexDirection: "column",
            marginBottom: "5px"
        },
        homeText: {
            fontSize: "24px",
            color: "#696680",
        },
        text:{
            fontSize: "15px",
            fontWeight: 600
        }
    };


    return(
        <>
            <header style={styles.header}>
                <p style={styles.homeText}>Home</p>
                <p style={styles.text}>Welcome to your dashboard</p>
            </header>
        </>
)
}


export default Header;