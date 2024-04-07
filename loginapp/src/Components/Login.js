import React, { useState } from 'react'
import LoginService from '../Services/LoginService';
import {useNavigate} from 'react-router-dom'
function Login() {
    const navigate=useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const login=(e)=>
    {e.preventDefault();
     
        LoginService.login(email,password).then((res)=>{
            alert(res.data[0].password);
            if(res.data[0].password===password)
            {
                localStorage.setItem("key",res.data[0].email);
                navigate('/dashboard')
            }
            else{
                alert("login failed")
            }
        })

       
    }
    return (
        <div className='card'>
            <div className='card-header'>
                <h1>Login Application</h1>
            </div>
            <div className='card-body'>
                <form>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='id'>EnterUserName</label>
                        <input type='text' className='form-control' name='email' id='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='password'>EnterPassword</label>
                        <input type='password' name='password'className='form-control' id='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className='mb-3'>
                      <button className='btn btn-primary' onClick={(e)=>{login(e)}}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login