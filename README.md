# Curso de Backend con Node.js: API REST con Express.js - Platzi

## .gitignore

- https://www.toptal.com/developers/gitignore


## RESTful API

REST: Representational State Transfer
Es una conveccion que se refiere a servicios web por protocolo HTTP

Metodos:

- Get: Obtener
- Put: Modificar/Actualizar
- Patch: Modificar/Actualizar
- Post: Crear
- Delete: Eliminar
- 
Patch
El método de solicitud HTTP PATCH aplica modificaciones parciales a un recurso.

PATCH es algo análogo al concepto de "actualización" que se encuentra en CRUD, Una solicitud se considera un conjunto de instrucciones sobre cómo modificar un recurso. Contrasta esto con PUT; que es una representación completa de un recurso.PATCH

Mo es necesariamente idempotente, aunque puede serlo. Contrasta esto con PUT; que siempre es idempotente.

La palabra "idempotente" significa que cualquier número de solicitudes repetidas e idénticas dejará el recurso en el mismo estado.

Por ejemplo, si un campo de contador de incremento automático es una parte integral del recurso, entonces un PUT lo sobrescribirá naturalmente (ya que sobrescribe todo), pero no necesariamente para .PATCH

PATCH (como POST) puede tener efectos secundarios sobre otros recursos.

## Generar data fake

  ```npm i faker```
  ```npm i faker@5.5.3 -S```
  ```npm i @faker-js/faker``` Version recomendada

## Principio de Responsabilidad Unica

Cada pieza de código solo debería tener una responsabilidad.
Aplica también a los archivos.
Express.Router permite la separación de responsabilidades en los archivos.

## HTTP

- https://platzi.com/new-home/clases/4656-backend/56009-http/

##  Códigos de estado o HTTP response status codes

- https://http.cat/
- https://developer.mozilla.org/en-US/docs/Web/HTTP

## Middlewares

Un middleware es un bloque de código que se ejecuta entre la petición que hace el usuario (request) hasta que la petición llega al servidor.

Casos de uso:
- Funcionar como pipes
- Validar datos
- Capturas errores
- Validar permisos
- Controlar accesos.

https://expressjs.com/en/guide/writing-middleware.html


## Manejo de errores con Boom

Instalación:

  ```npm i @hapi/boom```

## Validación de datos con Joi

Instalación:

  ```npm i joi```

  - https://joi.dev/


## Middlewares populares en Express.js

### CORS

Middleware para habilitar CORS (Cross-origin resource sharing) en nuestras rutas o aplicación. 
- http://expressjs.com/en/resources/middleware/cors.html

### Morgan

Un logger de solicitudes HTTP para Node.js. 
- http://expressjs.com/en/resources/middleware/morgan.html

### Helmet

Helmet nos ayuda a proteger nuestras aplicaciones Express configurando varios encabezados HTTP. ¡No es a prueba de balas de plata, pero puede ayudar! 
- https://github.com/helmetjs/helmet

### Express Debug
 
Nos permite hacer debugging de nuestras aplicaciones en Express mediante el uso de un toolbar en la pagina cuando las estamos desarrollando. 
- https://github.com/devoidfury/express-debug

### Express Slash

Este middleware nos permite evitar preocuparnos por escribir las rutas con o sin slash al final de ellas. 
- https://github.com/ericf/express-slash

### Passport

Passport es un middleware que nos permite establecer diferentes estrategias de autenticación a nuestras aplicaciones. 
- https://github.com/jaredhanson/passport

Más middlewares populares en el siguiente enlace: http://expressjs.com/en/resources/middleware.html


## Consideraciones para producción 

- Cors
- Https
- Procesos de Build
- Remover logs
- Seguridad (Helmet)
- Testing
