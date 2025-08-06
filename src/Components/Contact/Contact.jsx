// src/Screens/ContactScreen/ContactItem.jsx
import React from 'react';
import "./Contact.css"
import { Link } from 'react-router';

const Contact = ({ contact }) => {
    return (
        <Link to ={`/contact/${contact.id}/messages`} className="container-contact">
            <div className='container-image'>
            <img src={contact.avatar} alt={contact.name} width={100}/>
            </div>
            <div className='container-info-contact'>
                <h2 className='name-contact'>{contact.name}</h2>
                <span className='last-message-contact'>{contact.last_message}</span>
            </div>
            <div className='container-hora'>
                <span className='last-message-hora-contact'> {contact.last_message_hora}</span>
            </div>
        </Link>
  )
}

export default Contact;