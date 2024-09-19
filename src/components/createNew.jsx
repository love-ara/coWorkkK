
import React from 'react';
import Home from "../pages/homepage";
import style from "./../pages/newproject/index.module.css"
import {FaTasks, FaTrello} from "react-icons/fa";
import projectIcon from "./../assets/projectIcon.png"
import kanbanIcon from "./../assets/kanbanIcon.png"
import taskIcon from "./../assets/taskIcon.png"
import {MdCancel} from "react-icons/md";
import {useNavigate} from "react-router-dom";



const CreateNew = () => {
    const navigate = useNavigate();

    const cancel = () =>{
        navigate("/dashboard")
    }

    const createProject= ()=>{
        navigate("/newProject")
    }
 const createTask= ()=>{
        navigate("/createTask")
    }

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        project: {
            border: "1px dashed #ccc",
            display: "flex",
            justifyContent: "center",
            flexDirection: 'column',
            alignItems: "center",
            padding: "50px",
            borderRadius: "10px",
            marginBottom: "10px",
            marginTop: "30px",


        },
        imageStyle:{
          width: "50px",
          height: "50px",
           marginBottom: "10px",
        },
        text: {
            fontWeight: 700,
            color: "#241f46",
            marginTop: "10px",
        },
        heading:{
            fontWeight: 600,
            display: "flex",
            justifyContent: "space-between",
        }

    };


    return(
        <>
            <Home />
            <div className={style.darkBackgroundCover}>
                <div className={style.createProject}>
                    <div style={styles.heading}>
                        Create
                        <MdCancel onClick={(cancel)}/>
                    </div>
                    <div style={styles.container}>
                        <div style={styles.project} onClick={(createProject)}>
                            <img src={projectIcon}  alt="Project" style={styles.imageStyle}/>
                            <p style={styles.text}>Projects</p>
                        </div>
                        <div style={styles.project} onClick={(createTask)}>
                            <img src={kanbanIcon} alt="Kanban" style={styles.imageStyle}/>
                            <p style={styles.text}>Kanban</p>
                        </div>
                        <div style={styles.project} onClick={(createTask)}>
                            <img src={taskIcon} alt="Task" style={styles.imageStyle}/>
                            <p style={styles.text}>Tasks</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


export default CreateNew;