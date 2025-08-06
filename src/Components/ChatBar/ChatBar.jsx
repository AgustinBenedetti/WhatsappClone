import React from "react";
import { Link } from "react-router"; // asegurate de usar react-router-dom
import ICONS from "../../constants/icons";
import "./ChatBar.css";

const ChatBar = ({ contact }) => {
    const VideoCall = ICONS.video;
    const Search = ICONS.search;
    const Settings = ICONS.points;

    return (
        <div className="container-chatbar">
            <div className="container-contact-chatbar">
                <div className="container-image-chatbar">
                    <img src={contact.avatar} alt={contact.name} />
                </div>
                <div className="container-info-chatbar">
                    <Link to={`/contact/${contact.id}/messages`} className="name-contact">
                        {contact.name}
                    </Link>
                </div>
            </div>

            <div className="container-video-search-settings">
                <button className="btn-video-call"><VideoCall /></button>
                <button><Search /></button>
                <button><Settings /></button>
            </div>
        </div>
    );
};

export default ChatBar;
