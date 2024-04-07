import React from 'react'
import {auth} from '../config/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'
const Authapp = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    
    const signIn=async()=>{
 await createUserWithEmailAndPassword(auth,email,password);
    }
  return (
    <div>
        <input placeholder='Email...' onChange={(e)=>setEmail(e.target.value)}/>
        <input placeholder='Password...' onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={signIn}>Sign In</button>
    </div>
  )
}

export default Authapp