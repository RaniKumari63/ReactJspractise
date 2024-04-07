import React, { useEffect, useState } from 'react'

function Dashboard() {
  const[email,setEmail]=useState();
  useEffect(()=>{
    setEmail(localStorage.getItem("key"))
  },[])
  return (
    <div><h1>Welcome to Dashboard:{email} </h1></div>
  )
}

export default Dashboard