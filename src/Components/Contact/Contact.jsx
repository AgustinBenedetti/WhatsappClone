// src/Screens/ContactScreen/ContactItem.jsx
import React from 'react';
import "./Contact.css"
import { Link } from 'react-router';

const Contact = ({ contact }) => {
    return (
        <Link to ={`/contact/${contact.id}/messages`} className="contact">
            <h2>{contact.name}</h2>
            <img src={contact.avatar} alt={contact.name} width={100}/>
            <span>Last connection: {contact.last_connection}</span>
            <span>Status: {contact.connection_status}</span>
        </Link>
  )
}

export default Contact;