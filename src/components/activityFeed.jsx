import React from 'react';
import {FaEllipsis} from "react-icons/fa6";


const Activity=()=>{

    const styles = {
        container:{
            padding: "10px",
            position: 'relative',
            height: '260px',
            width: '499px',
            borderRadius: "10px",
            overflow: 'hidden',
            background: "#ffffff"
        },
        title:{
            display: "flex",
            justifyContent: "space-between",
            color:"#a9a6b5",
        }
    }

    return(
        <>
            <div style={styles.container}>
                <div style={styles.title}>
                    <p>Activity Feed</p>
                    <FaEllipsis />
                </div>
            </div>
        </>
    )
};


export default Activity;