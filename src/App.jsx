import React from 'react';
import Product from './components/Product';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login';

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
    {!isLoggedIn ? 
      <Login/> : 
      <>
        <Navbar/>
        <hr />
        <Routes>
          <Route path='/' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </>
    }  
    </BrowserRouter>
  )
}

export default App
