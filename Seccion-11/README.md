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

Es un high order component son componentes que residen componentes dentro de otros.Internamente tiene otros componentes dentro.Nos permite que todos sus hijos que se encuentre dentro de ese componente van a tener cierto acceso a la informacion que provee el padre.

```js
    <BrowserRouter>
     <MainApp />
    </BrowserRouter>
```

## Crear navegacion entre pantallas

Las rutas se definen en el punto mas alto de nuestra aplicacion , en este caso en mi componente MainApp.

**Route:** Se define una ruta nueva con Routes  , viene de react-router-dom.
**Route:** Recibe un arreglo de children que son arreglos de rutas y es un high order component.Las rutas se cierran automaticamente a no ser que sean rutas hijas.
**path:**  Es a donde va a puntar mi ruta  si mi ruta es /about no hace falta el /.
**element:** El componente que va a renderizar al ir a la ruta que definimos en el path
**Navigate:** Es un componente que apenas se renderize y termine de implementar y el contexto de nuestros componente se normalizen y esten redibujados,entocnes va a hacer la navegacion al componente o al path que especifiquemos.Basicamente nos mueve de una ruta a otra.
 
```js
    // el "/" es igual a localhost:3000
    <Routes>
      <Route  path="/" element={<HomePage/>} />
    </Routes> 
```
El orden en que declaramos nuestras Route si importan , pero si utilizamos path absolutos entonces no importa por que no va a hacer match con otras rutas.


## Rutas no encontradas 
Podemos crear rutas para el caso de que no exista la ruta a la cual se dirigio el usuario o no se encontro el recurso.
  
   - Wild Card (Comodin): Si escribimos cualquier ruta que no exista va a redirigir al login page.

```js
   <Routes>
      <Route  path="/*" element={<LoginPage/>} />
    </Routes> 

```

- **Recomendado:** 

```js
    <Routes>
      <Route  path="/*" element={<Navigate to="about "/>} />
    </Routes> 
```

## Link para navegar a otras pantallas

Si necesitamos algun tipo de navegacion o un componente que nos permita navegar a otras pantallas que no se encuentren definidas en nuestro Router.

**NO RECOMENDADO:**
Utilizar la etiqueta <a></a> para renavegar:esta mal ya que realiza un refresh de toda mi aplicacion tanto librerias como componentes y tal vez solo queremos redibujar un componente o una parte. 

Entonces para evitar eso utilizamos el Link de react-router-dom ,los links no tienen un href tienen un to, en el cual lo que hace es cambiar el componente en nuestro router y no hace un refresh.

```js
    <Link to="/"> Home </Link>
    <Link to="/about">About</Link>
    <Link to="/login">Login</Link>
```


## NavLink

El NavLink en general nos permite  a nosotros poder obtener en el className si la clase o si  este enlace tiene ese path.
Es un link que esta conciente de que pagina se encuentra para aplicar las clase de css en cada uno de sus elementos.El navlink se encargar de la navegacion , cumple la misma tarea del Link pero nosotros le podemos especificar una clase en particular dependiendo en donde se encuentre.
Es un high order component

```js
<NavLink className={`nav-link `}>Home</NavLink>
```
Clase condicional 

```js
// Lo que va a devolver esto es isActive en true o en false dependiendo en la path que estemos
 <NavLink 
  className={
    (arg)=>{ //Obtiene las class css
      console.log(arg)
      return 'nav-link'
    }
  }
  to="/"
>Home
</NavLink>
```

## CreateContext  y ContextProvider
Es un high order component pero en lugar de crearlo de la misma manera que los demas , le decimos a react que cuando lo cree que va a ser un componente especializado del tipo context.

**Context:** Un contexto es toda la estructura de componentes de nuestra aplicacion. Es un lugar centralizado para compartir la informacion.
**Provider:** Indica que nos proveen algo.

Si necesitamos compartir informacion entre paginas , cuando yo necesite informacion o algun componente necesite informacion del lugar centralizado (contexto) y deberia ir al context y tomar esa informacion.
Se puede tener varios contextos.

**Asi se crea un context:**

**createContext:** Podemos pasarle un defaultValue , podemos definirle el estado inicial que queremos que tenga.

createContext(valor) => Este es el valor que nosotros vamos a exponer a todos los componentes que quieran tomar informacion de este context.

**Crear context:** 

¿Para que creamos este UserContext? 

- Nos permite saber como luce la informacion que colocams en el context.
- Nos va a servir para que nuestro hook de react busque nuestro contexto.
- Y para definir nuestro Provider.

```ts
// Iniciamos el contexto
export const UserContext = React.createContext<UserContextType | null>(null);

```
**Creamos el provider del context:**

Es un functional componente es un componente como cualquier otro solo que tiene una caracteristica diferente , usualamente los high order component normalmente se diferencia por tener una properties children que este componente tiene.

**Context.Provider** Quiero proveer toda la informacion que nuestro contexto le va a proporcionar a nuestro arbol de componentes.
**value:** El value es lo que cualquier hijo va poder obtener de mi UserContext (contexto).Usualmente se regresa un objeto con toda la informacion en este caso de los usuarios.
```ts
    //Forma de usar nuestro contexto

export const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [users,setUsers] = React.useState<IUser[]>([
        { 
            name: 'Facundo', 
            lastname: 'Colavini'
        }
    ])

    return <UserContext.Provider value={{users}}>{children}</UserContext.Provider>;
}

```

**Consumir el contexto en mi componentes:**
Para poder utilizar mi context lo colocamos bien arriba en nuestro arbol de nuestro componentes.
Podemos colocarlo donde creamos que nuestros hijos necesiten esa data.

```js

export const MainApp: React.FC<MainApp> = () => {
  return (
  <UserProvider>
    <Navbar />
    <hr/>
    <Routes>
      <Route  path="/" element={<HomePage/>} />
      <Route  path="/about" element={<AboutPage/>} />
      <Route  path="/login" element={<LoginPage/>} />
      {/* <Route  path="/*" element={<LoginPage/>} /> */}
      <Route  path="/*" element={<Navigate to="about "/>} />
    </Routes>
  </UserProvider>
  )
}

```



## useContext

El useContext es un hook para poder tener acceso al  context que creamos.


**Uso en mis componentes de useContext:**

Si yo quiero acceder a los usuarios desde mi componente Login entonces utilizamos useContext.

Para que useContext apunte a nuestro contexto que querramos utilizar debemos enviarle por parametro el contexto que queremos usar.
useContext( userContext )


Si tuvieramos mas de un context , este useContext va a regresar el contexto que coincida con los que estamos pidiendo mas cercano.
Nunca va a buscar hacia abajo siempre hacia arriba.

Ej: 
<CartProvider> => Va a tomar este
 <Childre />
</CartProvider>

<UserProvider>
  <Childre />
</UserProvider>