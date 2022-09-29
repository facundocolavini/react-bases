import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store'
import { CounterState,decrement ,increment ,incrementByAmount } from './store/slices/counter'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { counter, amount }: CounterState = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

  console.log({counter});
  

  return (
    <div className="App">
      <h1>Vite + React</h1>
   
      <div className="card">
      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{counter}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(3))}
        >
          Increment by {amount}
        </button>
      </div>

    </div>
  )
}

export default App
