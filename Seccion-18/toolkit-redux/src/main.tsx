import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import { store } from './store'
import { PokemonApp } from '../../../../.history/react-bases/Seccion-18/toolkit-redux/src/PokemonApp_20220929133201';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store = { store }>
      {/* <App /> */}
      <PokemonApp/>
    </Provider>
  </React.StrictMode>
)
