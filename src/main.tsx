import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import axe from '@axe-core/react'
import './index.css'

const isProdEnvironemnt = import.meta.env.PROD;

if (!isProdEnvironemnt) {
  axe(React, ReactDOM, 1000);
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
