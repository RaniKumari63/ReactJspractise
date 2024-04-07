import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import EmployeeServices from '../Services/EmployeeServices'
import Context from './Context'
function EmployeeList() {
    const [employees, setEmployees] = useState([])
    const useremail = useContext(Context)
    useEffect(()=>{
        EmployeeServices.getAllEmployees().then((res)=>{
 console.log(res.data);
 setEmployees(res.data);
        })
    })
    return (

        <div className="card">
            <div className="card-header">
                <h1>EmployeeList  {useremail}</h1>
            </div>
            <div className='card-body'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>EmployeeId</th>
                            <th>EmployeeName</th>
                            <th>EmployeeEmail</th>
                            <th>EmployeeMobile</th>
                            <th colSpan={2}>Actions</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            employees.map((emp, index) => {
                                return <tr key={index}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.eemail}</td>
                                    <td>{emp.mobile}</td>
                                    <td><button className='btn btn-primary'>UPDATE</button></td>
                                    <td><button className='btn btn-danger'>DELETE</button></td>
                                    </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>


    
  )
}

export default EmployeeList