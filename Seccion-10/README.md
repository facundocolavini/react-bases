# Profundizando el Hook useReducer

- useReducer

- Reducers

- Teoría de un reducer

- Aplicación de TODOs

- CRUD local

<hr>

## Objectivo de esta seccion:

<br>
Aprender como funciona el hook useReducer para saber cuando utilizarlo y cuando nos puede servir.

Saber en que casos es bueno utilizarlo y en cuales no.

Que necesidad me resuelve y realizar una app para comenzar a utilizarlo.

Al comprender bien comp funciona useReducer podremos entender de una mejor manera Redux y contextAPI.

<br>
<hr>
<br>

## Concepto de un reducer:

<br>

### ¿Que es un reducer?

<br>

- **Es un funcion comun y corriente:** No puede ser asyncrona

- **Debe de ser una funcion pura:** Todo lo que esa funcion realice debe resolverse de manera interna

- **Debe de retornar un nuevo estado:** Un ejemplo: cuando queremos incrementar un contador decimos "setCounter( counter + 1 )" de esta manera devolvemos un nuevo valor a mi contador y no estamos mutando el estado anterior.

- **Usualmente recibe 2 argumentos:**
  - El valor inicial (initialState)
  - La accion a ejecutar

<br>

## Es una funcion comun y corriente:

<br>

Literalmente el un reducer es una función común y corriente

```js
// Esto podria ser un reducer ** le faltarian los argumentos nada mas
const miFunction = () => {};

// Generalmente las funciones tiene nombres que tengan un sentido logico con lo que estamos realizando.
const todoReducer = () => {};
```

## Debe de ser una funcio pura:

Que quiere decir con que nuestra funcion no debe tener efectos secundarios?

1 - Mi funcion reducer debe de poder resolver todo lo que se pide internamente sin necesidad de llamar a otras funciones.

2 - Los reducer se deben de ejecutar de manera sincrona. No puede hacer tareas asincronicas.

3 - Debe de retornar un nuevo estado y no debemos de mutar nunca el estado.

4 - No debe de llamar a localStorage o sessionStorage internamente dentro de mi reducer. El local storage y session storage aunque sean tareas sincronas , pero esto rompe las reglas anteriores por que el llamado a estas funciones son considerados efectos secundarios. Y aunque son sincronos esas funciones pueden fallar  
y si fallan no regresamos un nuevo state sino un error.Y si regresamos cualquier cosa que no sea un nuevo estado nuestra la aplicacion va a fallar o se va a romper de manera extraña

No es comun que el session storage y local storage falle , pero puede ser que el dispositivo fisico ya este cerca de llenarse y no permita grabar la informacion en el storage haciendo que regrese un error.

5 - Para modificar el state no debe de requerirse mas que de una action esa action puede tener o no argumentos.

<br>

## Algunos Ejemplos de Reducer:

<br>

```js
const initialTodos = [{
    id : 1 ,
    todo : ' Comprar pan ' ,
    done : false
}] ;

// Reducer
const todoReducer = ( state = initialTodos , action ) = > { // No estamos usando una accion

    return state ; // Regresa el estado inicial [{id : 1 ,todo : ' Comprar pan ', done : false}]
}
```

**¿Para que hacemos todo esto ?**

La idea es tener controlado en un solo lugar todas las acciones que modifican mi state o el estado de la aplicacion. Y de esta forma podemos ver a nivel general todas las posibles modificaciones que nuestra aplicacion tiene o puede realizar

**Caso de uso**

Si tenemos una aplicacion que debemos mantener y que no realizamos. Al abrirla y ver que dispara acciones por todos lados.Es decir que una pantalla se modifiquen usuarios en otra que se editan etc. Y en la misma misma pantalla es donde se modifican los valores. De esa manera es dificl saber exactamente los lugares donde esa aplicacion hace modificaciones.
Pero si la aplicacion tiene reducers significa que ahi se encuentran las acciones de mi aplicaciones y si quiero saber que acciones son posibles solamente tengo que ir a ver esos reducer y ahi tendriamos la logica
de la manipulacion de cada una de las posibles acciones que esa aplicacion pueda realizar.

**Ciclo de vida de un reducer**
Al iniciar la aplicacion vamos a tener un estado inicial

Ej: State inicial.

El state tiene todos que en este caso es solo uno.

```js
const initialTodos = [
  {
    id: 1,
    todo: ' Comprar pan ',
    done: false,
  },
];
```

Luego El componente que se va mostrar en pantalla y el state va a pasar esos TODOS a la pagina o a la vista para que los muestre en pantalla.

Si el usuario quisiera agregar un nuevo TODO , **pero la pagina no habla directamente con el state ya que si fuera asi estariamos mutando el state, esa es una accion que no se debe hacer**.

En cambio la pagina o la vista va a crear una accion, esa accion va a hacer la de agregar un nuevo TODO.
Quiero agregar un nuevo elemento a esa lista entonces se crea la accion y esa accion es la que le vamos a mandar al REDUCER.
El reducer tiene todo el mapa de las acciones que puede realizar, es decir el Reducer es el quien tiene todo los planos y los procedimientos para agregar, para borrar y para actualizar. En este caso este reducer solo tiene estas 3 acciones, si le mandaramos una accion a este reducer que no puede realizar simplemente regresa el estado que tiene y ignora la accion.

El reducer tiene la logica para agregar un nuevo TODO a la lista , entonces ejecuta el procedimiento de Agregar que tiene dentro del reducer, y ese procedimiento de agregar va a modificar al state el cual al cambiar le va a notificar a la vista de que hay un nuevo TODO o si hay un error.

La idea es que la informacion fluya de una sola via y de manera controlada.Es muy similar a la bases con redux.

![image](https://user-images.githubusercontent.com/54385792/189381493-d02a7af5-ecd3-4e9d-9d37-b7aa8327b733.png)

<hr>

# Creamos un Reducer

Vamos a crear un reducer que administre una lista de tareas, donde se puedan agregar eliminar y actualizar.

<br>

## Caso de mutacion del estado de mi reducer

**Importante:** El reducer siempre va a tener que saber cual fue el estado anterior y vamos a tener una accion. Si estamos en el punto inicial posiblemente en redux tenemos algo que se llama initialState, el cual envia el estado inicial.Entonces si estamos en el punto inicial, la accion que se va a enviar es el estado inicial o se establece un estado inicial.
Si queremos eliminar o agregar algo o hacer un proceso, debemos mandar una accion a nuestro reducer.Esa accion es la que se encargar de regresar un nuevo estado en el cual el payload de la accion o dependiendo de la accion que sea va a regresar un nuevo estado.
Cuando tenemos una accion que no logramos identificar en el reducer, significa que no hubo un cambio en el estado y si no regresamos un cambio en el estado react no redibuja nada al no tener ningun cambio.

Al mutar el estado con push es una mala practica ya que react no nos va a redibujar nada y rompemos la estructura con que se maneja el reducer.

```js
// Los tipos del estado a usarse en el initialState
interface TodoState {
  id: number;
  todo: string;
  done: boolean;
}

// Estado inicial del Reducer
const initialState: TodoState[] = [
  {
    id: 1,
    todo: 'Recolectar la piedra de Alma',
    done: false,
  },
];
// El tipo de accion que se puede lanzar

type Action = {
  type: string,
};

const action: Action = {
  type: 'add-todo',
};

// Reducer
//Action: Es quien va a decirle al todoReducer como quiero que cambie el stado
//Siempre devuelve un nuevo stado
// Se utilizan los reducer cuando tenemos un objeto elaborado (initialState) y queremos manipular el estado
const todoReducer = (
  state: TodoState[] = initialState,
  action: Action = {}
) => {
  return state;
};

let todos = todoReducer(initialState, action); // Devuelve un array [{}]

// MUTACION DE ESTADO MAL!!!
todos.push({
  id: 2,
  todo: 'Recolectar la piedra del poder',
  done: false,
});

console.log(todos);
```

Si queremos hacer una modificacion a mi reducer debemos mandarle una accion y esa accion nos va a decir como modificarse.

```js
// Este newTodo se lo debemos mandar al reducer para que produzca un nuevo estado y ese nuevo estado deberia tener mis 2 todos
const newTodo = {
  id: 2,
  todo: 'Recolectar la piedra del poder',
  done: false,
};
```

Hay un standar para definir las actions :
El payload se conoce como la carga que esta en la accion.No siempre va a ir la propiedad payload dentro de mi action.
Ej: Si queremos borrar o resetear los todos no hace falta utilizar el payload.

```js
// Modificamos el reducer para que maneje la accion que estamos queriendo realizar
const todoReducer = (
  state: TodoState[] = initialState,
  action: Action = {}
): TodoState[] => {
  switch (action.type) {
    case 'add-todo': // Se que viene un payload en esta accion y no usar push
      return [...state, action.payload];
  }
  return state;
};
// Creamos un nuevo todo item
const newTodo: TodoState = {
  id: 2,
  todo: 'Recolectar la piedra del poder',
  done: false,
};

// Accion para agregar un nuevo todo a la lista de todos
const addTodoAction: Action = {
  type: 'add-todo',
  payload: newTodo, //Esto es lo que le quiero mandar a la accion
};

// Retornamos un nuevo state con la accion que hicimos

todos = todoReducer(todos, addTodoAction);
```

<br>
<hr>

## useReducer

<br>

Documentacion: [useReducer](https://es.reactjs.org/docs/hooks-reference.html#usereducer)

useReducer es una alternativa al useState , podemos manejarlo con el state pero se utiliza useReducer para casos en el que el manejo del estado es mas complejo.
Dependiendo la ocasion es mejor usar o useState o useReducer.

Su sintaxis es la siguiente:

```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

**dispatch:** El dispatch es la funcion que vamos a mandar a llamar para ejecutar o para disparar las acciones, sirve para mandar las acciones al reducer.

**reducer:** Es la misma funcion que el reducer que vimos antes.

**initialArg:** Es el estado inicial.

**init:** Es una funcion de inicializacion , esta funcion se utiliza cuando tenemos un estado algo relativamente pesado. El resultado de esa funcion es lo que termina siendo el estado inicial.
