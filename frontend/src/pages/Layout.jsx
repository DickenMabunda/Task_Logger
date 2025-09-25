import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar-div'>
            <ul className='navbar-list'>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/login'>Login</Link>
                </li>

                <li>
                    <Link to='/register'>Register</Link>
                </li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Layout