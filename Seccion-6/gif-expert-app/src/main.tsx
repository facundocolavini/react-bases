import React from 'react'
import ReactDOM from 'react-dom/client'

// Global Styles
import './styles.css' 
// Components
import GiftExpertApp from '../src/GifExpertApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GiftExpertApp />
  </React.StrictMode>
)
