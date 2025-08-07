# Clone de WhatsApp

## Descripción

Este proyecto es un clon simple de la interfaz de **WhatsApp Web** construido con **React** y **Vite**. Su objetivo es replicar el aspecto y algunas interacciones básicas del cliente de mensajería: lista de contactos, visualización de mensajes y envío de mensajes desde el navegador. Los datos de los contactos y las conversaciones se almacenan en el front‑end, por lo que no existe una base de datos ni un servidor de back‑end.

## Características

- **Lista de contactos** con avatares, nombres y último mensaje. Los contactos incluidos son personajes de manga/anime y se definen en el archivo `src/services/contactService.js`.
- **Búsqueda y filtros** (barra superior) para filtrar chats (UI lista, sin lógica de filtrado implementada). La cual no cuenta con la funcionalidad
- **Interfaz de chat** que muestra la conversación con un contacto seleccionado, incluyendo hora, emisor y texto de cada mensaje.
- **Envío de mensajes** a través de un formulario con botón de micrófono/“Enviar” que se activa al escribir.
- **Eliminar mensajes** individuales o borrar toda la conversación desde el panel del chat.
- **Navegación** con React Router: la ruta `/` muestra la lista de contactos y la ruta `/contact/:id/messages` abre el chat de un contacto.
- Diseño responsive y estilizado únicamente con CSS; iconos de navegación importados en `src/constants/icons.jsx`.
- Despliegue en **Vercel** para acceso inmediato desde cualquier lugar.

## Tecnologías utilizadas

| Tecnologías   | Descripción                                                         |
|--------------|---------------------------------------------------------------------|
| **React 18** | Biblioteca de JavaScript para crear interfaces de usuario.           |
| **Vite**     | Herramienta de construcción rápida que reemplaza a CRA y permite HMR.|
| **JavaScript**| Lenguaje de programación principal del proyecto.                   |
| **CSS**      | Estilos personalizados para replicar la apariencia de WhatsApp Web. |
| **React Router** | Navegación entre pantallas de contacto y chat.                   |


