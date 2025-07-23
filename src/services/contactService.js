import Contact from "../Components/Contact/Contact"

const contacts = [
    {
        id: 1,
        name: 'Luffy',
        descripcion: 'Piratas del caribe',
        avatar:'https://i.pinimg.com/736x/59/cd/b2/59cdb2d00d15b6d2eb09a4e97ffae850.jpg',
        last_connection: 'Hace 2 horas',
        connection_status: 'Offline',
        messages: [
            {   emisor: 'YO', 
                hora: '10:05', 
                id: 1, 
                texto: 'Hola Luffy, ¿cómo estás?', 
                status: 'visto' 
            },
            {   emisor: 'OTRO', 
                hora: '10:06', 
                id: 2, 
                texto: '¡Estoy genial! ¿Querés carne?', 
                status: 'visto' 
            },
            {   emisor: 'YO', 
                hora: '10:07', 
                id: 3, 
                texto: 'Jajaja, siempre pensás en comida.', 
                status: 'visto' 
            },
            {   emisor: 'OTRO', 
                hora: '10:08', 
                id: 4, 
                texto: '¡Obvio! ¡La carne es lo mejor del mundo!', 
                status: 'visto' 
            },
            {   emisor: 'YO', 
                hora: '10:09', 
                id: 5, 
                texto: '¿Y cómo va la búsqueda del One Piece?', 
                status: 'visto' 
            },
            {   emisor: 'OTRO', 
                hora: '10:10', 
                id: 6, 
                texto: '¡Seré el Rey de los Piratas! ¡No tengo dudas!', 
                status: 'visto' 
            }
        ]
    },
    {
        id: 2,
        name: 'Eren',
        descripcion: 'Solo se vive una vez',
        avatar:'https://i.pinimg.com/736x/ef/34/96/ef349658df76f93c52780ed014f31f39.jpg',
        last_connection: 'Ahora',
        connection_status: 'Online',
        messages: [
            {
                emisor: 'YO',
                hora: '14:22',
                id: 1,
                texto: 'Eren, ¿estás bien?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '14:23',
                id: 2,
                texto: 'Estoy decidido. Haré lo que sea necesario.',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '14:24',
                id: 3,
                texto: '¿Incluso si te vuelven enemigo del mundo?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '14:25',
                id: 4,
                texto: 'Si es por la libertad de mis amigos, sí.',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '14:26',
                id: 5,
                texto: 'Tené cuidado con lo que te convertís.',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '14:27',
                id: 6,
                texto: 'Ya no hay vuelta atrás.',
                status: 'visto'
            }
        ]
    },
    {   id: 3,
        name: 'Naruto',
        descripcion: 'Jinchuriki',
        avatar:'https://i.pinimg.com/1200x/11/d4/13/11d41360d4d51ad3e07eca1f4bc7f8dd.jpg',
        last_connection: 'Ayer',
        connection_status: 'Offline',
        messages: [
            {
                emisor: 'YO',
                hora: '18:10',
                id: 1,
                texto: '¡Naruto! ¿Cómo va eso, Hokage?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '18:11',
                id: 2,
                texto: '¡Estoy ocupado, pero nunca me rindo! ¡Dattebayo!',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '18:12',
                id: 3,
                texto: '¿Todavía entrenás todos los días?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '18:13',
                id: 4,
                texto: '¡Claro! Nunca se deja de aprender.',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '18:14',
                id: 5,
                texto: 'Me inspiras, Naruto.',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '18:15',
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
        avatar:'https://i.pinimg.com/736x/5d/d5/1a/5dd51ab77f44420e4a51c81a006961e3.jpg',
        last_connection: 'Hace 25 minutos',
        connection_status: 'Offline',
        messages: [
            {
                emisor: 'YO',
                hora: '21:30',
                id: 1,
                texto: 'Hola Gon, ¿qué hacés?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '21:31',
                id: 2,
                texto: 'Hola! Estoy en una aventura con Killua.',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '21:32',
                id: 3,
                texto: '¿Encontraron algo interesante?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '21:33',
                id: 4,
                texto: 'Sí, un bosque lleno de bestias raras.',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '21:34',
                id: 5,
                texto: 'Cuidate mucho. Sos muy valiente.',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '21:35',
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