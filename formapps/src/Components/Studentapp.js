import React, { useState } from 'react'
function Studentapp() {

    const [id, setId] = useState();

    const [name, setName] = useState();

    const [email, setEmail] = useState();

    const [mobile, setMobile] = useState();

    const [course, setCourse] = useState();

    const [students, setStudents] = useState([]);




    const register = (e) => {

        e.preventDefault();

        alert("calling register function" + name + " " + email + " " + mobile + " " + course);

        const stuObj = {

            id: id,

            name: name,

            email: email,

            mobile: mobile,

            course: course

        }

        students.push(stuObj);

        setStudents(students);

        console.log(stuObj)

        console.log("student array size", students);




    }

    const studentDelete = (e,sid)=>{

        e.preventDefault();

        alert("calling delete"+sid)

        //Find the index of the students array base on student id

        const index = students.findIndex((student)=>student.id===sid);

        alert("Student Index value "+index);

        //apply splice method for remove student

        students.splice(index,1);

    }

    const updatestudent = (e,sid)=>{

        e.preventDefault();

        alert("Updated Student Id : "+sid);

        const index = students.findIndex((student)=>student.id===sid);

        students.splice(index,1,{id,name,email,mobile,course});

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

                                <label htmlFor="exampleInputId" className="form-label">Student Id</label>

                                <input type="text" className="form-control" id="id" name="id" onChange={(e) => setId(e.target.value)} />

                            </div>

                            <div className="mb-3">

                                <label htmlFor="exampleInputName" className="form-label">Student Name</label>

                                <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} />

                            </div>

                            <div className="mb-3">

                                <label htmlFor="exampleInputEmail" className="form-label">Student Email Id</label>

                                <input type="email" className="form-control" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />

                            </div>

                            <div className="mb-3">

                                <label htmlFor="exampleInputMobile" className="form-label">Student Mobile Number</label>

                                <input type="number" className="form-control" id="mobile" name="mobile" onChange={(e) => setMobile(e.target.value)} />

                            </div>

                            <div className='mb-3'>

                                <select className="form-select" id="course" name="course" onChange={(e) => setCourse(e.target.value)}>

                                    <option selected>Open this select menu</option>

                                    <option defaultValue="ReactJs">ReactJs</option>

                                    <option defaultValue="VueJs">VueJs</option>

                                    <option defaultValue="Angular">Angular</option>

                                </select>

                            </div>

                            <div className='mb-3'>

                                <button className='btn btn-primary' onClick={register}>Register</button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

            <div className='container'>

                <div className='card'>

                    <div className='card-header'>

                        <h1>Student List</h1>

                    </div>

                    <div className='card-body'>

                        <table className='table table-striped'>

                            <thead>

                                <tr>

                                    <th>Id</th>

                                    <th>Name</th>

                                    <th>EmailId</th>

                                    <th>Mobile</th>

                                    <th>Course</th>

                                    <th colSpan={2}>Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    students.map((s, i) => {

                                        return <tr key={i}>

                                            <td>{s.id}</td>

                                            <td>{s.name}</td>

                                            <td>{s.email}</td>

                                            <td>{s.mobile}</td>

                                            <td>{s.course}</td>

                                            <td>

                                                <button

                                                className='btn btn-danger'

                                                onClick={(e)=>{studentDelete(e,s.id)}}

                                                >Delete</button>

                                            </td>

                                            <td>

                                                <button

                                                className='btn btn-primary'

                                                onClick={(e)=>{updatestudent(e,s.id)}}

                                                >Update</button>

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




export default Studentapp