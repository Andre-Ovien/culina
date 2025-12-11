import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Category from './Pages/Category'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Order from './Pages/Order'
import NotFound from './Pages/NotFound'
import Login from './Pages/Login'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/productdetails' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
