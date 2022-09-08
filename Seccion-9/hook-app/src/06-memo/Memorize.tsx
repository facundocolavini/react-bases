import { useCounter } from '../hook'
import { Small } from './Small'
import { useState } from 'react';


export const Memorize = () => {
    const { counter, increment, decrement} = useCounter( 1 )
    const [show , setShow] = useState(true)
    return (
        <>
            <h1>Counter:
                <Small count={counter}/>
            </h1>
            <hr/>
            <button onClick= { ()=>increment() } className="btn btn-primary">
                +1
            </button>
            <button onClick={ ()=> setShow( !show ) } className="btn btn-outline-primary">
                Show/Hide { JSON.stringify(show) }
            </button>
        </>
    )
}