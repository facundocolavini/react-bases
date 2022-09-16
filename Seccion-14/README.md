# Sinple Page Application

Vamos a realizar un single page aplication

Donde vamos a tener autenticacion.Vamos a manejar Rutas y aplicar estilos distintos para los componentes.
Vamos explotar el Router al maximo y nos vamos a enfocar en la busqueda.Vamos a usar query params para filtrar el arreglo de super heroes.
Tambien vamos a poder realizar pruebas sobre el router.

Temas de la Seccion:

- SPA ( Single Page Application ) a profundidad
- Diferentes temas en la misma aplicación aplicados a diferentes rutas
- Multiples Routers
- Push y Replace en el History
- Leer argumentos por URL
- QueryParams
- Aplicar filtros utilizando QueryStrings

<hr>

## Objectivo de esta seccion

En esta sección aún no haremos protección de rutas, pero dejaremos el estilo de esos componentes listos para la siguiente sección.

Aquí quiero enfocarme en la funcionalidad de la aplicación suponiendo que estamos autenticados.

<br>
<hr>

## Instalacion

Vamos a utilizar Vite y Yarn

yarn create vite

## Manejo de las interface

### Hay 2 tipos de interface en una app:

- Las interface de logica de negocio
- Las interface de estados

Para crear solo definiciones utilizamos el archivo types.d.ts donde iran todas las interface y types.(FUNCIONES NO )
Esto nos permite tener definiciones y no permite funciones.
