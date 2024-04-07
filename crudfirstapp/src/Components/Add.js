import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Group } from 'react-bootstrap'
import Employee from './Employee';
import {v4 as uvid} from "uvid";
import { useNavigate } from 'react-router-dom';
function Add() {
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    let history=useNavigate();

  return (
    <div>

<Form className='d-grid gap-2' style={{margin:"15rem"}}>
<Form.Group className='mb-3' controlId=
    </div>
  )
}

export default Add