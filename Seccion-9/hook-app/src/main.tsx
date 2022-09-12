import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'

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
// import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'

import './index.css'
import MainApp from './09-useContext/MainApp'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>

    {/*Seccion 9 
    <HookApp />
    <CounterApp />
    <CounterWithCustomHook />
    <SimpleForm/>
    <FormWithCustomHook/>
    <MultipleCustomHook/>
    <FocusScreen/>
    <Layout/>
    <Memorize/>
    <MemoHook/>
    <CallBackHook />
    <Padre />
    */}

    {/* Seccion 10
     <TodoApp/> 
     */}
     <BrowserRouter>
      <MainApp />
     </BrowserRouter>
  </>
)

