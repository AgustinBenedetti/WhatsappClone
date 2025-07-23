import React, { useState } from "react";
import MessageList from "../../Components/MessageList/MessageList";
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm";
import { useParams } from "react-router";
import { getContactById } from "../../services/contactService";



const ChatScreen = () => {

    const {contact_id} = useParams()
    const contact_selected = getContactById(contact_id)
    const [messages, setMessages] = useState(contact_selected.messages)

    const deleteMessageById = (message_id) => {
        const new_message_list= []
        
        for(const message of messages){
            if(message.id !== message_id){
                new_message_list.push(message)
            }
        }
        setMessages(new_message_list)
    }

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
        }
        
        const cloned_message_list=[...messages]
        cloned_message_list.push(newMessage)
        setMessages(cloned_message_list)
    }

    const deleteAllMessages = () => {
        setMessages([])
    }

    return (
        <div>
            <h1>Mensajes</h1>
            {
                messages.length > 0 
                && 
                <button onClick={deleteAllMessages}>Eliminar todos los mensajes</button>
            }
            <MessageList messages={messages} deleteMessageById={deleteMessageById} />
            <NewMessageForm addNewMessage={addNewMessage} />
        </div>
    )
}

export default ChatScreen;