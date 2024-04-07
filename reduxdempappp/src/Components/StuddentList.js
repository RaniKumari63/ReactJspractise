import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {setAllStudents} from "../actiontypes/ActionTypes";
const StudentList=()=>{

    const state=useSelector((state)=>state);
    const dispatch=useDispatch();
    useEffect(()=>{
fetch("http://localhost:3001"/students).then((res)=>res.json().then((data)=>{
dispatch(setAllStudents(data))

}))
    },[]);

}