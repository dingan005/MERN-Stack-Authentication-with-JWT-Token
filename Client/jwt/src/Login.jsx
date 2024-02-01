import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
const navigate =useNavigate()

axios.defaults.withCredentials=true;
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(res=>{
          if(res.data.Status === "Success"){
            if(res.data.role === "admin"){
                navigate('/dashboard')
            }else{
                navigate('/')
            }
          }
        }).catch(err=> console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
               
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="email"
                    placeholder="Enter Email"
                    autoComplete="off"
                     className="form-control rounded-0"
                      name="email"
                      onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="password"
                    placeholder="Enter Password"
                    autoComplete="off"
                     className="form-control rounded-0"
                      name="password"
                      onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
            </form>
            <p>Already Have an Account</p>
            <Link to="/register"  className="btn btn-default border w-100 bg=light rounded-0">Sign Up</Link>
                  </div>
    </div>
  )
}



export default Login