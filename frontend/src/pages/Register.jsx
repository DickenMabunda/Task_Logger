import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
/* My Fonts*/
import { GiArchiveRegister } from 'react-icons/gi';
import { MdOutlinePassword } from 'react-icons/md';
import { PiPasswordBold } from 'react-icons/pi';
import { MdEmail } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';

export default function Register() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess]= useState("false");
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
        e.preventDefault()
        try {
            setIsLoading(true)
            const res = await axios.post("http://127.0.0.1:8000/api/register/", formData)
            if (res.status == "201") {
                console.log("User created successfully with status: 201")
                setSuccess("true")
            }
            else {
                setSuccess("false")
            }
        }
        catch(error) {
            console.log(error.response.data.username,error.response.data.email)
            setIsLoading(false)
            
        }
        finally {
            setIsLoading(false) // setting the button disabled regardless of the response 
            console.log("process complete")
        }
    }
    
    
    useEffect(()=> {
        /* used the hook to check if the success variable changed so we can redirect to the login page */
        console.log('useEffect ran ')
        if (success == "true") {    
            setSuccess(false)
            return navigate('/login')
        }
    },[success])

  return (
    <div className="registerContainer">
            <form className="registerForm">
                 <div className="resizing-2">
                    <GiArchiveRegister className="AiOutlineMail"/>
                    <p className="title">Create Account</p>
                    <p className="p-title">please fill in your details to register</p>
                 </div>
                
                <div className="inputGroup">
                    <div className="resizing">
                        <FaRegUserCircle className="AiOutlineMail"/>
                        <label className="label" htmlFor="username"> Username</label>
                    </div>
                    
                    <input
                        id="username"
                        className="input"
                        type='text'
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="inputGroup">
                    <div className="resizing">
                        <MdEmail className="AiOutlineMail"/>
                        <label className="label" htmlFor="email">Email</label>
                    </div>
                    
                    <input
                        id="email"
                        className="input"
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="inputGroup">
                    <div className="resizing">
                        <PiPasswordBold  className="AiOutlineMail"/>
                        <label className="label" htmlFor="password1">Password</label>
                    </div>
                    
                    <input
                        id="password1"
                        className="input"
                        type='password'
                        name='password1'
                        value={formData.password1}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="inputGroup">
                    <div className="resizing">
                        <MdOutlinePassword  className="AiOutlineMail"/>
                        <label className="label" htmlFor="password2">Confirm Password</label>
                    </div>                    
                    <input
                        id="password2"
                        className="input"
                        type='password'
                        name='password2'
                        value={formData.password2}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button onClick={handleSubmit}className="button" type="submit" disabled={isLoading}>
                    {isLoading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
  )
}
