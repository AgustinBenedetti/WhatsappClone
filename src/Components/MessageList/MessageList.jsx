import React, { useEffect, useRef } from 'react'
import Message from '../Message/Message'
import './MessageList.css'

const MessageList = ({messages, deleteMessageById}) => {
    const bottomRef = useRef(null); // referencia para scroll automático

  // Cuando cambia la lista de mensajes, hace scroll al final
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

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
            {/* Elemento invisible al final para hacer scroll */}
            <div ref={bottomRef}></div>
        </div>
    )
}

export default MessageList