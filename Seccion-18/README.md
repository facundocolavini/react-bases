# Redux conceptos y react con Redux

Temas puntuales de la seccion

Redux es un pantron una forma de trabajar.Vamos a ver Redux y sus conceptos y como trabajarlo.
Veremos las bases de Redux y sus conceptos para poderlo integrar en nuestra aplicacion.
Veremos que es el Store , Reducer, Actions, Dispatch de acciones asyncronas y como se integrara todo.

Temas puntuales de la seccion

- Redux
- Store
- Middlewares
- Dispatch
- Actions
- State
- Acciones asíncronas
- RTK Query
- Redux Toolkit
- Slices

<hr>

## Patron de redux

- ¿Que es Redux y para que sirve y que problemas resuelve ?

  Es un contenedor predecible del estado de nuestra aplicación.
  Esto quiere decir que es una forma de controlar donde se encuentra la informacion de mi aplicacion en todo momento.
  Tambien ayuda que la modificacion de la informacion siempre sea de una sola via de forma predecible con el objetivo de prevenir cambios accidentales en la misma.

- Redux se puede utilizar en cualquier libreria o framework que se necesite.

### Store

El store en Redux se conoce por su nombre "la fuente de la verdad".  
Ahi es donde se encuentra la informacion que nuestros componentes van a consumir. Se podria ver como el siguiente ejemplo cuando vamos a un supermercado donde vamos a ir a comprar lo que necesitamos para despues llevarlo a nuestras casas consumirlos.

Es exactamente el mismo concepto nuestros componentes van a ir al store para servirse la informacion que necesiten trabajar.

Vamos al store cuando necesitamos informacion.

- ¿Como se utilizar el store en redux?

  **Reducer:** Es una funcion pura que maneja un estado de nuestra aplicaccion.

  En este caso vamos a ver estos conceptos imaginando una lista de TODOS.Donde tenemos una lista de compras.

## Flujo de Trabajo del Reducer

Tenemos un state inicial donde tendremos un todo que es comprar pan.

El State le va a servir la informacion a nuestra vista para que muestre la informacion deseada

La vista solo lee el state no puede modificarlo.Cuando se necesita hacer una modificacion en la vista.La pagina o vista va a generar una accion en este caso agregar un nuevo todo.
Esa accion va a ser enviada al reducer y el reducer va a saber que hacer ya sea AGREGAR , ELIMINAR o Actualizar. Despues de que se ejecute esa accion en el reducer se generara un nuevo state que se lo notifica a la vista.

## Flujo de Trabajo en Redux (sincrono)

Siempre vamos a tener un state que va a ser proveeido por un store.
Tenemos nuestra vista la cual solicita la informacion a mi store.
Al momento de disparar alguna modificacion o hacer alguna alguna accion.
Nuevamente se crea un accion , ese accion no va a ser enviado directamente al store sino que pasa por un dispatch.

El **Dispatcher** recibe las acciones y va a abrirla para anaizarla para luego mandarla al "reducer especial".

Ese "reducer especial" es una combinacion de todos los reducers que
contiene mi aplicacion.SeEse reducer contiene reducer mas pequeños.
Es decir voy a tener un reducer que maneja una autenticacion otro para manejar los TODOS etc.

Ese reducer contiene un monton de reducer pequeños en el cual el dispatch va a mandar tal accion al reducer especifico que haga esa tarea que se necesita.

Ese reducer ejecuta dicha accion y genera un nuevo state y ese state es el que notificara a la vista.

Este seria el proceso sincrono que maneja redux, aca no ocupamos tareas http ni tareas asincronas, es para un procesos que se ejecutan de manera instantanea.

![image](https://user-images.githubusercontent.com/54385792/193031973-3d16f78a-08b4-424b-9241-c3bf82e92bcc.png)

NEW VIEW ACTION --> ACTION --> DISPATCHER --> REDUCER --> NEW STATE --> VIEW WITH NEW STATE

## Flujo de Trabajo en Redux (Asincrono)

En el momento de que la vista necesite realizar un proceso asincrono como una auntenticacion en mi login. Entonces eso no es algo que de manera instantane sepamos que hacer, tenemos que esperar la informacion de la autenticacion.

Entonces si disparamos esa accion , va a caer nuevamente en el dispatch y el dispatch va a saber que lo que necesitamos es resolver una accion asyncrona por lo que va a implementar un middleware.

Podemos tener varios **Middleware** , este middleware va a recibir esa tarea asyncrona va a ejecutar la accion (va a llamar a la api, va a esperar la respuesta) cuando tenga la respuesta ese API, se lo va a notificar a nuestro middleware.El middleware esta dentro del **Dispatcher** por lo cual cuando se recibe la informacion se lo va a mandar ya todo el procedimiento resultado de la misma se lo va a mandar a nuestro reducer principal enviandole el usuario autenticado con la accion al reducer que se encarge de modificar el state y regresar un state nuevo.

![image](https://user-images.githubusercontent.com/54385792/193031307-d5651184-b77a-4109-bf81-cd7144c66318.png)

CREATE NEW VIEW ACTION --> ACTION --> DISPATCHER --> MIDDLEWARES --> REDUCERS --> NEW STATE --> VIEW WITH NEW STATE

Cuando nuestros componente necesiten informacion va a ir al store a verlo.

<br>
<hr>
<br>

## Redux , React Redux y RTK Query

No hay que confundir Redux con React Redux y Redux toolkit

**Redux** como tal es el patron en el cual se basa en crear nuevos estados basados en reducers, los reducers crean nuevos estados y esos nuevos estados son productos de las acciones que son recibidas en los reducers.

**React Redux** es la forma tradicional de trabajar con redux en aplicacciones con react.

**Ventajas:**

- Diferentes formas de manejar el state.
- Diferentes acciones.
- Diferentes maneras de manejar el store

**Desventajas:**

- Hay mucho codigo que debemos escribir si queremos que funcione algo ej: si trabajamos con tareas asincronas hay que crear varias cosas para que funcione.

**Redux Toolki** es una serie de herramientas que nos va a ayudar a nosotros que al implementar el patron de redux en nuestras aplicaciones de react sea bastante sencillo.

**Ventajas**

- Ya no hacemos funciones de combinar Reducers
- El toolkit crea todo por nosotros
- RTK Article query.

**RTK Query** no tiene nada que ver con redux pero sigue la misma logica.Y darle seguimiento a peticiones http.
Conceptos similares como React query o swr chequear su documentacion para entender un poco mas de estos conceptos.

**Ventajas:**

- Mas facil de escribir
- Maneja el cache
- Manejo de peticiones http
- Imipide que se dupliquen las peticiones para la misma data
- Manejo del tiempo de vida del cache como usuario para interactuar con la UI.

## Trabajamos con Redux toolkit

Instalamos Redux Toolkit en nuestro proyecto de vite:

```bash

 yarn add @reduxjs/toolkit react-redux

```

### ConfigureStore y Slice

Configuramos nuestro store en nuestra app. Donde vamos a alojar ciertos pedazos de informacion. No toda la informacion va a ir en nuestro store.
Con la practica vamos a ir viendo que informacion se debe mantener de forma local o debe estar en el store.

Estructura de carpeta para mis store:
Vamos a crear una carpeta que se llama store en la raiz de mi aplicacion. Donde vamos a crear nuestro store.

### configureStore

Proveemos nuestro store a toda nuestra app con el Provider en el root de la aplicacion.

### Slice

El slice es una funcion que recibe un objeto ese objeto tiene el nombre , el estado inicial y los reducers.
Creamos un reducer en mi store para eso utilizamos el slice para crear una serie de reducer donde podemos definirle un initial state y nos permite definir el nombre de accion para donde van a salir disparadas.
Para eso creamos una carpeta dentro de mi store llamada slice.

La funcion createSlice nos devuelve las action que dentro contienen su respectivo payload y su nombre de action.

**Importante:**Redux toolkit no permite codigo de tipo mutante (que mute el state) , pero el se va a encargar de hacer la generarcion de un nuevo state gracias a un paquete que viene instalada por defecto llamada "Immer".

Para finalizar y poder tener todo el flujo de redux toolkit ponemos nuestro reducer en nuestro store.

### Utilizar valores del store y despachar acciones

2 Hooks que nos ayuda a interactuar con nuestro store.
**useSelector** se utiliza para poder llamar y utilizar algo de mi store y para seleccionar el typado correcto de mi state.Se utiliza cuando tomamos una pieza del state.
El useSelector tiene un callback que su primer argumento es el state y luego el return que regreso lo que me interesa.Y al utilizarlo en mi componente lo desestructuro para poder obtener el valor de mi state.

```ts
const { counter }: CounterState = useSelector(
	(state: RootState) => state.counter
);
```

**useDispatch** lo utilizamos para despachar acciones. Esta funcion ya esta memorizada para poder utilizarla con efectos de react.

### Snippets createSlices

Este es un boilerplate de un slice

```json
{
	"Create Slice of Redux": {
		"prefix": "redux-slice",
		"body": [
			"import { createSlice, PayloadAction } from '@reduxjs/toolkit'",
			"",
			"export interface ${1:nameState} {",
			"  ${2:name}: ${3:any}",
			"}",
			"",
			"const ${4:initialState}: ${5:nameState} = {",
			"  ${6:name}: ${7:0}",
			"}",
			"",
			"export const ${8:template}Slice = createSlice({",
			"  name: '${9:name}',",
			"  ${10:initialState},",
			"  reducers: {",
			"   ${11:increment}: (${12:state}) => {",
			"    ${13:state.name += 1}",
			"   },",
			"  },",
			"})",
			"",
			"// Action creators are generated for each case reducer function",
			"export const { ${14:increment} } = ${15:template}Slice.actions"
		],
		"description": "Create Slice of Redux"
	}
}
```

### Thunks

[THUNKS DOC](https://redux.js.org/usage/writing-logic-thunks#why-use-thunks)

Los thunks son acciones o pueden ser funciones que despachan otra accion.Puede que tengamos algunas acciones asyncronas.
Es una funcion que va a ejecutar alguna tarea asyncrona y cuando termina ya sea exitosa o con algun error va a disparar una accion a nuestro reducer.

Thunks que despacha otra accion cuando resuelve una llamada o una tarea asyncrona:

```
export const getPokemons = ( page:number = 0 ) =>{
    return async(dispatch: Dispatch, getState: RootState) => {
        dispatch(startLoadingPokemons());
        // TODO Realizar peticion http

    }
}

```

Asi disparamos y utilizamos el dispatch para poder disparar mis acciones a mi reducer.

```
    //Dispatch para disparar cualquier accion y esta memorizada
    const dispatch= useDispatch()

    useEffect(() => {
        // Disparamos mi accion  asyncrona
      dispatch()
    }, [])

```

### Axios

Vamos a utilizar al libreria axios para realizar peticiones http a nuestra API . Tiene una sintaxis mas facil de leer a la hora de implementar un servicio.

```bash

  yarn add axios

```

Configuramos las intancias de axios en mi carpeta Api ya al utilizar axios podemos evitar la deserealizacion de la respuesta cuando utilizamos fetch api (resp.json()).
axios.create : Permite crear una configurcion estandar que me ayuda a no repetir codigo , muy util cuando necesitamos mandar un tokens de autenticación en cada una de las peticiones.

### RTK Query

El article quuery es algo que se añade en redux toolkit como algo extra. No hasy que malinterpretarlo no es algo interno de redux sino que es algo qeu se integra a redux.
Sirve para hacer petitciones y llamados a endpoint tanto para grapqhl o axios (no es un replazamo de axios ni fetch api).
Evita hacer posteos o traer informacion duplicada si ya se encuentra almacenada en cache esa peticion.
Es facil obtener la data en caso de que queremos hacer un isloading o un error.
Maneja el cache y crea custom hooks para el manejo de peticiones.

El article query sirve para controlar las peticiones http, traemos la data disparamos la accion para establecer la data . Asi se utiliza.

```ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Cuando creamos un createApi  nos creara customs Hooks
// En ester caso nos va a crear un useGetTodosQuery
// Le pone automaticamente un nombre como Query por que es un GET en este caso y si no lo fuera esa peticion le pone mutations para el caso de POST , PUT y DELETE
export const todosApi = createApi({
	// Nombre del reducer
	reducerPath: 'todos',
	baseQuery: fetchBaseQuery({
		// Es una funcion donde se define la url base de mi api
		baseUrl: 'https://jsonplaceholder.typicode.com',
	}),
	// Son las diferentes funciones que vamos a llamar para traer la informacion
	endpoints: (builder: any) => ({
		getTodos: builder.query({
			// Mutations: sirve para hacer posteos
			query: () => '/todos', // le concatena a mi baseUrl el /todos
		}),
	}),
});

export const { useGetTodosQuery } = todosApi; // Esto es muy similar a los actions que nos da el createSlice
```

**createApi** Siver para realizar implementaciones http y realizar peticiones a un API , nos brinda hooks personalizados y propiedades para asignarle nuestros endpoitns.
**reducerPath** Sera el nombre de nuestro reducer a donde apuntamos.
**baseQuery** recibe una funcion fetchBaseQuery donde se le setea por parametro la url base.
**endpoitns** Son las diferentes funciones que vamos a llamar para traer la informacion de los distintos endpoints que tengamos.
**Custom hooks:**Es el que me va a tener toda la informacion necesaria para saber cuando tenemos errores, cuando cargamos las cosas.Los hooks que nos brinda son los useNombreQuery para realizar peticiones GET y para realizar PUT, DELETE Y POST nos asigna el hook mutation

**Snippets customizable para crear un createApi con RTK query**

```json

// Crear mi  snippets createApi de  rtk query


```

<br>

**Consumir el Api mediante el custom hook**

Debemos configurar el store para que podamos utilizar y habilitar el uso de los customs hooks que nos da RTK query y poder utilizarlos en mis componentes.Ya que quiere seguir el mismo patron que redux.
Y ademas debemos configurar los middlewares.Un middleware es una funcion que se ejecuta antes que otra.Donde vamos a concatenar nuestro middleware, nosotros utilizamos el getDefatuLtMiddleware pero le estamos concatenando nuestra createApi de mi todoApi.
**Importante: getDefatuLtMiddleware esta obsoleto no importarlo**

´´´ts
export const store = configureStore({
reducer: {
counter: counterSlice.reducer,
pokemons: pokemonSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer,

},
//Middleware
middleware: (getDefaultMiddleware) => getDefaultMiddleware()
.concat(todosApi.middleware)
})

´´´
Si cualquier componente hace una peticion al mismo endpoint las peticiones almacenadas en cache duran un minuto.
No realiza peticiones repetidas si la peticion ya esta en el cache no vuelve hacerla.No consume datos inecesarios.
