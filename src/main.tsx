import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Guesser from './Guesser'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Guesser />
  </React.StrictMode>
)
