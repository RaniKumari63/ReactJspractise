import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import EmployeeList from './EmployeeList';
import CreateEmployee from './CreateEmployee';
import Context from './Context';
function Employee() {
    const [email, setEmail] = useState();
   
    useEffect(() => {
        setEmail(localStorage.getItem("key"));

    })
    return (


        <div>
            <Context.Provider value={email}>
                <EmployeeList />
                <CreateEmployee />
            </Context.Provider>
            <ul>
                <li>
                    <a href={<EmployeeList />}>EmployeeList</a>
                </li>
                <li>
                    <a href={<CreateEmployee />}>CreateEmployee</a>
                </li>
                <li>
                    Hai {email}
                </li>
            </ul>
        </div>

    )
}

export default Employee