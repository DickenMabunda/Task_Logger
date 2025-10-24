
import { Navigate, Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineLogin } from 'react-icons/ai';
import { FaOpencart } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { RiMenuFoldFill } from 'react-icons/ri';
import { LuContact } from 'react-icons/lu';
import { AiOutlineLogout } from 'react-icons/ai';
import axios from 'axios';


function Layout({userLoggedIn, setUserLogin, username, setUsername}) {
    const [isLoggedIn, setLoggedIn]= useState(false);
    const [show, setShow] = useState(false)
    const access = localStorage.getItem('access_token');
    

    const handleDropDownMenu = (e)=> {
        if (userLoggedIn == true) {
            if (show == false) {
                setShow(true)
                console.log('show is open')
            }
            else {
                setShow(false)
                console.log('show is closed')
            }
        }
        else {
            setShow(false)
        }
    }

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
            setUserLogin(false)
            setShow(false)
            setUsername('')
            return <Navigate to='/'/>    
        }
        catch(error) {
            console.log(error)
        }
        
    }

    useEffect(()=> {
        const checkLoggedInUser = async () => {

        const response = await axios.get("http://127.0.0.1:8000/api/user/", {
            headers: {
                Authorization : "Bearer " + access
            }
        })
        setUsername(response.data.username)
        setUserLogin(true)
        console.log('userLoggedIn in state in the Layout component:', userLoggedIn)
        }
        checkLoggedInUser();
    },[])

  return (
    <div>
        <nav className='navbar'>
            {userLoggedIn ? (<div className='navbar-div'>
                <div className='heading'>
                    
                    <span className='FaBook'><FaBook /></span> 
                    <Link to='/' className='link'>
                    <h1 className='heading-title'>Taskify</h1>
                    </Link>
                </div>
            <ul className='navbar-list'>
            
                <li className='user-tab'><label style={{fontSize: "13px"}}>{username}</label><span><FaRegUser className='FaRegUser' /></span></li>
                <li><Link className='link' to='/'><span><AiFillHome className='AiFillHome' /></span></Link></li>
                <li className='user-tab' onClick={handleDropDownMenu}><span><RiMenuFoldFill className='RiMenuFoldFill'/></span></li>
            </ul>
            </div>) : (<div className='navbar-div'>
                <div className='heading'>
                    <span className='FaBook'><FaBook /></span> 
                    <h1 className='heading-title'>Taskify</h1>
                </div>

            <ul className='navbar-list'>
                <li><Link className='link' to='/'><span><AiFillHome className='AiFillHome' /></span> Home</Link></li>
                <li><Link className='link' to='/login'><span><AiOutlineLogin className='AiFillHome' /></span> Login</Link></li>
                <li><Link className='link'to='/register'><span><FaOpencart className='AiFillHome' /></span> Register</Link></li>
            </ul>
            
            </div>)}
        </nav>
        {show? (<div className='drop-down-menu'>
                <ul className='drop-down-list'>
                    <li className='drop-down-list-item'><FaRegUser/><Link className='link' to='/manage-profile'> Manage Profile</Link></li>
                    <li className='drop-down-list-item'><LuContact/> Contact</li>
                    <li className='drop-down-list-item' onClick={handleLogout}><AiOutlineLogout/> Logout</li>
                </ul> 
        </div>): ''}
    </div>
  )
}

export default Layout