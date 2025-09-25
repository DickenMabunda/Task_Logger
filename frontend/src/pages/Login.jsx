import { useState } from "react"
import axios from 'axios'
import {Navigate } from "react-router-dom"

function Login() {
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
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <label>email:</label><br/>
            <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            /><br />
            <br/>

            <label>password:</label><br/>
            <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            /><br />
            <br/>
            <button  disabled={isLoading} type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login