# Profundizando Hooks - Generales

- Profundizar en el tema de los Hooks

- Crear otros customHooks

- useState

- useCounter - Personalizado

-useEffect y sus precauciones

- useRef

- useFetch - Personalizado + optimizaciones

- useLayoutEffect

- Memo

- useMemo

- useCallback

<hr>

## Hook - useState

<br>
En el useState no siempre vamos a tener un valor primitivo, numeros , strings , array o objetos.

Por eso este ejemplo:

Mi counter es un objeto que tiene mas de una propiedad , el setCounter cambia el estado de un objeto.
En javascript si no especificamos el type que va a ser el useState el estado se muta a otro tipo , osea que si modificamos y ponemos setCounter(counter + 1) el estado mutara a 11 que es un number y realmente teniamos un objeto.En typeScript no pasa eso ya que podemos tipar el useState.

Entonces asi podemos modificar una propiedad del objeto counter de mi estado con mi setCounter sin mutar a otro tipo:

```js
// Caso si inicializamos el useState con un objeto con varias propiedades
const [counter, setCounter] = useState;/*Type*/>({
    counter1:10,
    counter2:20,
    counter3:30,
})


<div>{counter.counter1}</div>
<div>{counter.counter2}</div>
<div>{counter.counter3}</div>

// Podemos destructurar el state counter :
    const [{counter1,counter2,counter3}, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
    })

<div>{counter1}</div>
<div>{counter2}</div>
<div>{counter3}</div>
<button className="btn btn-primary" onClick={onAddCounters}>+1</button>
```

Podemos modificar los distintos counters del estado asi:

```js
// Destructuramos counters y devolvemos el nuevo objeto counters pero modificando el valor de counter1
const onAddCounters = () => {
  setCounters(({ counter1, counter2, counter3 }) => ({
    counter1: counter1 + 1,
    counter2,
    counter3,
  }));
};

// O tambien asi con spead operator

// Pero para hacerlo asi no debemos destructurar el counter dentro del useState
const [state, setCounter] = useState({
  counter1: 10,
  counter2: 20,
  counter3: 30,
});

const { counter1, counter2, counter3 } = state; // Lo destructuramos aca

const onAddCounters = () => {
  setCounters({ ...state, counter1: counter1 + 1 });
};
```

Cuando nosotros tengamos un objeto en nuestro useState y querramos modificar alguna propiedad o valor del estado,debemos preservar los valores anteriores.
Ya que si no lo hacemos en el caso del ejemplo counter2 y counter3 se pierden cuando apretamos el boton de +1 y al redibujar el componente no apareceran.

Hay que tener cuidado con el useState ya que mandemos a llamar la funcion que establece el nuevo valor del state literalmente lo que le mandemos ahi es el valor que va a tener el nuevo estado.

<br>
<hr>

## useCounter - Custom Hook

<br>

Vamos a hacer un custom hook de nuestro counter.
Para que vamos a hacer un custom hook:

- Para reutilizar la funcionalidad que queramos para nuestros componentes
- Abstraer al componente lo mas posible de mas de una tarea

En este caso vamos a hacer un custom hook de mi componente de counter, al analizar esta funcionalidad que tenemos en mi componente Counter podemos decir que tranquilamente se podria implmentar para varias cosas por ejemplo: un carrito de compras. Hay muchas razones para manejar un contador por eso realizamos un hook, para no tener que volver a crear toda la funcionalidad de un contador en nuevos componentes.

Mi custom hook se encargara de manejar los counter

### Caracteristicas generales de un custom hook

Un custom Hook es una funcion que tiene un return puede ser cualquier cosa que necesitemos que regrese.
Usualmente los hook estan amarrados a algun hook propio de react.

```js
const useCounter = (initialValue: Props = 10) => {
  // Hook de react
  const [counter, setCounter] = useState(props);

  return {
    // Lo que necesite devolver
  };
};
```

**Importante:** Si no realizamos el return de nuestro hook no hay manera de enlazar al componente con el custom Hook.Por lo tanto nuestro componente que utiliza el hook, no podria cambiar el valor del counter.Ya que dentro del hook le digo como quiero que este counter sea editado o cambie.

Asi mandamos a llamar nuestro custom Hook:

Se prefiere utilizar objetos ya que podemos destructurar exactamente lo que necesito las piezas que necesito por su nombre.

```js
const { counter } = useCounter(13);
//Tambien podemos hacer que nuestro hook retorne un array y destructurar los valores como un array
const [counter] = useCounter(13);
```

<br>
<hr>

## Metodos del hook

<br>

La idea es que necesitamos exponer la funcionalidad para que alguien (ya sea otro programador) pueda manipular ese valor del counter.

Para cambiar el valor del counter vamos a crear una funcion que cambie el estado de ese counter a un nuevo valor.

En el caso de que querramos incrementar el valor de counter, useCounter devuelve una funcion que incrementa el valor del counter.

Lo mismo para cuando querramos decrementar y hacer el reset a nuestro counter.Nuestro hook retorna una funcion que al ejecutarla actua en el stado interno de nuestro custom hook cambiando el valor del counter.

Por decir asi el componente nos manda el evento que realizo y el custom hook devuelve lo que necesita.

```js
export const useCounter = (initialValue: Props = 10) => {
  // Hook de react
  const [counter, setCounter] = useState(initialValue);

  // Metodos del Hook

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(initialValue);
  };

  return {
    // Lo que necesite devolver
    counter,
    increment,
    decrement,
    reset,
  };
};
```

<br>
<br>
<hr>

## [Object object] en mi estado

<br>
Cuando tengamos un valor en mi estado de este tipo:

state: "10[Object object]

Esto se da ya que si tenemos un objeto y lo pasamos a string nos devuelve un [Object object].
Podemos verlos si hacemos const objt ={} y luego obj.toString()

Y surje esto en el state, por que cuando tenemos un boton y mandamos un evento onClick lo que estamos haciendo es mandar el evento clic como primer argumento a mi funcion en este caso decrement esta mandando la funcion por referencia.

### Envio de funcio por referencia

```html
<button onClick="{decrement}" type="button" className="btn btn-primary">
  -1
</button>
```

### Envio de parametros a mi funcion

Si lo que queremos obtener no es el evento sino un valor que enviamos y no el evento debemos escribir asi la funcion onClick:

```html
<button
  onClick="{()=>decrement(value)}"
  type="button"
  className="btn btn-primary"
>
  -1
</button>
```

Si necesitamos enviar el evento por parametro o algun otro parametro debemos escribir asi la funcion onClick

**Dato Importante:** Las devtools solo funcionan cuando estamos en desarrollo y no en produccion.

<br>
<br>
<hr>

## Hook - useEffect

<br>

El useEffect tiene 3 partes :

- Callback (Cuerpo de la funcion)
- Funcion de Cleanup (Cleanup)
- Array de dependencias

Vamos a trabajar con un formulario simple para eso cree mi componente SimpleForm.
Los useEffect sirven para disparar efectos secundarios de mi componente.
Es una funcion que internamente tiene un callback este callback es la que se va ejecutar cada vez que el useEffect se dispare , osea cada vez que el estado cambie de mi componente.

<br>

## Ciclo de vida - Array de Dependencias y Callback:

<br>

**IMPORTANTE:** NO SE RECOMIENDO USAR USEEFFECTS SIN NINGUNA DEPENDENCIA. SI NO SE TIENE NINGUNA DEPENDENCIA PONER EL ARRAY DE DEPENDENCIAS VACIO.

<br>

**SIN DEPENDENCIAS**

Cuando ponemos un arreglo vacio esto significa que solo quieren que el useEffect se dispare una sola vez y cuando el componente es montado la primera vez.

Si el useEffect no tiene ninguna dependencia se va a mandar a llamar cada vez que mi componente se vuelva a redibujar (cuando cambia un input o algo en mi componente).

```
// Mal esto hara que ejecute el useEffect en el componente siempre que tengamos un cambio
    useEffect(() => {
        console.log('USEEFFECT CALLED!');
    })
```

```
// Bien si no tenemos dependencias poner el array vacio y evitamos la ejecucion del useEffect en el componente cada vez que se cambie algo en el componente.

    useEffect(() => {
        console.log('USEEFFECT CALLED!');
    },[])
```

<br>

**CON DEPENDENCIAS**

Si no queremos que nuestro componente sea redibujado cada vez que tengamos un cambio debemos utilizar el array de dependencias que nos provee el useEffect.
Las dependencias son las condiciones por las cuales queremos que el useEffect se vuelva a disparar.

Ejemplo: Si mi formulario cambia volver a disparar el useEffect, pero solo se va a cambiar el formulario

```
    useEffect(() => {
      // ejecutar otra vez si algo cambia en el array de dependencias
        console.log('USEEFFECT CALLED!');
    },[formState]) //Solo va a cambiar el formulario o lo que necesitemos redibujar
```

**RECOMENDACION:**
En lugar de hacer un useEffect grande y que haga muchas cosas.
Se recomienda que crear efectos especializados o especificos por cada accion que necesitemos ejecutar o por cada efecto secundario que querramos llamar.

EJEMPLOS DE RECOMENDACION:

```
  // Se ejecuta solo la primera vez que se monta el componente
    useEffect(() => {
        console.log('USEEFFECT CALLED!');
    },[])

  // Se ejecuta Cuando el Formulario cambie
    useEffect(() => {
        console.log('FORM CHANGE!');
    },[formState])

  // Se ejecuta cuando el email cambie como es parte del formulario tambien dispara el useEffect del formulario
    useEffect(() => {
        console.log('EMAIL CHANGE!');
    },[email])

```

<br>
<hr/>

## useEffect unmount Cleanup

<br>
La funcion de return la utilizamos en la etapa de desmonte del componente, puede servir para:

- Limpiar
- Cancerlar Observables
- Cancelar una subscription
- Limpiar listeners

```
    useEffect(() => {
       // Listener  o observable
       return ()=>{
        // Cleanup de listener o observables
       }
    },[dependencias])

```

Con esto podemos controlar cuando queremos ejecutar algun tipo de codigo cuando el componente se muestra o cuando se destruye.

```jsx
{
  username === 'facundo2' && <Message />; // Si cumple la condicion lo monta y si no, lo desmonta.
}

// Se desmonta automaticamente
useEffect(() => {
  console.log(`Message mounted`);

  return () => {
    console.log(`Message Unmounted`);
  };
}, []);
```

**Importante:**
Si ocultamos o mostramos el componente con css. No estarmos desmontando el componente solo ocultandolo.
Seguiria ahi solo que invisible.

```jsx
{
  <Message className="hidden" />; // No estariamos destruyendo el componente
}
```

### Usos del useEffect

Listener :
Se monta el componente la primera vez y luego el callback del useEffect que contiene un listener.
Cuando yo ya no necesito el listener.Este componente tiene que dejar de existir y para eso se debe de limpiar el listener en la funcion cleanup

**Concecuencias de no limpiar el listener:**
Si no limpiamos el listener continuara funcionando,se seguira ejecutando y escuchando.Esto creara una fuga de memoria en la aplicacion.

```jsx
useEffect(() => {
  window.addEventListener('mousemove', (event) => {
    console.log(event.x, event.y);
  });

  return () => {
    // No estamos limpiando el listener
  };
}, []);
```

**Como remover y limpiar el listener:**
Para remover tenemos que hacer referencia a la funcion, al espacio en memoria donde esta definida mi funcion.
Por eso cuando querramos limpiar algo debemos hacer la referecnia arriba de todo dentro del callback del useEffect.

```jsx
useEffect(() => {
  // Listener
  const onMouseMove = ({ x, y }: event) => {
    const coords = { x, y };
    console.log(coords);
  };
  window.addEventListener('mousemove', onMouseMove); //

  return () => {
    // Remover listener
    window.removeEventListener('mousemove', onMouseMove);
  };
}, []);
```

**Importante:** Si utilizamos ()=> en lugar de crear una funcion "onMouseMove" dentro de mi addEventListener.Entonces no va a funcionar la limpieza del listener por que al usar ()=> creamos un nuevo espacio en memoria y nunca va a ser el mismo espacio de memoria donde esta el listener a limpiar.

### Caso de error si no hacemos la limpieza utilizando un estado

En este caso declaramos un estado que va a estar escuchando los cambios del evento del mouse. Y que no vamos a limpiar el listener.

```js
 const [coords, SetCoords] = useState<Coprds>({ x:0, y:0 })
  useEffect(() => {

    // Listener
    const onMouseMove = ({ x, y }: { x: number, y: number }) => {
      SetCoords({ x, y })
    };
    window.addEventListener('mousemove', onMouseMove); //

    return () => {
      // No removemos el listener
      // window.removeEventListener('mousemove', onMouseMove);
    };
```

Lo que pasaria:

Si yo no limpio el listener cuando se ejecute el evento, va a intentar actualizar el estado de un componente que ya no esta montado es decir un componente que ya no existe.
En resumen no debemos hacer cambios en el state de un componente que no esta montado.
Tener cuidado con esto ya que no arroja ningun warning en la consola.

<br>
<br>
<hr>

## Formularios

<br>

### Inputs

Cuando trabajamos con inputs hay que recordar que si enviamos el value no vamos a poder cambiar el valor del input ya que react trabaja todo en una sola via.

```html
<input type="email" className="form-control mt-2" placeholder="Email Address"
name="useremail" value={email} // No vamos a poder cambiar el valor del input />
```

#### Evento onChange para los inputs

Para manejar el cambio de valor que surje en los inputs utilizamos el evento onChange

```js
//Inputs Handlers
const onInputChange = ({ target }): void => {
  console.log(target.value);
};

<input
  type="email"
  className="form-control mt-2"
  placeholder="Email Address"
  name="email"
  value={email} // Si se quiere cargar el input con algun valor se deja (edicion)
  onChange={onInputChange} // Le pasamos el evento por referencia
/>;
```

- **event**: es un objeto que contiene todas las propiedades de mi input (target,name,value)
- **name**: esta propiedad del input viene del objeto event que sirve para saber que input es el que esta cambiando (nombre del input).
- **value**: esta propiedad del input viene del objeto event y sirve para obtener el valor que esta en el input.

<br>

### Seteando los valores de mi formulario a mi estado

Vamos a setear los valores que obtenemos desde cada input gracias a evento onChange y
para eso podemos hacerlo de la siguiente forma.

Si tenemos mas campos de mi formulario que no necesito cambiar y no quiero perderlos debemos usar el spead operator:

```js
setFormState({
  ...formState, // Si hay mas campos
});
```

Para setear los valores a mi formulario lo hacemos con propiedades computadas de los objetos.Se colocan entre llaves cuadradas:

Con propiedades computadas

```js
setFormState({
  ...formState, // Si hay mas campos
  // Propiedades computadas
  [name]: value, //Seteando los valores que necesito de mi formulario a mi estado
});
```

Esto se puede ver asi:

[ input ] : valordelInput

<br>

### Formulario con Custom Hook

<br>
Vamos a realizar un custom Hook para evitar la repeticion de codigo de formularios en nuestra app.
Para eso nuestro custom hook va a recibir Cual es el estado del formulario.

**Recomendacion:** Cuando utilizamos el useForm necesitamos extraer rapidamente las propiedades de nuestrao estado destructurandolas de mi formState.
Para eso mi useForm debe retornar esas partes del state (username, password, email ,etc).
Quedando asi :

```js
export const useForm = (initialForm: FormProps) => {
  const [formState, setFormState] = useState(initialForm);

  //Inputs Handlers
  const onInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target;
    setFormState({
      ...formState, // Si hay mas campos
      [name]: value, // Cambiando el estado
    });
  };

  return {
    ...formState,
    formState,
    onInputChange,
  };
};
```

Utilizando useForm en mi componentes:

```js
const { username, password, email, onInputChange } = useForm({
  username: '',
  email: '',
  password: '',
});

// const { username, email, password } = formState  // Ya no lo utilizamos asi por que obtenemos las proppiedades en el return del hook
```

### REACT HOOK FORM

Para manejar formularios con react , esta libreria es interesante ya que es como una version parecida a nuestro custom hook form.
Pero ya con codigo probado y esta elaborado para las necesidades de cualquier formulario.

<br>
<br>
<hr>

## useFetch - Custom Hook

<br>
Vamos a comunicar varios hooks entre si.
Para eso vamos a hacer un nuevo componente que va a estar utilizando nuestro custom Hook counter y un nuevo custom hook que va hacer una peticion a la api de breaking bad.

**Importante:**Al realizar un hook y llamarlo dentro del componente , nunca se debe de poner la llamada del hook dentro de un condicional o poner un if antes de un hook.Los hooks siempre se declaran primeros.

### Return condicional de mi componente

Hay varias formas de mostrar cierta parte de mi jsx condicionalmente las cuales son:

```js
if (isLoading) {
  return <h2>Cargando</h2>;
}

{
  isLoading && <h2>Cargando</h2>;
}
```

Con ternario:

**RECOMENDACION:**
Utilizarlo cuando tenemos pocas lineas de codigo para facilitar la lectura.

```html
{isLoading ?
<h2>Cargando...</h2>
:
<h2>Hola Mundo</h2>
}
```

Para renderizar un array con data :

No recomendad:

```html
<p className="mb-1">{data[0].quote}</p>
```

**Recomendacion:** Podemos destructurar la data asegurando que no sea null la data ya que si es null javascript nos tirara un error.

Doble negacion !! :
Si nosotros tenemos una variable que es null y la negamos una vez nos pasa de null a true, si lo volvemos a negar nos da false.

```js
let data: [] = null; // NULL
// Negamos una vez nos va a dar true
!data; // true
// Negamos una segunda vez y ahora nos dara false
!!data; // false
// Esto mismo aplica cuando tenemos undefined en vez de null
```

Entonces lo que estamos haciendo es transforma nuestra variable data de undefined o null a false.
**Libreria react hook Form**

Investigar REACT HOOK FORM para utilizarla en nuestro formularios.
Es muy silimar a nuestro hook de userForm.

[react-hook-form](https://react-hook-form.com/form-builder)

<br>
<br>
<hr>

## useRef - Hook

<br>
El useRef nos sirve para manejar un valor de alguna variable.Esta variable la podemos cambiar y trabajarla pero no dispara rerenderizaciones cuando hacemos un cambio. Es como un useState pero que no dispara la rerenderizacion otra vez.
useRef devuelve un objeto ref mutable cuya propiedad .current se inicializa con el argumento pasado. El objeto devuelto se mantendrá persistente durante la vida completa del componente.

El useRef tiene las siguientes caracteristicas:

- Mantiene una referencia y cuando esta referencia cambia EVITA disparar un rerenderizado.
- Almacena valores
- Mantiene la referencia a un elemento html

Caso de uso:

- Si queremos asegurarnos de que estamos seleccionando cierto elemento del dom
- Evitamos duplicar codigo html unico

Si tuvieramos varios input en un formulario (el cual es un componente) y queremos posicionar el foco en un input.
Se podria utilizar queryselector y establecer una class o un id para cada id, pero esto no nos garantiza que nos va a traer el elemento (input) que necesitamos en particular.Por que al ser un componente vamos a utilizarlo en distintas partes , entonces los id que establezcamos dentro de mi componente form se van a estar repitiendo donde utilicemos el componente formulario.

Entonces para este tipo de casos entra el uso de useRef.

Casos de uso:

- Controlar enfoques, selección de texto, o reproducción de medios.
- Activar animaciones imperativas.
- Integración con bibliotecas DOM de terceros.

El useRef es un objeto que dentro tiene un propiedad current, que si no le pasamos nada por parametro al useRef esta se setea como undefined.
Lo que necesitamos establecer en ese objeto current es lo que necesitamos mantener en el componente.Podemos setearle booleanos , array , etc.

```js
const ref = useRef(); //{current: undefined}
```

Hacer una referencia a un elemento html:

Podemos hacer una referencia con el atributo que nos da react llamado ref.

El inputRef siempre va apuntar a el elemento input que estamos haciendo referencia.
Tampoco vamos a tener conflicto si otro componente igual utiliza useRef , react no se va a confundir el elemento que queremos hacer referencia.

```js
 const inputRef: React.MutableRefObject<HTMLInputElement> = useRef()
 const onFocusInput = () =>{
   inputRef.current.select()
 }

<!-- Referencia a mi input -->
<input
 ref={ inputRef }
 type="text"
 placeholder="Ingrese su nombre"
 className="form-control"
/>

<!--
 inputRef:
 {current: input.form-control}
-->

```

La idea del useRef es que tengamos una referencia que sea controlable.

No se recomienda usarlo en estos casos:

- Acceder al nodo DOM de un hijo desde un componente padre

<br>
<br>

<hr>

## useLayoutEffect - Hook

<br>
Es muy parecido a un useEffect con la gran diferencia que este dispara su callback de forma sincrona.Cuando renderizamos el componente y todas las mutaciones del dom terminan se dispara el useLayoutEffect.
Las actualizaciones programadas dentro de useLayoutEffect se vaciarán sincrónicamente, antes de que el navegador tenga la oportunidad de pintar.

**Recomendacion:** Se recomienda trabajar con el useEffect

<br>
<hr>

## Memo - Metodo de React

<br>
Memo , sirve para evitar renderizados de componentes hijos que no se necesitan renderizar si el estado de su padre cambia.
Usualmente se utiliza memo cuando :

- Asegurarnos de que solo se redibuje si las propiedades de mi componente cambian.
- Solo memorizar componentes grandes y si tiene un proceso pesado que queremos hacer cuando sus propiedades cambian.

El memo es una funcion de react que le dice memoriza a mi componente. Recibe como argumento mi componente que deseo memorizar.
Y solo cuando las propiedades de mi componente memorizado cambian , se va a volver a renderizar.

Esta forma no es tan comun de invocarlo pero de esta forma funciona en vite y debemos importarlo desde react sino nos arrojara un error de que React no esta definido:

```js
import { memo } from 'react';
export const Small = memo(({ count }: Props) => {
  console.log('me volvi a dibujar :(');
  return <small>{count}</small>;
});

//Sino importamos react y lo hacemos de la forma tradicional
import React from 'react';
export const Small = React.memo(({ count }: Props) => {
  console.log('me volvi a dibujar :(');
  return <small>{count}</small>;
});
```

**CREATE REACT APP:**

En CRA podemos utilizar el memo asi:

No hace falta importarlo desde react ya que hace referencia a React en el contexto global.

```js
export const Small = React.memo(({ count }: Props) => {
  // si las props cambian se vuelve a renderizar
  console.log('me volvi a dibujar :(');
  return <small>{count}</small>;
});
```

<br>
<hr>

## useMemo - Hook

<br>
Nos ayuda a realizar el proceso de ciertas tareas pesadas.
Evitamos un segundo dibujado de un proceso pesado

Casos de uso :

- Podemos evitar que al haber un cambio en mi componente evitar que se vuelva a ejecutar un proceso pesado

La sintaxis es muy similar a la que tenemos en un useEffect comun, solo que en el use memo memorizamos un valor.

Se puede hacer de esta forma con el hook useForm:

```js
const memorizedValue = useMemo(
  () => heavyStuff(counter), //Esta funcion del use memo debe siempre retornar algo si no, nos devolvera un undefined.

  [counter]
); // Solo va a redibujar si las dependencias cambian
```

El use memo va a memorizar lo que sea que retorne y el valor memorizado se va a mantener asi a menos que las dependencias del useMemo() cambien.

Si al array de dependencias lo coloco vacio solo se va a memorizar la primera vez que se renderize el componente.

**Recomendacion:** Es muy recomendable utilizarlo cuando tenemos tareas muy pesadas que podemos ahorrarnosla si las podemos memorizar despues de la primera vez.

<br>
<br>
<hr>

## useCallback - Hook

<br>
Si yo intentara memorizar una funcion declarada en mi componente padre y le pasamos esa funcion como propiedad a mi componente hijo al querer memorizar mi componente hijo, ya no podria ya que la funcion que le enviamos por prop desde mi padre siempre va a ser distinta por su referencia en memoria.
useCallback esta dentro de la categoria de los hooks de memorizacion. A veces las funciones o bien los objetos siempre apuntan a direcciones de memoria diferentes por lo que cuando intentamos memorizar no podemos ya que cada valor en memoria es distinto.

El useCallback sirve para memorizar funciones , lo que regresa es una funcion que yo puedo ejecutar pero esa funcion memorizada solo se va a ejecutar cuando algo cambien.

```js
const incrementFather = useCallback(
  // Asi memorizamos mi funcion
  () => {
    setCounter(counter + 1); // Funcion que se ejecuta una vez la primera vez
  },
  []
); // Al pasarle el array de dependencia vacio se ejecuta la primera vez
```

Si le enviamos el array vacio en mi hook useCallback, vamos a estar diciendole que solo se ejecute la primera vez la funcion setCounter, por lo que si volvemos a tocar el boton de incrementar no va a funcionar.
Para arreglar eso debemos hace que:

- Nuestro componente donde estamos mandando nuestra funcion memorizada via props tiene que tener React.memo. Sino nunca va a poder pegarle al mismo numero de referencaia en memoria .

```js
const ShowIncrement = React.memo(({ increment }: Props): JSX.Element => {
  console.log('Me volvi a generar :(');

  return (
    <button className="btn btn-primary" onClick={() => increment()}>
      +1
    </button>
  );
});
```

```js
const incrementFather = useCallback( // Asi memorizamos mi funcion
    () => {
      setCounter( (counter) => counter + 1 ) // De esta forma el useState permite pasarle un callback del valor actual del counter y modificarlo con useCallback
    [])
```

Funciona por que la funcion internamente sabe que va a tomar el valor actual del state y le va a sumar uno.
Entonces asi evitamos redibujar el componente de mi boton SI ES que no cambia mi estado de counter.

Tambien podemos darle este uso:
Con useEffect

Con useEffect si memorizamos una funcion podemos utilizar tambien useEffect para escuchar si hay cambios en mi funcion memorizada para que se redibuje mi componente si esta cambia , esto NO provocara el bucle infinito ya que se hace referencia a la misma direccion de memoria donde esta mi funcion memorizada.

**Importante:** Este codigo solo se debe hacer cuando memorizamos una funcion.

```js
useEffect(() => {
  incrementFather();
}, [incrementFather]);
```

<br>
<br>
<hr>

## useCallback con argumento Hook

<br>
Si necesitamos enviarle un argumento a mi funcion memorizada se lo pasamos asi:

```js
const incrementFather = useCallback( // Asi memorizamos mi funcion
    (value) => {
      setCounter( (counter) => counter + value) // De esta forma el useState permite pasarle un callback del valor actual del counter y modificarlo con useCallback
    [])



const ShowIncrement = React.memo(({ increment }: Props): JSX.Element => {

    console.log('Me volvi a generar :(');
    return (
        <button
            className="btn btn-primary"
            onClick={()=> increment( 5 )}
        >
          +1
        </button>
    )
})
```
