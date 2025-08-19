import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Signup from './pages/registeration/Signup';
import Login from './pages/registeration/login';
import ProductInfo from './pages/productInfo/ProductInfo';
import Cart from './pages/cart/Cart';



function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='productInfo/:id' element={<ProductInfo/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/*" element={<NoPage/>} />
        </Routes>
      </Router>
    </MyState>
  )
}

export default App