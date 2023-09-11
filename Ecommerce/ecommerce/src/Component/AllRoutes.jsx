import React from 'react'
import { Route,Routes } from 'react-router-dom'
import About from '../Pages/About'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import Contacts from '../Pages/Contacts'
import Login from '../Pages/Login'
import NotFound from '../Pages/NotFound'
import SingleProductPage from '../Pages/SingleProductPage'
import PrivateRoute from './PrivateRoute'


const AllRoutes = () => {
  return (
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/about" element={ <PrivateRoute>  <About />  </PrivateRoute>    } />
        <Route path='/product' element={<Products />  } />
        <Route path="/contact" element={<PrivateRoute><Contacts /> </PrivateRoute> } />
        <Route path="/login"  element={ <Login />} />
        <Route path="/product/:id" element={<SingleProductPage /> } />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AllRoutes