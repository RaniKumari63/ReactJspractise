import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../Service/EmployeeService';

function UpdateEmployee() {
    //const{id}=useParams();
    const navigate=useNavigate();
    const[eid,setEid]=useState();
    const[ename,setEname]=useState();
    const[emobile,setEmobile]=useState();
    const[eemail,setEemail]=useState();
 const params=useParams();
 useEffect(()=>
 {
EmployeeService.getEmployeeById(params.id).then((res)=>{
   // console.log("employee object",res.data)
setEid(res.data.id);
setEname(res.data.ename);
setEmobile(res.data.emobile)
setEemail(res.data.eemail);
})
 },[]);

 const updateEmployee=(e)=>
 {
    e.preventDefault();
    EmployeeService.updateEmployeeById(eid,{eid,ename,emobile,eemail}).then((res)=>
    {
        console.log(res.data);
    })
    navigate("/list");
 }

  return (
    <div className='container'>
         <form>
         <div className="mb-3">
                <label className='form-label' htmlFor='eid'>EmployeeId</label>
                <input type="text" className='form-control' name='eid' value={eid} id='eid' onChange={(e)=>{setEid(e.target.value)}}></input>
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
               <button className='btn btn-primary' onClick={(e)=>{updateEmployee(e)}} >Update</button>
            </div>
        </form>
    </div>
  )
}

export default UpdateEmployee;