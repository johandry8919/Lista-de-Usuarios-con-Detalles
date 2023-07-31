# Lista de Usuarios con Detalles

Esta es una aplicación web desarrollada en React que muestra una lista de usuarios obtenida desde el servicio "jsonplaceholder.typicode.com/users". Permite ver los detalles de cada usuario en un modal al hacer clic en el botón "Detalle".

## Instalación

Para instalar y ejecutar la aplicación en tu entorno local, sigue estos pasos:

1. Clona este repositorio en tu máquina local usando el siguiente comando:


git clone <url_del_repositorio>
Navega al directorio de la aplicación:
bash
Copy code
cd lista-de-usuarios-con-detalles
Instala las dependencias utilizando npm o yarn:
bash
Copy code
npm install
o

bash
Copy code
yarn install
Inicia la aplicación en modo de desarrollo:
bash
Copy code
npm start
o

bash
Copy code
yarn start
La aplicación se abrirá automáticamente en tu navegador en http://localhost:3000.

Funcionamiento
Una vez que la aplicación se haya iniciado, verás una lista de usuarios en la página principal. Cada tarjeta de usuario muestra el nombre, apellido y correo electrónico del usuario, así como un botón "Detalle" que te permitirá ver más información del usuario en un modal.

Componentes
La aplicación consta de los siguientes componentes:

App: Componente principal que gestiona el estado de la lista de usuarios y muestra la lista y el modal de detalles.
Card: Componente funcional que representa una tarjeta individual de usuario y muestra la información básica del usuario.
Verdetalles: Componente funcional que muestra los detalles completos de un usuario en un modal.
API
La aplicación utiliza la API de "jsonplaceholder.typicode.com" para obtener los datos de los usuarios. La lista de usuarios se obtiene mediante una llamada a "https://jsonplaceholder.typicode.com/users". Los detalles de un usuario específico se obtienen utilizando la URL "https://jsonplaceholder.typicode.com/users/{id}" donde {id} es el identificador del usuario.

Tecnologías utilizadas
React: Biblioteca JavaScript para construir interfaces de usuario interactivas.
useState: Hook de React para el manejo del estado en componentes funcionales.
useEffect: Hook de React para realizar efectos secundarios en componentes funcionales.
Fetch API: API de JavaScript utilizada para realizar solicitudes HTTP.
HTML5 y CSS3: Para la estructura y el diseño de la aplicación.
Contribución
Si deseas contribuir a este proyecto, puedes realizar un pull request con tus sugerencias o mejoras. ¡Serán bienvenidas!

