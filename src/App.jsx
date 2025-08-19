import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';
import AppleProducts from './pages/eachBrand/AppleProducts';
import GoogleProducts from './pages/eachBrand/GoogleProducts';
import SamsungProducts from './pages/eachBrand/SamsungProducts';
import Android from './pages/ospages/android';
import Ios from './pages/ospages/ios';
import AdminVisualizations from './pages/dashboardvisualization/AdminVisualizations';
import Ascending from './pages/sortbyprice/Ascending';
import Descending from './pages/sortbyprice/Descending';
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/order" element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/productinfo/:id' element={<ProductInfo />} />
          <Route path='/addproduct' element={
            <ProtectedRouteForAdmin>
              <AddProduct />
            </ProtectedRouteForAdmin>
          } />
          <Route path='/updateproduct' element={
            <ProtectedRouteForAdmin>
              <UpdateProduct />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />
          <Route path="/AppleProducts" element={<AppleProducts/>} />
          <Route path="/SamsungProducts" element={<SamsungProducts/>} />
          <Route path="/GoogleProducts" element={<GoogleProducts/>} />
          <Route path="/Ios" element={<Ios/>} />
          <Route path="/Android" element={<Android/>} />
          <Route path="/AdminVisualizations" element={<AdminVisualizations/>} />
          <Route path="/Ascending" element={<Ascending/>} />
          <Route path="/Descending" element={<Descending/>} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>

  )
}

export default App

// user 

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user')
  if (user) {
    return children
  } else {
    return <Navigate to={'/login'} />
  }
}

// admin 

const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))

  if (admin.user.email === 'anistm@rknnec.edu') {
    return children
  }
  else {
    return <Navigate to={'/login'} />
  }

}