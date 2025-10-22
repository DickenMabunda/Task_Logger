import './App.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

const App = () => {
  const [userLoggedIn, setUserLogin] = useState(false);
  console.log('state in the app compoent:',userLoggedIn)
  return (
    <div className='App'>
    <BrowserRouter>
      <Layout userLoggedIn={userLoggedIn} setUserLogin={setUserLogin}/>
    <Routes>     
      <Route path='/' element={<Home userLoggedIn={userLoggedIn} setUserLogin={setUserLogin}/>}/>
      <Route path='login' element={<Login userLoggedIn={userLoggedIn} setUserLogin={setUserLogin}/>}/>
      <Route path='register' element={<Register />}/>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App