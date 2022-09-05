# Gif expert app

Giphy

Esta es una aplicación pequeña pero muy ilustrativa que explica cómo utilizar React + customHooks para poder resolver necesidades en específico que podremos re-utilizar después.

## Arbol de componentes

Esta aplicacion esta dividida en 3 partes:

- GiftExpertApp (Padre de toda mi app)
- AddCategory
- GifGrid
- GifItem

  ### AddCategory

  - Contiene un formulario y un input para poder añadir categorias

  ### GifGrid

  - Este componente se encarga unicamente de mostrar una categoria
  - Dentro tendra una lista
  - Este componente contendra otro componente que sea el que mueste el item. (GifItem)

  ### GifItem

  - Muestra cada Item (Gif)

  ## Estados

  Los estados de react son posicionales por lo que no se debe poner condiciones dentro de un state.
  Ya que react perderia la relacion y la referencia a que state esta trabajando.

```js
//No se recomienda esto por que react pierde la referencia a los estados que maneja.
if (true) {
  const [categories, setCategories] = useState(['One punch', 'Dragon Ball']);
}
```

## Cosas a tomar en cuenta al cambiar el estado:

Si queremos añadir un elemento nuevo a un array **EVITAR EL METODO PUSH**, ya que esto hace mutar al array y react trata de evitar a eso.

Hay varias formas de insertar un nuevo elemento a un array con un estado de react:

```js
//Copia e insercion  del nuevo elemento
setCategories([...categories, newCategorie]);

// Otra forma es usando el callback que podemos mandarle a la funcion useState
setCategories((categories) => [...categories, newCategorie]);
```

## Trabajando con inputs:

Cuando trabajamos con un input podemos enviarle en sus atributos su value.
Este input puede ser del tipo onChange donde va cambiar el valor por lo que le escribamos dentro.Tambien puede ser de tipo readOnly que es de tipo
solo lectura y no se puede modificar.

```html
<input
  type="text"
  value="{inputValue}"
  onChange="{onHandleChange}"
  placeholder="Buscar gifs"
/>
```

## Escuchar eventos enviando una funcion:

onClick={myFuncion} // por referencia

//Con funcion anonima
onClick = {(e)=>{myFunction(e)}} // De esta forma podemos pasarle parametros a mi funcion en este caso un evento

// Tambien podemos hacer la siguiente forma
Es destructurando el event entonces obviamos de mandarle el argumento a la funcion.
Podemos mandar la referencia a esa funcion-

```javascript
const onHandleChange = ({
  target,
}: React.ChangeEvent<HTMLInputElement>): void => {};
```

```html
<input
  type="text"
  value="{inputValue}"
  onChange="{{onHandleChange}}"
  placeholder="Buscar gifs"
/>
```

## Evitar el Two-ways data binding

Respetamos la practica de react que todos los cambios sucedan en una sola via , el two-ways databinding.

## Comunicaciones entre componentes

### Envio de funciones por props:

Cuando deseamos enviar un dato de un componente a otro utilizamos las props para comunicarlos.
Entendiendo desde base que la comunicacione en react es bidireccional podemos enviar variables y funciones como props.Salvo objetos.

En este ejemplo comunicamos de un componente padre a un hijo enviandole por props una funcion.

<br>

### Comunicacion con setState para modificar la informacion de hijo a padre

<br>

```js
// De esta forma utilizamos en vez de una funcion el mismo setState del estado del padre que enviamos como prop (setCategories).
<AddCategory setCategories={setCategories} />;

// Definimos el types para las props que va a recibir nuestro componente hijo
type Props = {
  setCategories: Dispatch<SetStateAction<string[]>>,
};

//tambien se puede hacer asi con el callback de useState

const submitForm = (e: React.FormEvent) => {
  e.preventDefault();
  setCategories((categories) => [inputValue, ...categories]);
};
```

<br>

**Nota Importante:** Esta forma de comunicacion entre componentes es de hijo a padre es un poco mas dificil de leer por lo que se recomienda enviar (en vez de la funcion setCategories del estado del padre) la funcion onAddCategory del padre a su hijo por props. Esto lo hace un poco mas entendible a la hora de leer el codigo.La razon de por que es dificil de leer es por que oculta la implementacion y hace mas dificil de entender la funcionalidad de nuestro componente.
<br>
<br>

### Emitiendo un evento al padre:

- Podemos mejorar la implementacion que tenemos en AddCategory para que haga solamente una cosa y es enviarme el valor a insertar a mi componente padre y el padre que lo pueda insertar.
- Cuando ponemos la palabra on ya sea en el nombre de una funcion o de una varaible o de una prop es por que esta emitiendo algo y es un patron que es muy comun en los eventos (no es obligatorio).

```js
  // En esta forma estamos enviando la referencia a la funcion por props.

  // Componente Padre

  const [categories, setCategories] = useState<string[]>(['One punch','Dragon Ball'])

  const onAddCategory = (newCategory:string):void => {
    setCategories([newCategory, ...categories])
  }

    //Enviamos una funcion  como prop  a nuestro componente hijo
  <AddCategory onNewCategory={ onAddCategory }/>

```

```js
// Componente hijo

// Definimos las props que va recibir nuestro componente hijo  en este caso la funcion que enviamos por prop desde el padre
//Recibe esa funcion en sus propsTypes
type Props = {
  onNewCategory: (newCategory: string) => void,
};

//Mandamos a ejecutar nuestra funcion que enviamos por prop y esta ejecuta la funcion del padre addCategorie.
// Nuestro componente hijo debe saber que es una funcion setState que viene del padre
const submitForm = (e: React.FormEvent) => {
  e.preventDefault();
  console.log(inputValue);
  onNewCategory(inputValue);
};
```

**Nota:** En react 18 ya no se realizan 2 renderizaciones por cada setState.No dispara la rerenderizacion de componente hasta que la funcion principal o hilo principal termine.

## Validar elementos repetidos en un array

```JSX
  if (categories.includes(newCategorie)) return;

  //Se puede utilizar con find tambien.

```

<br>

### No utilizar index para nuestras key:

React recomienda a la hora de iterar un array , no utilizar el indice para asignarselo como key a mi elemento.
Utilizar un identificador unico.
Por que no hay que usar el indice, por que react utiliza ese valor de la llave para saber cuando un elemento se elimino por ejemplo en un array [1,2,3] si eliminamos el elemento de la posicion 0 del array siempre va a existir la posicion 0 en nuestro array, por lo cual react podria confundirse y eliminar visualmente del array algo que no esperabamos.

```JSX

  {categories?
    .map((c, index) => {
      return(
        <li key={index}>
          {c}
        </li>
      )
    })
  }
```

<br>

## Fetch Api

Cuando hacemos una llamada a una api creamos una funcion para obtener los datos.Es de buena practica poner la funcion por fuera de nuestro componente funcional ya que no va a estar procesando
esta funcion.
**Importante:** Nunca colocar funciones directamente en un functional component ya que va a volver a ejecutar esa funcion cuando se vuelva a renderizar el componente.

```js
/* MAL!!!! */
export const GifGrid = ({ category }: Props): JSX.Element => {
  const getGifs = async (category: string): Promise<object | string> => {
    /* LA FUNCION NUNCA DEBE IR ADENTRO DE NUESTRO FUNCTIONAL COMPONENT */

    const url: string = `https://api.giphy.com/v1/gifs/search?api_key=UVWfkj9YKrlJA4MLHjqqL2Xt4u6NQQuD&q=${category}&limit=20`;
    const resp: Response = await fetch(url);
    const { data = [] } = await resp.json();

    // Esta funcion recorre el array de gif armando un objeto con las propiedades que me interesan'
    const gifs = data.map((img: any) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    console.log(gifs, 'aaa');
    return gifs;
  };
  getGifs(category);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
```

Para solucionar esto debemos separa la funcion getGifs en un modulo aparte e importarla en nuestro componente.

<br>

### Modo estricto de react

El modo estricto de react nos ayuda, principalmente a identificar problemas que tengan que ver con el lifecycle en componentes, warnings, codigos viejo,context api, etc.Y nos ayude a que todo funcione como espermos.
Solo se aplica en desarrollo

### Ciclo infinito en mi componente

Cuando cambiamos el estado de un componente ,no se debe cambiar el estaado en el proceso de construccion del componente.Esto hara que se renderize infinitamente el componente y nos muestre un error por consola donde nos dice que el componente alcanzo el limite maximo mediante este ciclo.

Ej:

```js
export const GifGrid = ({ category }: Props): JSX.Element => {
  const [counter, setCounter] = useState(10);
  getGifs(category);
  setCounter(conter + 1); // ERROR !!! Ciclo infinito

  return (
    <>
      <h3>{category}</h3>
      <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </>
  );
};
```

Para resolver esto utilizaremos el hook useEffect

<br>
<br>

## useEffect

El useEffect es un hook que sirve para disparar efectos secundarios.Que se entiende com un proceso secundario, nos referimos a algun proceso que quisiéramos ejecutar cuando algo suceda.
Cuando surgen los disparos de effectos:

- Cuando queremos renderizar el componente la primera vez
- Cuando un estado cambie
- Cuando una propiedad del componente cambie

React cuando detecta un cambio en nuestro componente lo vuelve a ejecutar para redibujar.A que se refiere a que explicitamente esta volviendo a ejecutar todo el componente.
Pero hay ciertas funciones especiales que pueden sobrevivir y mantener el estado o ciertas funciones que le podemos decir a react para que se ejecute solo una vez.

Sintaxis

- Un callback que es una funcion que dentro de ese callback insertamos las funciones que queremos ejecutar.
- Las dependencias son las condiciones por las cuales ustedes quieren volver a ejecutar este callback.

```js
  useEffect(()=>{

    // Funciones a ejecutar

  return () => {
    //Cleanup
  }
  },[/* Dependencias */]): void
```

Cuando nosotros dejamos el array de dependencias vacio significa que solo se va a disparar la primera vez que se crea y se construye el componente.

<br>

## Funcion return para realizar cleanup

El useEffect tiene una funcion de retorno, esta funcion de retorno se utiliza para hacer la limpieza en el caso de que el useEffect tenga alguna funcion que este pendiente de los cambios o tenga un observable.

Por que el componente se dispara 2 veces:
Por que esto lo hace react para asegurarse de que mi componente funcione de la manera que yo esto esperando y respetando las practicas de react.Todo gracias al modo estricto que tiene react que envuelve a nuestra app.Esto no lo vamos a ver en produccion.

<br>

## Realizar una produccion Rápida del proyecto

Para poner el proyecto en produccion debemos:

- Ejecutar el comando

```bash
  npm run build
```

Esto va a crear una carpeta dist con el proyecto preparado con el bundle final.Donde nos va a decir el peso de cada archivo de la aplicación.

Dist es la carpeta de produccion optimizada esa carpeta se puede desplegar en un hoisting.

Podemos usar una libreria de node para poder desplegarlo en un servidor http server.

```bash

  npm i --global http-server

```

- Luego hacemos cd dist
- Ejecutamos http-server -o en la terminal.

## Problemas al usar funciones async dentro del useEffect

Cuando trabajamos con un useEffect y le ponemos a nuestra funcion de callback un async le estamos diciendo implicitamente una promesa y eso es algo que el hook useEffect no le gusta y es una mala practica.
El useEffect tiene que regresar una funcion por lo tanto **no se puede utilizar una funcion async dentro del useEffect**

Aun asi hay varias tecnicas para poder devolver los resultados de mi funciones dentro del useEffect.

Una es utilizando el then:

```js
useEffect(() => {
  getGifs(category).then((newImage) => setImages(newImage));
}, []);
```

Podemos crear otra funcion:

```js
const getImages = async () => {
  const newImages = await getGifs(category);
  setImages(newImages);
};

useEffect(() => {
  getGifs(category);
}, []);
```

## Custom Hook

Un custom hook es un hook que creamos desde 0 , no es mas que una funcion que retorna valores. La idea es poder reutilizar codigo que tiene una funcionalizad especifica que en nuestra app se duplica constantemente. Los custom hook vendrian a resolver la duplicidad de codigo.
Y evitamos llenar nestro componente de logica que no es necesaria , un componente se encarga de una funcionalidad.

- Se utilizan asi en nuestros componentes:

```js
const { images, isLoading } = useFetchGifs(category); // Hook que busca gif basado en una categoria
```

Si nuestro custom hook no devuelve jsx dejar como extension ts.
El hook dispara la renderizacion del componente cuando ve un cambio en el state.

Para resumir un hook modulariza la logica extrayendolo del componente y que quede mas limpio.
Con react 18 ya no renderiza 2 veces al tener 2 state en una funcion.

### Mostrar un componente condicionalmente

Hay varias formas de mostrar un componente dependiendo de una condicion.

#### Por su className

```js
<h2 className={isLoading ? 'loading' : ''}>Cargando</h2>
```

#### Con ternario

- El null no se renderiza en react.

```js
{
  isLoading ? <h2> Cargando...</h2> : null;
}

// Con un and Logico
{
  isLoading && <h2> Cargando...</h2>;
}
```

#### Crear un componente

- Y este componente dentor hace la logica para mostrarse de manera condicional

```js
<LoadingMessage isLoading={isLoading} />
```

## Evitar muchas importanciones en nuestros componentes (Archivo barril)

La idea es que nosotros tengamos centraizadas las exportacioned de nuestros componentes o directorios en un solo lugar.
Cuando tengamos muchos custom hooks vamos a querer trabajar como trabaja React que llama todo de un solo lugar cuando quiero utilizarlo.

**ASI QUEREMOS TRABAJAR NUESTRAS IMPORTACION DE ARCHIVOS:**

```js
import { useEffect, useState } from ' react ';
```

**Y EVITAR ESTO:**

```js
import { useEffect } from ' react ';
import { useState } from ' react ';
import { useLayout } from ' react ';
import { useContext } from ' react ';
import { useContext } from ' react ';
```

Para hacer esto debemos crear un archivo nuevo en la carpeta donde queremos agruparlos , creamos este archivo que se le dice "archivo de barril" o index.ts.El index es cuando hagamos una referencia a la carpeta de componente esto va a buscar por defecto el index.

Dentro del index hacemos lo siguiente:

```js
export * from './AddCategory';
export * from './GifGrid';
export * from './GifItem';
```

Utilizandolo asi en nuestro archivo GifExpertApp

- No hace falta ponerle el /index.ts

```js
import { AddCategory, GifGrid } from './components';
```
