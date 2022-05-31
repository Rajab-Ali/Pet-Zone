import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './login'
import Signup from './Signup'
import Home from './home'
import Blog from './blogs'
import ProductShop from './productshop'
import ProductDetail from './productDescription'
const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/signup' element={ <Signup /> } />
        <Route path='/Homepage' element={ <Home /> } />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/product-shop' element = {<ProductShop />} />
        <Route path='/product-detail' element = {<ProductDetail />} />
       </Routes>
    </Router>
  )
}

export default Index