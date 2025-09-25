
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineLogin } from 'react-icons/ai';
import { FaOpencart } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';

function Layout() {
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar-div'>
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
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Layout