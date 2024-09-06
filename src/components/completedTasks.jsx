import React from 'react';
import {Menu, SubMenu } from 'react-pro-sidebar';


const CompletedTasks = () => {

    const styles = {
        container: {
            display: 'flex',
            padding: "10px",
            position: 'relative',
            flexDirection: "column",
            height: '260px',
            width: '220px',
            borderRadius: "10px",
            overflow: 'hidden',
            background: "#ffffff"
        },
        title: {
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "black",
            fontWeight: "bold",
        }
    }


    return(
        <>
            <div style={styles.container}>

                <div style={styles.title}> Total</div>
                <select value="Last Month" style={{color: "gray", textAlign: "center",
                    border: "none", justifyContent: "center", alignItems: "center", outline: "none", height: "12px"}}>
                    <option>Last Month</option>
                </select>
                <div>
                    <p>180</p>
                </div>
            </div>
        </>
    )
};


export default CompletedTasks;