import React from 'react';

const Header = () =>{
    const styles ={
        header: {
            height: "150px",
            width: "500px",
            display: "flex",
            flexDirection: "column",
        }
    };


    return(
        <>
            <header style={styles.header}>
                <h1>Home</h1>
                <h3>Welcome to your Dashboard!</h3>
            </header>
        </>
)
}


export default Header;