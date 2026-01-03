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
import Notification from './Pages/Notitfication'
import { CartProvider } from './Components/CartContext' 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category' element={<Category/>}/>
            <Route path='/productdetails/:id' element={<ProductDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/login' element={<Login/>}/>

            <Route path='/notifications' element={<Notification/>}/>
            
          </Routes>
        </BrowserRouter>
        <ToastContainer position="top-right" autoClose={2000} />
      </CartProvider>
      
    </div>
  )
}

export default App
