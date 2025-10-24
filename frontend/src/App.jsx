import './App.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ManageProfile from './pages/ManageProfile';

const App = () => {
  const [userLoggedIn, setUserLogin] = useState(false);
  const [username, setUsername] = useState("");
  
  return (
    <div className='App'>
    <BrowserRouter>
      <Layout 
      username={username}
      setUsername={setUsername}
      userLoggedIn={userLoggedIn} 
      setUserLogin={setUserLogin}/>
    <Routes>     
      <Route path='/' 
        element={<Home
        username={username}
        setUsername={setUsername}
        userLoggedIn={userLoggedIn} 
        setUserLogin={setUserLogin}/>}
      />
      <Route path='login' 
        element={<Login 
        username={username}
        setUsername={setUsername}
        userLoggedIn={userLoggedIn} 
        setUserLogin={setUserLogin}/>}
      />
      <Route path='register' element={<Register />} />
      <Route path='/manage-profile' element={<ManageProfile />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App