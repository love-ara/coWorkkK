import React from 'react';
import {
    MdSettings,
    MdSearch,
    MdChat,
    MdNotifications
} from "react-icons/md";

const MenuRight = () => {

    const style = {
        container: {
            display: 'flex',
            height : "187px",
            width: '55px',
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            color: "#413e54",
            borderRadius: "30px",
            background: "#ffffff"

        }
    }

    return(
        <>
            <div style={style.container}>
                <MdSearch />
                <MdNotifications />
                <MdChat />
                <MdSettings />

            </div>
        </>
    )
};


export default MenuRight;