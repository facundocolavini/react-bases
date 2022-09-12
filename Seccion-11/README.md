# Profundizando Hooks - useContext

La idea es centralizar la informacion en un lugar , para no tener que pasar la informacion de componente a componente por sus props (comunicacion entre componentes tradicional). Si el arbol de componentes crece en nuestra aplicacion es sumamente dificil mantener nuestra aplicacion y entender el flujo que tiene nuestra informacion y compunicacion entre componentes.

- Context

- Provider

- useContext

- React Router

- Links y NavLinks

- CreateContext

- SPA ( Single Page Application )

<hr>

## Objectivo de esta seccion:

<br>
El objetivo de la sección es principalmente aprender sobre el Context, el Router es un valor agregado que explotaremos mucho más en próximas secciones, pero al usar un Router, podemos explicar claramente el problema y necesidad del context.

<br>
<hr>
<br>

## Nuestra app con rutas

Vamos a intalar y utilizar react router 6

Documentacion: [React Router](https://reactrouter.com/en/main)

Browser: BrowserRouter por que estamos en el navegador web.

### BrowserRouter

Es un high order component son componentes que residen componentes dentro de otros.Internamente tiene otros componentes dentro.Nos permite que todos sus hijos que se encuentre dentro de ese componente van a tner cierto acceso a la informacion que provee el padre.
