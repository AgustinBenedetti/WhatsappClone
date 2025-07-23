// src/Screens/ContactScreen/ContactList.jsx
import React from 'react';
import Contact from '../Contact/Contact';

const ContactList = ({contacts}) => {
    return (
        <div>
            {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </div>
    )
}

export default ContactList;