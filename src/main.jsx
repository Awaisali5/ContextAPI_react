import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CounterProvider } from './Context/Counter.jsx'
import { CartProvider } from './Context/Cart.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>,
)
