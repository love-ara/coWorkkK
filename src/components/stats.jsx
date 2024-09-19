import React from 'react';
import {FaEllipsis} from "react-icons/fa6";


const Stats=()=>{

    const styles = {
        container:{
            padding: "10px",
            position: 'relative',
            height: '260px',
            width: '330px',
            borderRadius: "10px",
            overflow: 'hidden',
            background: "#ffffff"
        },
        title:{
            display: "flex",
            justifyContent: "space-between",
            color:"#a9a6b5",
        },
        text:{
            display: "flex",
            marginTop: "20px"
        }
    }

    return(
        <>
            <div style={styles.container}>
                <div style={styles.title}>
                    <p>Stats</p>
                    <FaEllipsis />
                </div>
                <div style={styles.text}>
                    <p>Completed Projects</p>
                </div>
            </div>
        </>
    )
};


export default Stats;