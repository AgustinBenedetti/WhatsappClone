import React from "react";
import ICONS from "../../constants/icons";
import "./WhatsAppDownload.css"

const WhatsAppDownload = () => {
    const LockIcon = ICONS.lock;
    return (
        <div className="container-whatsapp-download">
            <img src="/image/whatsapp-contact-screen.png" alt="whatsapp-download" />
            <div className="container-info-whatsapp-download">
                <h1 className="title-whatsapp-download">Descarga WhatsApp para Windows</h1>
                <p className="description-whatsapp-download">Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida.</p>
            </div>
            <button className="button-whatsapp-download">Descargar</button>
            <div className="container-aclaration-whatsapp-download">
                <LockIcon />
                <p className="aclaration-whatsapp-download">Tus mensajes personales están cifrados de extremo a extremo</p>
            </div>
        </div>
    );
};

export default WhatsAppDownload;