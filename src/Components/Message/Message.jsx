import React, { useState } from "react";
import "./Message.css";
import ICONS from "../../constants/icons";

const Message = ({ emisor, hora, id, texto, deleteMessageById }) => {
    const [messageSelected, setMessageSelected] = useState(false);

    const handleContextMenu = (e) => {
        e.preventDefault();
        setMessageSelected(true);
    };

    const handleClick = () => {
        if (messageSelected) {
            setMessageSelected(false);
        }
    };

    const Delete = ICONS.delete;
    const isMine = emisor === "YO";

    return (
        <div
            onContextMenu={handleContextMenu}
            onClick={handleClick}
            className={`container-message ${isMine ? "mine" : "theirs"}`}
        >
            <div className="message-text">
                <span>{texto}</span>
                <span className="message-time">{hora}</span>
            </div>

            {messageSelected && (
                <button
                    className="delete-button"
                    onClick={() => deleteMessageById(id)}
                    title="Eliminar mensaje"
                >
                    <Delete />
                </button>
            )}
        </div>
    );
};

export default Message;
