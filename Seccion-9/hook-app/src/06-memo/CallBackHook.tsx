import { useState, useCallback, useEffect } from 'react';
import { useCounter } from '../hook/useCounter';
import ShowIncrement from './ShowIncrement';


export const CallBackHook = (): JSX.Element => {
    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback( // Asi memorizamos mi funcion
      (value) => {// Podemos necesitar un argumento en este caso si necesitamos especificar cada cuando vamos aumentar el counter.
        setCounter( (counter) => counter + value ) // Funcion 
    },[])// Al pasarle el array vacio de dependencia se ejecuta la primera vez 
    


    useEffect(()=>{
        // incrementFather()
    },[incrementFather])

      
    return (
        <>
            <h1>useCallback Hook: { counter } </h1>
            <hr/>
            <ShowIncrement increment={ incrementFather }/>
        </>
    )
}

 