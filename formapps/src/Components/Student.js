import React, { useState } from 'react'

function Student() {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [course, setCourse] = useState();
    const [students, setStudents] = useState([]);

    const register = (e) => {
        e.preventDefault();
        alert("calling register button" + name + email + mobile + id + course)
        const stuObj = {
            id: id,
            name: name,
            email: email,
            mobile: mobile,
            course: course
        }
        students.push(stuObj);
        setStudents(students)
        console.log(students.length);
        console.log(students)
        console.log(stuObj)



    }

    const stuDele = (e, id) => {
        e.preventDefault();

        //setStudents(students.filter((s,id)=>s.id!==id));


        const index = students.findIndex((student) => student.id === id)

        setStudents(students.splice(index, 1));
    }


    const stuEdit = (e, id) => {
        e.preventDefault();
        alert("Edit Student Id:id")

        const index = students.findIndex((student) => student.id === id)
        setStudents(students.splice(index, 1,{id,name,email,mobile,course}));

    }
    return (
        <div>
            <div className='container'>
                <div className='card' style={{ marginTop: 20 }}>
                    <div className='card-header'>
                        <h1>Student Registration Form</h1>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputId" className="form-label">StudentId</label>
                                <input type="text" className="form-control" id="exampleInputId" name="sid" onChange={(e) => setId(e.target.value)} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">StudentName</label>
                                <input type="text" className="form-control" id="exampleInputName" name="sname" onChange={(e) => setName(e.target.value)} />

                            </div>


                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail" className="form-label">StudentEmail</label>
                                <input type="email" className="form-control" id="exampleInputEmail" name="semail" onChange={(e) => setEmail(e.target.value)} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputMobile" className="form-label">StudentMobileNumber</label>
                                <input type="number" className="form-control" id="exampleInputMobile" name="smobile" onChange={(e) => setMobile(e.target.value)} />

                            </div>
                            <div className="mb-3">
                                <select className="form-select" id="course" name="course" onChange={(e) => setCourse(e.target.value)}>
                                    <option selected>Open this select menu</option>
                                    <option value="ReactJs">ReactJs</option>
                                    <option value="VueJs">VueJs</option>
                                    <option value="Angular">Angular</option>
                                </select>
                            </div>
                            <div className='mb-3'>
                                <button className='btn btn-primary' onClick={register}>Register</button>
                            </div>

                            {id}{name}{email}{mobile}{course}

                        </form>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h1>Student List</h1>
                    </div>
                    <div className="card-body">

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Course</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, index) => {
                                    return <tr key={index}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.mobile}</td>
                                        <td>{student.course}</td>
                                        <td colSpan={2}>
                                            <button className="btn btn-danger" onClick={(e) => stuDele(e, student.id)}>DELETE</button>
                                            <button className="btn btn-primary" onClick={(e) => stuEdit(e, student.id)}>Edit</button>
                                        </td>
                                    </tr>
                                })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Student