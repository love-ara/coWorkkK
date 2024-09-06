import React from 'react';


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
        }
    }

    return(
        <>
            <div style={styles.container}>
                <div style={styles.title}>
                    <p>Activity Feed</p>
                    <p>...</p>
                </div>
            </div>
        </>
    )
};


export default Activity;