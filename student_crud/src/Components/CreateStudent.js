import React, { useState } from 'react'
import StudentService from '../Service/StudentService';

function CreateStudent() {
    const[id,setId]=useState();
    const[name,setName]=useState();
    const[mobile,setMobile]=useState();
    const[email,setEmail]=useState();
    const createStudent=(e)=>
    { e.preventDefault();
        StudentService.createStudent({id:id,name:name,mobile:mobile,email:email}).then((res)=>{
             console.log("dddddddddddddd",res.data);
             
        })

    }
  return (
    <div className='container'>
        <form>
            <div className='card'>
                <div className='card-header'>
                    <h1>CreateStudent</h1>
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
                <button className='btn btn-primary' onClick={(e)=>{createStudent(e)}}>Create</button>
               </div>
               </div>
               </div>
        </form>
    </div>
  )
}

export default CreateStudent