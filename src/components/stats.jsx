import React from 'react';


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
                    <p>...</p>
                </div>
                <div style={styles.text}>
                    <p>Completed Projects</p>
                </div>
            </div>
        </>
    )
};


export default Stats;