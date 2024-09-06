import React from 'react';


const ProjectCard = () => {
    const style = {
        container :{
            display: 'flex',
            padding: "10px",
            position: 'relative',
            height: '260px',
            width: '241px',
            borderRadius: "10px",
            overflow: 'hidden',
            background: "#ffffff"
        }
    }



    return(
        <>
            <div style={style.container}>
                <h6>Hallo</h6>
            </div>
        </>
    )
};


export default ProjectCard;