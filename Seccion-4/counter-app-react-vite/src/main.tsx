import React from 'react';
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp';
import { FirtsApp } from './FirtsApp';
import { HelloWorldApp } from './HelloWorldApp';
//Styles 
import './styles.css'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/* <FirtsApp></FirtsApp> */}
        <CounterApp value={1} />
    </React.StrictMode>
  )