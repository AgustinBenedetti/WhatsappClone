import Contact from "../Components/Contact/Contact"

const contacts = [
    {
        id: 1,
        name: 'Luffy',
        descripcion: 'Piratas del caribe',
        avatar:'/image/Luffy_v3.png',
        last_connection: 'Hace 2 horas',
        connection_status: 'Offline',
        last_message:'¡Seré el Rey de los Piratas!',
        last_message_hora:'10:10 a. m.',
        messages: [
            {   emisor: 'YO', 
                hora: '10:05 a. m.', 
                id: 1, 
                texto: 'Hola Luffy, ¿cómo estás?', 
                status: 'visto' 
            },
            {   emisor: 'OTRO', 
                hora: '10:06 a. m.', 
                id: 2, 
                texto: '¡Estoy genial! ¿Querés carne?', 
                status: 'visto' 
            },
            {   emisor: 'YO', 
                hora: '10:07 a. m.', 
                id: 3, 
                texto: 'Jajaja, siempre pensás en comida.', 
                status: 'visto' 
            },
            {   emisor: 'OTRO', 
                hora: '10:08 a. m.', 
                id: 4, 
                texto: '¡Obvio! ¡La carne es lo mejor del mundo!', 
                status: 'visto' 
            },
            {   emisor: 'YO', 
                hora: '10:09 a. m.', 
                id: 5, 
                texto: '¿Y cómo va la búsqueda del One Piece?', 
                status: 'visto' 
            },
            {   emisor: 'OTRO', 
                hora: '10:10 a. m.', 
                id: 6, 
                texto: '¡Seré el Rey de los Piratas!', 
                status: 'visto' 
            }
        ]
    },
    {
        id: 2,
        name: 'Eren',
        descripcion: 'Solo se vive una vez',
        avatar:'/image/Eren.png',
        last_connection: 'Ahora',
        connection_status: 'Online',
        last_message:'Ya no hay vuelta atrás.',
        last_message_hora:'2:27 p. m.',
        messages: [
            {
                emisor: 'YO',
                hora: '2:22 p. m.',
                id: 1,
                texto: 'Eren, ¿estás bien?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '2:23 p. m.',
                id: 2,
                texto: 'Estoy decidido. Haré lo que sea necesario.',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '2:24 p. m.',
                id: 3,
                texto: '¿Incluso si te vuelven enemigo del mundo?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '2:25 p. m.',
                id: 4,
                texto: 'Si es por la libertad de mis amigos, sí.',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '2:26 p. m.',
                id: 5,
                texto: 'Tené cuidado con lo que te convertís.',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '2:27 p. m.',
                id: 6,
                texto: 'Ya no hay vuelta atrás.',
                status: 'visto'
            }
        ]
    },
    {   id: 3,
        name: 'Naruto',
        descripcion: 'Jinchuriki',
        avatar:'/image/Naruto.png',
        last_connection: 'Ayer',
        connection_status: 'Offline',
        last_message:'Gracias. ¡Vos también podés lograrlo!',
        last_message_hora:'6:15 p. m.',
        messages: [
            {
                emisor: 'YO',
                hora: '6:10 p. m.',
                id: 1,
                texto: '¡Naruto! ¿Cómo va eso, Hokage?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '6:11 p. m.',
                id: 2,
                texto: '¡Estoy ocupado, pero nunca me rindo! ¡Dattebayo!',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '6:12 p. m.',
                id: 3,
                texto: '¿Todavía entrenás todos los días?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '6:13 p. m.',
                id: 4,
                texto: '¡Claro! Nunca se deja de aprender.',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '6:14 p. m.',
                id: 5,
                texto: 'Me inspiras, Naruto.',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '6:15 p. m.',
                id: 6,
                texto: 'Gracias. ¡Vos también podés lograrlo!',
                status: 'visto'
            }
        ]

    },
    {
        id:4,
        name: 'Gon',
        descripcion: 'Cazador',
        avatar:'/image/Gon.png',
        last_connection: 'Hace 25 minutos',
        connection_status: 'Offline',
        last_message:'¡Gracias! Pero solo soy yo mismo.',
        last_message_hora:'9:35 p. m.',
        messages: [
            {
                emisor: 'YO',
                hora: '9:30 p. m.',
                id: 1,
                texto: 'Hola Gon, ¿qué hacés?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '9:31 p. m.',
                id: 2,
                texto: 'Hola! Estoy en una aventura con Killua.',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '9:32 p. m.',
                id: 3,
                texto: '¿Encontraron algo interesante?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '9:33 p. m.',
                id: 4,
                texto: 'Sí, un bosque lleno de bestias raras.',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '9:34 p. m.',
                id: 5,
                texto: 'Cuidate mucho. Sos muy valiente.',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '9:35 p. m.',
                id: 6,
                texto: '¡Gracias! Pero solo soy yo mismo.',
                status: 'visto'
            }
        ]
    }
]

export const getContactList = () => contacts

export const getContactById = (contact_id) => {
    for(const contact of contacts){
        if(Number(contact.id) === Number(contact_id)){
            return contact
        }
    }
    return null
}