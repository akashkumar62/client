import { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import axios from "axios"

function Register() {
    const [username,setUsername]=useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const handleSubmit= async (e)=>{
        e.preventDefault();
        setError(false)
        try{
            const res = await axios.post("https://advanced-blog-app.onrender.com/api/auth/register",
                {
                    username, email, password
                });
                res.data && window.location.replace("/login")
        }
        catch(err){
            console.log(err);
            setError(true)
        }
       
       
    }
    return (
        <div className='register'>
        <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit} >
                <label >Username</label>
                <input className='registerInput' type="text" placeholder='Enter Your Name'
                 onChange={e=>setUsername(e.target.value)}
                />
                <label >Email</label>
                <input className='registerInput' type="email" placeholder='Enter Your Email'
                    onChange={e => setEmail(e.target.value)}
                />
                <label >Password</label>
                <input className='registerInput' type="password" placeholder='Enter Your Password'
                    onChange={e => setPassword(e.target.value)}
                />
                <button className='registerButton' type='submit'>
                    REGISTER
                </button>
            </form>
            <button className='registerLoginButton'>
                <Link className='link' to="/login">
                    LOGIN
                </Link>
            </button>
            {error && <span style={{ color: "black", marginTop: "10px" }}>Something went wrong!Add Unique Username</span>}
        </div>
    )
}

export default Register
