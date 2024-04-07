import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import StudentService from '../Service/StudentService';

function UpdateStudent() {
    const navigate=useNavigate();
    const params=useParams();
    const[id,setId]=useState();
    const[name,setName]=useState();
    const[mobile,setMobile]=useState();
    const[email,setEmail]=useState();

    useEffect(()=>{
        StudentService.getStudentById(params.id).then((res)=>{
            setId(res.data.id)
            setName(res.data.name)
            setMobile(res.data.mobile)
            setEmail(res.data.email)
        })
    },[])
const updateStudent=(e)=>
{e.preventDefault();
    StudentService.updateStudentById(id,{id,name,mobile,email}).then((res)=>
    {
console.log(res.data)
    })
navigate('/list')
}
  return (
    <div className='container'> 
        <form>
    <div className='card'>
        <div className='card-header'>
            <h1>UpdateStudent</h1>
        </div>
       <div className='card-body'>
    <div className='mb-3'>
        <label className="form-label" htmlFor='id'>StudentId</label>
        <input type="text" className='form-control' value={id} name='id' id='id' onChange={(e)=>{setId(e.target.value)}}></input>
    </div>
    <div className='mb-3'>
        <label className="form-label" htmlFor='name'>StudentName</label>
        <input type="text" className='form-control' value={name} name='name' id='name' onChange={(e)=>{setName(e.target.value)}}></input>
    </div>
    <div className='mb-3'>
        <label className="form-label" htmlFor='mobile'>StudentMobile</label>
        <input type="number" className='form-control' value={mobile} name='mobile' id='mobile' onChange={(e)=>{setMobile(e.target.value)}}></input>
    </div>
    <div className='mb-3'>
        <label className="form-label" htmlFor='email'>StudentEmail</label>
        <input type="email" className='form-control' value={email} name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}}></input>
    </div>
    <div className='mb-3'>
        <button className='btn btn-primary' onClick={(e)=>{updateStudent(e)}}>Update</button>
       </div>
       </div>
       </div>
</form></div>
  )
}

export default UpdateStudent