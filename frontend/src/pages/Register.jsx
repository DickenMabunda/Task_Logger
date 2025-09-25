import { useState } from "react";
import axios from 'axios';
import { Navigate } from "react-router-dom";


export default function Register() {
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess]= useState(false);
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password1:'',
        password2:'',
    })

    const handleChange = (e)=> {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    
    

    const handleSubmit = async (e)=> {
        e.preventDefault();
        if (isLoading){
            return
        }
        setIsLoading(true)
        
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', formData)
            setSuccessMessage("Registration successful")
            setSuccess(true)
        }
        catch(error) {
            console.log('Error during registration!', error.response?.data)
        }
        finally {
            setIsLoading(false)
        }
    }

    if (success) {

        return <Navigate to="/login"/>

    }

  return (
    <div>
        
        <h2>Register:</h2>
        <form >

            <label>username:</label><br />
            <input 
            type='text' 
            name='username' 
            value={formData.username}
            onChange={handleChange}
            /><br />
            <br />

            <label>email:</label><br />
            <input 
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            /><br />
            <br />

            <label>password:</label><br/>
            <input
            type='password'
            name='password1'
            value={formData.password1}
            onChange={handleChange}
            /><br/>
            <br/>

            <label>comfirm password</label><br />
            <input
            type='password'
            name='password2'
            value={formData.password2}
            onChange={handleChange}
            /><br/>
            <br />
            <button type="submit" disabled={isLoading} onClick={handleSubmit}>Register</button>
        </form>
    </div>
  )
}
