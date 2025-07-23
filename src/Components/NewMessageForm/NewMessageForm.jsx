import React from "react";

const NewMessageForm = ({addNewMessage}) => {
    const handleSubmitMessageForm = (event) => {
        event.preventDefault()
        const new_message_text = event.target.message.value
        addNewMessage(new_message_text)
        //Reseteamos el campo
        event.target.message.value = ''
    }

    return(
        <div>
            <form  onSubmit={handleSubmitMessageForm}>
                <div>
                    <label htmlFor="message">Escribe tu mensaje:</label>
                    <input type="text" placeholder="Escribe tu mensaje..." id="message" name="message" required/>
                </div>
                <button type="submit">Enviar mensaje</button>
            </form>
        </div>
    )
};

export default NewMessageForm;