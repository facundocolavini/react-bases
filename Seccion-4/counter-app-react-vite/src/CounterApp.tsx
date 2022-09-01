import PropTypes from 'prop-types'
import { useState } from 'react';

type ValuesProps  = {
   value: number;

}

export const CounterApp = ({value}: ValuesProps): JSX.Element => {
    
    const [counter , setCounter] = useState(value)

    const handleAdd =(): void => {
        // 
        setCounter(counter + 1)
        //Otra forma :
        // setCounter((c)=>  c + 1) // valor actual del counter + 1
    }

    const handleSubstract = (counter: number): void => {
        setCounter(counter - 1)
    }

    const handleReset = (): void=>{
        setCounter(value)
    }
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2 data-testid="counter">{counter}</h2>
            <button aria-label="btn-increment" onClick={handleAdd}>+1</button>
            <button aria-label="btn-decrement" onClick={()=>handleSubstract(counter)}>-1</button>
            <button aria-label="btn-reset" onClick={handleReset}>Reset</button>
        </>
    )
}

CounterApp.propTypes ={
    value: PropTypes.number.isRequired,
}