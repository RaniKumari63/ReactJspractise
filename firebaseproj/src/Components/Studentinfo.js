import React from 'react'
import {db} from '../firebase-config'
import {collection,getDocs} from 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';
const Studentinfo = () => {
  const[studentObj,setStudentObj]=useState({});
 const studentCollection=collection(db,"student")
  return (
    <div>
      <div className='card'>
        <div className='card-header'>
          <h1>StudentInfromationDetails</h1>
        </div>
        <div className='card-body'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>SID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Moblie</th>

          </tr>
        </thead>
        <tbody>
          {
           Object.keys(studentObj).map((key)=>{
  return  <tr key={key}>

<td>{studentObj[key].sid}</td>
<td>{studentObj[key].sname}</td>
<td>{studentObj[key].email}</td>
<td>{studentObj[key].mobile}</td>

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

export default Studentinfo