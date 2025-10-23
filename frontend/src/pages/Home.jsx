import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { SiTask } from 'react-icons/si';
import { BiSolidLogInCircle } from 'react-icons/bi';
import Task from './Task';


export default function Home({userLoggedIn, setUserLogin}) {
    const [username, setUsername] = useState("")
    const [isLoggedIn, setLoggedIn] = useState(false)
     const access = localStorage.getItem('access_token')

     console.log('state in the Home compoent:',userLoggedIn)
     
    useEffect(()=> {
        const checkLoggedInUser = async () => {

        const response = await axios.get("http://127.0.0.1:8000/api/user/", {
            headers: {
                Authorization : "Bearer " + access
            }
        })
        setUserLogin(true)
        setUsername(response.data.username)
        
        }
        checkLoggedInUser();
    },[])

    
  return (
    <div className='home'>

        {userLoggedIn ? (
             <>
                <div className='home-house'>
                    <h2>Hi {username}. Welcome</h2>
                    <div className='home-div'>
                        <p className='home-text'>You have no tasks created yet</p>
                    </div>
                </div>

                <div>
                    <Task />
                </div> 
             
             </> ): <div className='primary-message'>
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
