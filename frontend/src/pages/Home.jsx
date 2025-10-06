import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { SiTask } from 'react-icons/si';
import { BiSolidLogInCircle } from 'react-icons/bi';
export default function Home() {
    const [username, setUsername] = useState("")
    const [isLoggedIn, setLoggedIn] = useState(false)
     const access = localStorage.getItem('access_token')
     
    useEffect(()=> {
        const checkLoggedInUser = async () => {

        const response = await axios.get("http://127.0.0.1:8000/api/user/", {
            headers: {
                Authorization : "Bearer " + access
            }
        })
        setLoggedIn(true)
        setUsername(response.data.username)
        
        }
        checkLoggedInUser();
    },[])

    const handleLogout = async ()=> {
        try {
            const refresh_token = localStorage.getItem("refresh_token")
            const access_token = localStorage.getItem("access_token")
            console.log("refresh_token",refresh_token + "/bn", "access_token :", access_token)
            const res = await axios.post("http://127.0.0.1:8000/api/logout/", {refresh: refresh_token }, {
                headers : {
                    Authorization : "Bearer " + access_token
                }
            })
            console.log(res.data.message)
            localStorage.removeItem("access_token")
            localStorage.removeItem("refresh_token")
            setLoggedIn(false)        
        }
        catch(error) {
            console.log(error)
        }
        
    }
  return (
    <div className='home'>

        {isLoggedIn ? (
             <><h2>Hi, {username}. Welcome!!!</h2>
             <div className='home-div'>
                <p>You have no tasks created yet !!!</p>
             </div>
              <button onClick={handleLogout}> Logout </button></> ): <div className='primary-message'>
                <SiTask className='sitask'/>
                
                <div className="resizing-3">
                    <BiSolidLogInCircle className="BiSolidLogInCircle" /> 
                    <p className='p-title-1'>Please login to access or create your tasks</p>
                     </div>
              </div>
              
              }
             
    </div>
  )
}
