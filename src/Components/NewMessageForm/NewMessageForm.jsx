import React, { useState } from "react";
import "./NewMessageForm.css";
import ICONS from "../../constants/icons";

const NewMessageForm = ({ addNewMessage }) => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = message.trim();
        if (trimmed !== "") {
            addNewMessage(trimmed);
            setMessage("");
        }
    };

    const Plus = ICONS.add;
    const Emoji = ICONS.emoji;
    const Mic = ICONS.mic;
    const Send = ICONS.send;

    return (
        <form className="new-message-form" onSubmit={handleSubmit}>
            <div className="input-container">
                <button type="button" className="icon-button"><Plus /></button>
                <button type="button" className="icon-button"><Emoji /></button>
                <input
                    type="text"
                    placeholder="Escribe un mensaje"
                    name="message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    autoComplete="off"
                />
                {message.trim() === "" ? (
                    <button type="button" className="icon-button"><Mic /></button>
                ) : (
                    <button type="submit" className="send-button"><Send /></button>
                )}
            </div>
        </form>
    );
};

export default NewMessageForm;
