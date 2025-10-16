
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineLogin } from 'react-icons/ai';
import { FaOpencart } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { RiMenuFoldFill } from 'react-icons/ri';
import axios from 'axios';


function Layout() {
    const [isLoggedIn, setLoggedIn]= useState(false);
    const [username, setUsername] = useState("");
    const access = localStorage.getItem('access_token');

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
        console.log(isLoggedIn)
    },[])

  return (
    <div>
        <nav className='navbar'>
            {isLoggedIn ? (<div className='navbar-div'>
                <div className='heading'>
                    <span className='FaBook'><FaBook /></span> 
                    <h1 className='heading-title'>Taskify</h1>
                </div>
            <ul className='navbar-list'>
            
                <li className='user-tab'>
                   {username}  <span><FaRegUser className='FaRegUser' /></span>
                </li>
                <li className='user-tab'>
                     <span><RiMenuFoldFill className='RiMenuFoldFill'/></span>
                </li>

            </ul>
            </div>) : (<div className='navbar-div'>
                <div className='heading'>
                    <span className='FaBook'><FaBook /></span> 
                    <h1 className='heading-title'>Taskify</h1>
                </div>
            <ul className='navbar-list'>
                <li>
                    
                    <Link className='link' to='/'><span><AiFillHome className='AiFillHome' /></span> Home</Link>
                </li>

                <li>
                    <Link className='link' to='/login'><span><AiOutlineLogin className='AiFillHome' /></span> Login</Link>
                </li>

                <li>
                    <Link className='link'to='/register'><span><FaOpencart className='AiFillHome' /></span> Register</Link>
                </li>
            </ul>'
            
            </div>)}
        </nav>
        <div className='drop-down-menu'>
                <p>Logout dsdsfsdfsdfsdfdssdfsdfsdf</p>
            </div>
    </div>
  )
}

export default Layout