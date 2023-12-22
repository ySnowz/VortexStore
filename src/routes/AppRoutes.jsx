import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ProductPage from '../pages/ProductPage'
import Home from "../pages/Home"

export const AppRoutes = () => (  
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductPage />} />
    </Routes>
  )