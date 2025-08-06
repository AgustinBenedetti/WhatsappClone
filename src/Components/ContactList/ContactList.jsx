// src/Screens/ContactScreen/ContactList.jsx
import React from 'react';
import Contact from '../Contact/Contact';
import "./ContactList.css"

const ContactList = ({contacts}) => {
    return (
        <div className='container-contact-list'>
            {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </div>
    )
}

export default ContactList;