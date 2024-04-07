import React, { useEffect, useState } from 'react'
import StudentService from '../Service/StudentService'
import { useNavigate } from 'react-router-dom';
function StudentList() {
    const navigate=useNavigate();
    const [students, setStudents] = useState([]);
    useEffect(() => {
        StudentService.getAllStudent().then((res) => {
            console.log(res.data);
            setStudents(res.data);
        })
    }, [])
const updateStudent=(e,studentId)=>
{
e.preventDefault();

navigate('/update/'+studentId);
}
    const deleteStudent=(studentId)=>{
          StudentService.deleteStudentById(studentId).then((res)=>{
            console.log(res);
          })
          window.location.reload('/list');
    }
    return (
        <div className="container">
            <div className='card'>
                <div className='card-header'>
                    <h1>StudentList</h1>
                </div>
                <div className='card-body'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>StudentId</th>
                                <th>StudentName</th>
                                <th>StudentMobile</th>
                                <th>StudentEmail</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                students.map((stu, index) => {
                                    return <tr key={index}>
                                        <td>{stu.id}</td>
                                        <td>{stu.name}</td>
                                        <td>{stu.mobile}</td>
                                        <td>{stu.email}</td>
                                        <td><button className='btn btn-success' onClick={(e)=>{updateStudent(e,stu.id)}} style={{ marginRight: 5 }}>UPDATE</button></td>
                                        <td><button className='btn btn-danger' onClick={() => { deleteStudent(stu.id) }}>DELETE</button></td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default StudentList