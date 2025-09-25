import { useState } from "react";
import axios from 'axios';
import { Navigate } from "react-router-dom";
/* My Fonts*/
import { GiArchiveRegister } from 'react-icons/gi';
import { MdOutlinePassword } from 'react-icons/md';
import { PiPasswordBold } from 'react-icons/pi';
import { MdEmail } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';

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
    
    // const handleSubmit = async (e)=> {
    //     e.preventDefault();
        
    //     try {
    //         if (isLoading){
    //         return
    //         }
    //     setIsLoading(true)
    //         await axios.post('http://127.0.0.1:8000/api/register/', formData)
    //         setSuccessMessage("Registration successful")
    //         console.log(setSuccessMessage)
    //         setSuccess(true)
    //     }
    //     catch(error) {
    //         console.log('Error during registration!', error.response?.data)
    //     }
    //     finally {
    //         setIsLoading(false)
    //     }
    // }
    
    const handleSubmit = async (e)=> {
        e.preventDefault()
        try {
            const res = await axios.post("http://127.0.0.1:8000/api/register/", formData)
            if (res.status == "201") {
                console.log("User created successfully with status: 201")

                // Needs to be looked at //
            }
        }
        catch(error) {
            console.log(error.response.data.username,error.response.data.email)
        }
    }

  return (
    // <div>
        
    //     <h2>Register:</h2>
    //     <form >

    //         <label>username:</label><br />
    //         <input 
    //         type='text' 
    //         name='username' 
    //         value={formData.username}
    //         onChange={handleChange}
    //         /><br />
    //         <br />

    //         <label>email:</label><br />
    //         <input 
    //         type='email'
    //         name='email'
    //         value={formData.email}
    //         onChange={handleChange}
    //         /><br />
    //         <br />

    //         <label>password:</label><br/>
    //         <input
    //         type='password'
    //         name='password1'
    //         value={formData.password1}
    //         onChange={handleChange}
    //         /><br/>
    //         <br/>

    //         <label>comfirm password</label><br />
    //         <input
    //         type='password'
    //         name='password2'
    //         value={formData.password2}
    //         onChange={handleChange}
    //         /><br/>
    //         <br />
    //         <button type="submit" disabled={isLoading} onClick={handleSubmit}>Register</button>
    //     </form>
    // </div>

    <div className="registerContainer">
            <form className="registerForm" onSubmit={handleSubmit}>
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

                <button className="button" type="submit" disabled={isLoading}>
                    {isLoading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
  )
}
