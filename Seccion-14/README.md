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

## Instalacion y Herramientas

Vamos a utilizar Vite y Yarn

- yarn create vite
- bootstrap 5
- [react router dom 6](https://reactrouter.com/en/main) con yarn add react-router-dom@6

## Manejo de las interface

### Hay 2 tipos de interface en una app:

- Las interface de logica de negocio
- Las interface de estados

Para crear solo definiciones utilizamos el archivo types.d.ts donde iran todas las interface y types.(FUNCIONES NO )
Esto nos permite tener definiciones y no permite funciones.

En mi caso utilizare una carpeta models para poner todos mis modelos de logica de negocio y lo que son interface de estados quedaran en el componente.

### Estructura del proyecto y modulos (para proyectos Medianos/Grande)

Este tipo de estructura es muy parecida a la que se utiliza en Angular.

-- ASSETS: Lo manejamos como recursos estaticos.
-- UI: Sirve para tener accesos a los recursos en toda la aplicacion.Podemos usar componentes reutilizables que se utilizan en toda la app.Podemos meter carpetas o cosas que no sean parte de un modulo o que tenga que ver con alguna funcionalidad especifica del negocio.Es un modulo.

-- **HEROES**: Donde vamos a poner todo lo relacionado a los heroes, esto es un modulo.

- |-- **PAGES**: Pantallas que toman todo el espacio de la vision del cliente.
- |-- **HOOKS**: Hooks relacionados a mis heroes
- |-- **COMPONENTS**: Componentes que estan relacionados a mis herores.
- |-- **HELPERS**: Helpers que estan relacionados a mis herores.

-- **AUTH**: Donde vamos a poner todo lo relacionado a la autenticación, esto es un modulo.

- |-- **PAGES**: Pantallas que toman todo el espacio de la vision del cliente.
- |-- **HOOKS**: Hooks relacionados a mi modulo auth.
- |-- **COMPONENTS**: Componentes que estan relacionados a mi modulo auth.
- |-- **HELPERS**: Helpers que estan relacionadosa mi modulo auth.

  **router de modulos**: Donde vamos a gestionar las rutas especificas de toda nuestra aplicacion.

- **routes**: Routes es la carpeta donde vamos a manejar todas las rutas especificas de una cierta parte de mi aplicacion.Se gestion por modulos.

## Router

Esta aplicacion tiene varios router

Ocupamos uno para las rutas publicas
Ocupamos otro para las rutas privadas.

### Configuracion de mis rutas

Las rutas las definimos en un nuevo directorio que se llama router.
Al tenerlo asi sabemos que esa carpeta contiene la rutas de la aplicacion o tambien crear sub routers dentro de mis modulos ej: todas las rutas que pueden tener mis herores.

### Router privado

Vamos a crear nuevas routes para gestionar las rutas de nuestros features modules "heroe, auth, etc" ya que podemos tener un mejor control si separamos nuestros router por modulos.
Vamos a realizar un nuevo modulo para el login , ya que si no estamos logeados no queremos mostrar MARVEL y DC.Y gestionar lo que queremos mostrar en nuestro navbar y poder especificar que mostrar y que no.

Podemos decir al definir un route con el path = '/\*' que cualquier ruta que no sea (en este caso) login pase por este nuevo componente.

```js
<Routes>
  <Route path="login" element={<LoginPage />}></Route>
  <Route path="/*" element={<HeroesRoutes />}></Route>
</Routes>
```

### useNavigate

```js
const navigate = useNavigate();
```

useNavigate es un custom hook que realizo la gente de react-router-dom para manejar la navegacion.Funciona con el navigation providaer que contiene todas las funciones que teniamos en react router dom 5, Location, replace etc.

**to:** El to seria la ruta a la cual queremos navegar.Y podemos mandar un objeto que tiene unas propiedades como el replace y el state.

```js
navigate('/login');
```

**replace:**Remplaza la ruta en donde me encuentro. El replace evita que la persona pueda regresar al historial de rutas anterior de nuestra aplicacion ya que lo estamos remplazando.

```js
navigate('/login', {
  replace: true,
});
```

**options:**Es un objeto con opciones

### Leer argumentos por URL

Se utiliza un hook para poder tomar argumentos desde mi url

```js
params = useParams();
const { id } = useParams();
```

### Animaciones

[Animate css](https://animate.style/) nos va a ayudar a tener animaciones en nuestra app.
