import { useState } from 'react';

type Props = number;

export const useCounter = ( initialValue: Props = 10 ) => {
    // Hook de react
    const [counter, setCounter] = useState(initialValue);

    // Metodos del Hook

    const increment = ( value: number = 1 ) => {
        // Si necesito incrementarlo por alguna cantidad especifica por eso mandamos value
        setCounter( counter + value );
    }
    const decrement = ( value: number = 1 ) => {
        // No puede ser menor a 0
        if(counter === 0) return
        setCounter( counter - value );
    }
    const reset = () => {
        setCounter( initialValue );
    }

    return {
        // Lo que necesite devolver
        counter,
        increment,
        decrement,
        reset
    }
}