import React, { useState } from 'react'
import EmployeeService from '../Service/EmployeeService';

function CreateEmployee() {
    const[id,setEid]=useState();
    const[ename,setEname]=useState('');
    const[emobile,setEmobile]=useState('');
    const[eemail,setEemail]=useState('');

    const createEmployee=(e)=>
    { e.preventDefault();
        EmployeeService.createEmployee({id:id,ename:ename,emobile:emobile,eemail:eemail}).then((res)=>{
            console.log("aaaaaaaaaaaaa"+res);
            
        })

    }
  return (
    <div className='container'>
        <form>
            <div className="mb-3">
                <label className='form-label' htmlFor='id'>EmployeeId</label>
                <input type="text" className='form-control' name='id' value={id} id='id' onChange={(e)=>{setEid(e.target.value)}}></input>
            </div>
            <div className="mb-3">
                <label className='form-label' htmlFor='ename'>EmployeeName</label>
                <input type="text" className='form-control' name='ename' value={ename} id='ename' onChange={(e)=>{setEname(e.target.value)}}></input>
            </div>
            <div className="mb-3">
                <label className='form-label' htmlFor='emobile'>EmployeeMobile</label>
                <input type="text" className='form-control' name='emobile' value={emobile} id='emobile' onChange={(e)=>{setEmobile(e.target.value)}}></input>
            </div>
            <div className="mb-3">
                <label className='form-label' htmlFor='eemail'>EmployeeEmail</label>
                <input type="text" className='form-control' name='eemail' value={eemail} id='eemail' onChange={(e)=>{setEemail(e.target.value)}}></input>
            </div>
            <div className="mb-3">
               <button className='btn btn-primary' onClick={(e)=>{createEmployee(e)}}>Create</button>
            </div>
        </form>
    </div>
  )
}

export default CreateEmployee