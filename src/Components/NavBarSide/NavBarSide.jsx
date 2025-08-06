import React from "react";
import ICONS from "../../constants/icons";
import "./NavBarSide.css"

const NavBarSide = () => {
    const SettingsIcon = ICONS.settings;
    const MessageIcon = ICONS.message;
    const StateIcon = ICONS.state;
    const ComunityIcon = ICONS.comunity;    
    return (
        <div className="container-navbar-side">
            <div className="high-part-navbar">
                <button><MessageIcon /></button>
                <button><StateIcon /></button>
                <button><ComunityIcon /></button>
            </div>
            <div className="low-part-navbar">
                <button><SettingsIcon /> </button>
                <img src="/image/Eren.png" alt="perfil-image" />
            </div>
        </div>
    )
};

export default NavBarSide;