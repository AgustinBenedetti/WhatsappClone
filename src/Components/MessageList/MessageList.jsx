import React from 'react'
import Message from '../Message/Message'
import './MessageList.css'

const MessageList = ({messages, deleteMessageById}) => {
    
    const lista_mensajes = messages.map(
        function(message){
            return(
                
                    <Message
                    key={message.id}
                    emisor={message.emisor}
                    hora={message.hora}
                    id={message.id}
                    texto={message.texto}
                    status={message.status}
                    deleteMessageById={deleteMessageById}
                    />
            )
        }
    )

    if (lista_mensajes.length === 0) {
    return(
        <div>
            <span>Aun no hay mensajes</span>
        </div>
    )
    }
    
    return(
        <div className='container-message-list'>
            {lista_mensajes}
        </div>
    )
}

export default MessageList