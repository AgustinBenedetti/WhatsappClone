import React, { useState}from "react";
import ContactList from "../../Components/ContactList/ContactList";
import { getContactList } from "../../services/contactService";
import WhatsAppDownload from "../../Components/WhatsAppDownload/WhatsAppDownload";
import "./ContactScreen.css"
import NavBarSide from "../../Components/NavBarSide/NavBarSide";
import ChatSearchAndFilters from "../../Components/ChatSearchAndFilters/ChatSearchAndFilters";

const ContactScreen = () => {
    const contacts = getContactList();
    const [contactsState, setContactsState] = useState(contacts);

    return (
        <div className="container-contact-screen">
            <NavBarSide />
            <div className="container-contact-list-and-search">
            <ChatSearchAndFilters />
            <ContactList contacts={contactsState} />
            </div>
            
            <WhatsAppDownload />
        </div>
    )
}

export default ContactScreen;

