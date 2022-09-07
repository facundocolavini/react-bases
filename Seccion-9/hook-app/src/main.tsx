import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterApp from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { HookApp } from './HookApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>

    {/* <HookApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm/> */}
    <FormWithCustomHook/>

  </>

)
