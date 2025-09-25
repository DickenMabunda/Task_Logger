import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='App'>
    <BrowserRouter>
      <Layout />
    <Routes>     
      <Route path='/' element={<Home />}/>
      <Route path='login' element={<Login />}/>
      <Route path='register' element={<Register />}/>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App