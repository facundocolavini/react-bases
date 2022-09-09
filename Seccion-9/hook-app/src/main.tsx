import React from 'react'
import ReactDOM from 'react-dom/client'


// Components
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import CounterApp from './01-useState/CounterApp'
import { FocusScreen } from './04-useRef/FocusScreen'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { HookApp } from './HookApp'
import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memo/Memorize'
import { MemoHook } from './06-memo/MemoHook'
import { CallBackHook } from './06-memo/CallBackHook'
import { Padre } from './07-tarea-memo/Padre'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>

    {/* <HookApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm/> */}
    {/* <FormWithCustomHook/> */}
    {/* <MultipleCustomHook/> */}
    {/* <FocusScreen/> */}
    {/* <Layout/> */}
    {/* <Memorize/> */}
    {/* <MemoHook/> */}
    {/* <CallBackHook /> */}
    <Padre />
  </>

)
