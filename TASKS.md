# User Stories and tasks

Esta guia tiene listadas las user stories que se harán y las sub-tareas que se generan de las mismas.


1. Preparación de entorno de desarrollo y configuración de proyecto
  - [ ] Crear proyecto con next.js
  - [ ] Configurar el pipeline para el build a prod
  - [ ] Configurar el linter automatizado y actions pre y post commit
  - [ ] Configurar github actions
2. Vista principal 
- [ ] Mostrará un listado de 50 personajes o el resultado de los personajes introducidos en el buscador.
   -  [ ] Operaciones CRUD
      -  [ ]  Probar los servicios de CRUD con postman 
      -  [ ] Configurar variables de entorno para agregar el API_KEY a las requests
      -  [ ] Crear los servicios de CRUD de heroes, consulta y favorito 
   -  [ ] Visualizar el listado de la api en el frontend
      -  [ ] Crear componente Card de heroe 
      -  [ ] Listar los heroes en el home
      -  [ ] Crear componente de filtro de busqueda que filtre con los resultados traidos de la api.
      -  [ ] Crear el boton y accion de "agregar favorito" en la card.
      -  [ ] Crear el Context de react de favoritos que almacena y elimina los favoritos de la app en un LocalStorage
      -  [ ] Al hacer clic en el icono superior de favoritos, se deberán mostrar los personajes favoritos almacenados. 
1. Detalle de personaje 
- [ ]  Mostrar información relativa al personaje y los cómics en los que aparece.
   -  [ ] Crear componente  de detalle
   -  [ ] Crear componente de listado de comics donde aparece