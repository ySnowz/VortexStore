import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import './styles/global.css'
import Navbar from './components/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
  </React.StrictMode>,
)
