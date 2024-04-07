import React, { useEffect, useState } from 'react'
import EmployeeService from '../Service/EmployeeService'
import { useNavigate } from 'react-router-dom';

function EmployeeList() {
    const [employees, setEmployees] = useState([])
const  navigation=useNavigate();
    useEffect(() => {
        EmployeeService.getAllEmployees().then((res) => {
            console.log(res.data)
            setEmployees(res.data);
        })
    }, [])
const updateEmployee=(e,employeeId)=>
{
    e.preventDefault();
  //  EmployeeService.updateEmployeeById(employeeId)
alert("employeeID"+employeeId)
navigation('/update/'+employeeId);
}
const deleteEmployee=(employeeId)=>
{

EmployeeService.deleteEmployeeById(employeeId).then((res)=>{
  
})
window.location.reload('/list');
}
    return (
        <div className="card">
            <div className="card-header">
                <h1>EmployeeList</h1>
            </div>
            <div className="card-body">
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>EmployeeId</th>
                            <th>EmployeeName</th>
                            <th>EmployeeMobile</th>
                            <th>EmployeeEmail</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((emp, i) => {
                                return <tr key={i}>
                                    <td>{emp.id}</td>
                                    <td>{emp.ename}</td>
                                    <td>{emp.emobile}</td>
                                    <td>{emp.eemail}</td>
                                    <td><button className='btn btn-success' style={{marginRight:10}}onClick={(e)=>{updateEmployee(e,emp.id)}}>UPDATE</button></td>
                                    <td><button className='btn btn-danger' onClick={()=>{deleteEmployee(emp.id)}}>DELETE</button></td>

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