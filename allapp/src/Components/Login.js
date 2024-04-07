import React from 'react'
import { useState } from 'react';
import LoginService from '../Services/LoginService';
import {useNavigate} from 'react-router-dom'
function Login() {
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const navigate=useNavigate();
  const login=(e)=>
  {
    e.preventDefault()
    LoginService.login(email,password).then((res)=>{
      
      if(res.data[0].password===password)
      {
          localStorage.setItem("key",res.data[0].email);
       
        navigate("/employee")
      }
      else{
          alert("login failed")
      }
    })
  }
  return (
    <div className='card'>
      <div className='card-header'>
        <h1>Login</h1>
      </div>
      <div className='card-body'>
        <div className='mb-3'>
          <label className='form-label' htmlFor='email'>Email</label>
          <input type="text" className='form-control' name='email' id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor='password'>Password</label>
          <input type="password" className='form-control' name='password' id='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div className='mb-3'>
        <button className='btn btn-primary' onClick={(e)=>{login(e)}}>Login</button>
        </div>

      </div>
    </div>
  )
}

export default Login