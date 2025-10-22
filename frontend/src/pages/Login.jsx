import { useState } from "react"
import axios from 'axios'
import {Navigate, Link } from "react-router-dom"

/* Icons imports */
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { BiSolidLogInCircle } from 'react-icons/bi';

function Login({userLoggedIn, setUserLogin}) {

    const [isLoading, setIsLoading] = useState(false);
    const [successLogin, setSuccessLogin] = useState(false)
    const [formData, setFormData]= useState({
        email: '',
        password:''
    })
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isLoading){
            return
        }
        setIsLoading(true)

        try {

            const response = await axios.post("http://127.0.0.1:8000/api/login/", formData)
            localStorage.setItem("access_token", response.data.tokens.access)
            localStorage.setItem('refresh_token', response.data.tokens.refresh)
            setSuccessLogin(true)
        }
        catch(error) {
            console.log('Error during Login!', error.response?.data)
            window.alert('An error has occured please try again!')
        }
        finally {
            setIsLoading(false)
            
        }
    }

    if (successLogin) {
        console.log('login successful!')
        return <Navigate to='/'/>
    }
    

  return (
    <div className="loginContainer">
            <form className="loginForm" onSubmit={handleSubmit}>
                <div className="resizing-2">
                    <BiSolidLogInCircle className="AiOutlineMail"/>
                    <p className="title">Login</p>
                    <p className="p-title">please login to your account</p>
                </div>

                <div className="inputGroup">
                    <div className="resizing">
                        <MdEmail className="AiOutlineMail"/>
                        <label className="label" htmlFor="email">Email</label>                        
                        </div>
                    <input
                        id="email"
                        className="input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="inputGroup">
                    <div className="resizing">
                        <RiLockPasswordFill className="AiOutlineMail"/>
                    <label className="label" htmlFor="password">Password</label>
                    </div>
                    
                    <input
                        id="password"
                        className="input"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    
                </div>
                <button className="button" disabled={isLoading} type="submit">
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
                <p className="p-title-2">Don't have an account yet click <Link className='link' to='/register'>here</Link> to register</p>
            </form>
            </div>            
  )
}

export default Login