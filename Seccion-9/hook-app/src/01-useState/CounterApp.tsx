import { SetStateAction, useState, Dispatch } from 'react';
import * as React from 'react';

type Props = {}

type CounterStateType = {
    counter1: number;
    counter2: number;
    counter3: number;
}
export default function CounterApp({}: Props) {
//   const [counter, setCounter] = useState(10)
  // Inicializando el estado con un objeto 
  const [counters setCounters] = useState
    ({
        counter1:10,
        counter2:20,
        counter3:30,
    })


    const onAddCounters = () =>{
        setCounters((prevState) => {
            prevState.counter1 + 1
            prevState.counter2 
            prevState.counter3
        } )
    
    }

    return (
    <>
        <h1>Counter 1: { counters.counter1 }</h1>
        <h1>Counter 2: { counters.counter2 }</h1>
        <h1>Counter 3: { counters.counter3 }</h1>
        <hr />
        <button className="btn btn-primary" onClick={()=>onAddCounters()}>+1</button>
    </>
  )
}