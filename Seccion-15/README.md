# Rutas protegidas

Vamos a enfocarnos en las rutas privadas y las rutas publicas.

Vamos a realizar autenticaciones.No va a hacer contra un backend, todo sera local.
Proteccion  y control de rutas.
Si el usuario esta expirado y nos volvamos a logear va a volver al mismo lugar donde estaba.

- Temas de la Seccion:
- Rutas públicas
- Rutas privadas
- Login y logout - Sin backend aún
- Recordar cuál fue la última ruta visitada para mejorar la experiencia de usuario.
- Context
- Reducer

</hr>

## Objectivo de esta seccion

Esta es una sección pequeña pero importante para trabajar las bases de la autenticación y protección de nuestra aplicación.

## Proteccion de rutas del proyecto heroes spa

Vamos a trabajar con las rutas privadas y las rutas publicas de mi aplicacion. 

Tenemos que pensar que vamos anecesitar saber en todo momento que tenemos un usuario autenticado o no.
Y esto nos dice que toda nuestra aplicacion va a necesitar un context donde vamos a tener el proveedor de autenticacion del usuario.

Cuando nosotros pensamos en hacer un contexto en nuestra aplicacion hacemos carpetas como las siguientes en el file system:

**context:** Crear la carpeta en los modulos que se necesiten el contexto.
**type:** Lo utilizamos para cuando despachemos acciones a nuestro reducer , aca vamos a saber cuales tipos vamos a tener y ya tenerlo centralizado. Y nos va a ayudar cuando testiemos nuestra aplicacion.

Para manejar el estado global de la aplicacion vamos a tomar la decicion de utilizar useReducer esto puede variar segun las necesidades del proyecto y lo que querramos hacer , pero en este caso lo utilizamos por que nos permite disparar acciones y manejar el estado de manera mas controlada.