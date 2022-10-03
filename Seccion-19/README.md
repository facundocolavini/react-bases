# Introduccion a Redux y autenticacion en Firebase

Temas puntuales de la seccion

Vamos a enfocarnos en implementar el patron redux en nuestro journalApp nos vamos a enfocar en la autenticacion utilizando redux y la api de Firebase.
Firebase nos ofrece google sigin que es funcionalidad para poder registrarse con google o facebook etc.
Tambien vamos a trabajar con firestore para almacenar a nuestros usuarios registrados y algunos alineamientos para autenticacion y saber cuando estamos autenticados o cuando cambia.

Temas puntuales de la seccion

- Redux aplicado en nuestro proyecto
- Firebase
- FireStore
- Redux Devtools
- Thunk
- Formularios
- Google SingIn
- Acciones Asíncronas
- Mantener el estado de la autenticación

En esta seccion configuraremos Redux en nuestro proyecto aplicando al inicio la parte de autenticacion y mantiendo el estado de la misma a lo largo de toda la aplicación.

<hr>

Installaciones

React redux y toolkit

```
yarn add @reduxjs/toolkit react-redux

```

Firebase

```
 yarn add firebase
```

Si no definimos un store vamos a tener un error en la consola. El argumento combineReducer esta llamandose dentro del configureStore pero este combineReducer se utiliza cuando no utilizamos redux toolkit.

## Configurar slices.
