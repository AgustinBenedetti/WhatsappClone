import React from "react";
import "./ChatSearchAndFilters.css";
import ICONS from "../../constants/icons";


const ChatSearchAndFilters = () => {
    const SearchIcon = ICONS.search;
    const Menu = ICONS.points;
    const NewChat = ICONS.newChat;
    return (
        <div className="chat-header">
        <div className="chat-header-top">
            <h1 className="app-title">WhatsApp</h1>
            <div className="chat-header-actions">
            <NewChat />
            <Menu />
            </div>
        </div>

        <div className="chat-search-bar">
            <SearchIcon />
            <input
            type="text"
            placeholder="Buscar un chat o iniciar uno nuevo"
            className="chat-search-input"
            />
        </div>

        <div className="chat-filters">
            <button className="filter active">Todos</button>
            <button className="filter">No leídos</button>
            <button className="filter">Favoritos</button>
            <button className="filter">Grupos</button>
        </div>
        </div>
  );
};

export default ChatSearchAndFilters;
