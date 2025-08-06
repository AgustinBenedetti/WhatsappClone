import React, { useState, useEffect } from "react";
import MessageList from "../../Components/MessageList/MessageList";
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm";
import { useParams } from "react-router";
import { getContactById, getContactList } from "../../services/contactService";
import NavBarSide from "../../Components/NavBarSide/NavBarSide";
import ChatSearchAndFilters from "../../Components/ChatSearchAndFilters/ChatSearchAndFilters";
import ContactList from "../../Components/ContactList/ContactList";
import "./ChatScreen.css";
import ChatBar from "../../Components/ChatBar/ChatBar";

const ChatScreen = () => {
    const contacts = getContactList();
    const [contactsState, setContactsState] = useState(contacts);

    const { contact_id } = useParams();

    // Nuevo estado sincronizado con la URL
    const [contactSelected, setContactSelected] = useState(getContactById(contact_id));
    const [messages, setMessages] = useState(contactSelected.messages);

    // Actualiza contacto y mensajes cuando cambia contact_id
    useEffect(() => {
        const newContact = getContactById(contact_id);
        setContactSelected(newContact);
        setMessages(newContact.messages);
    }, [contact_id]);

    const deleteMessageById = (message_id) => {
        const new_message_list = messages.filter(message => message.id !== message_id);
        setMessages(new_message_list);
    };

    const addNewMessage = (text) => {
        const horaActual = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });

        const newMessage = {
            emisor: 'YO',
            hora: horaActual,
            id: messages.length + 1,
            texto: text,
            status: 'visto'
        };

        const cloned_message_list = [...messages, newMessage];
        setMessages(cloned_message_list);
    };

    const deleteAllMessages = () => {
        setMessages([]);
    };

    return (
        <div className="container-chat-screen">
            <NavBarSide />
            <div className="container-contact-list-and-search">
                <ChatSearchAndFilters />
                <ContactList contacts={contactsState} />
            </div>
            <div className="container-chat">
                <ChatBar contact={contactSelected} />
                <MessageList messages={messages} deleteMessageById={deleteMessageById} />
                <NewMessageForm addNewMessage={addNewMessage} />
            </div>
        </div>
    );
};

export default ChatScreen;
