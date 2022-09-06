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

## Hook - useState

En el useState no siempre vamos a tener un valor primitivo, array o un objeto.


```js
// Caso si inicializamos el useState con un objeto con varias propiedades
const [counter, setCounter] = useState({
    counter1:10,
    counter2:20,
    counter3:30,
})


<div>{counter.counter1}</div>
<div>{counter.counter2}</div>
<div>{counter.counter3}</div>

// Podemos destructurar el state counter : 
    const [{counter1,counter2,counter3,}, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
    })

<div>{counter1}</div>
<div>{counter2}</div>
<div>{counter3}</div>
```