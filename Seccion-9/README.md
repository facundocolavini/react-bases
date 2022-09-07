# Profundizando Hooks

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

<br>
<br>
<hr>

## Hook - useState

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
<br>
<hr>

## useCounter - Custom Hook

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

## Metodos del hook

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

## [Object object] en mi estado

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

El useEffect tiene 3 partes :

- Callback (Cuerpo de la funcion)
- Funcion de Cleanup (Cleanup)
- Array de dependencias

Vamos a trabajar con un formulario simple para eso cree mi componente SimpleForm.
Los useEffect sirven para disparar efectos secundarios de mi componente.
Es una funcion que internamente tiene un callback este callback es la que se va ejecutar cada vez que el useEffect se dispare , osea cada vez que el estado cambie de mi componente.

### Ciclo de vida - Array de Dependencias y Callback:

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
<br>

### useEffect unmount Cleanup

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
