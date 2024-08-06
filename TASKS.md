# User Stories and tasks

Esta guia tiene listadas las user stories que se harán y las sub-tareas que se generan de las mismas.


1. Preparación de entorno de desarrollo y configuración de proyecto
  - [x] Crear proyecto con next.js
  - [x] Configurar el pipeline para el build a prod
  - [x] Configurar el linter automatizado y actions pre y post commit
  - [x] Configurar framework de testing unitario jest+testing library (para componentes)
  - [x] Configurar framework de testing e2e playwright (para flujos)
  - [x] Configurar github actions
2. Vista principal 
- [x] Mostrará un listado de 50 personajes o el resultado de los personajes introducidos en el buscador.
   -  [x] Operaciones CRUD
      -  [x] Probar los servicios de CRUD con postman 
      -  [x] Configurar variables de entorno para agregar el API_KEY a las requests
      -  [x] Crear los servicios de get de listado de personajes, busqueda por id el detalle y listar los comics por id de personaje
   -  [x] Visualizar el listado de la api en el frontend
      -  [x] Crear componente Card de heroe 
      -  [x] Listar los heroes en el home
      -  [ ] Crear componente de filtro de busqueda que filtre con los resultados traidos de la api.
      -  [ ] Crear componente de "results" que muestre la cantidad de resultados mostrados.   
   -  [ ] Crear la acción de favorito
      -  [ ] Crear el boton y accion de "agregar favorito" en la card.
      -  [ ] Crear el Context de react de favoritos que almacena y elimina los favoritos de la app en un LocalStorage
      -  [ ] Al hacer clic en el icono superior de favoritos, se deberán mostrar los personajes favoritos almacenados. 
1. Detalle de personaje 
- [x]  Mostrar información relativa al personaje y los cómics en los que aparece.
   -  [x] Crear componente  de detalle
   -  [x] Crear componente de listado de comics donde aparece el personaje, solo deben ser los primeros 20
1. Mejoras
- [ ] Crear una cache para guardar las requests de la api de marvel y así evitar recargas innecesarias.