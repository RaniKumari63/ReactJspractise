import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap'
import Employee from './Employee';
import{Link,useNavigate} from 'react-router-dom'
function Home() {
    let history=useNavigate();
   const handleDelete=(id)=>
   {
    //var index=Employee.map((e)=>{return e.id}).indexOf
    var index=Employee.findIndex((employee)=>employee.id===id)
    Employee.splice(index,1)
    history("/")
   }
   const handleEdit=(id)=>
   {
    //var index=Employee.map((e)=>{return e.id}).indexOf
    var index=Employee.findIndex((employee)=>employee.id===id)
    Employee.splice(index,1,{id,Age,Name})
   }
    return (
        <div style={{ margin: "10rem" }}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        Employee && Employee.length > 0
                            ?
                            Employee.map((item,i) => {
                                return (
                                    <tr key={i}>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Age}
                                        </td>
                                        <td colSpan={2}>
<Link to={'/edit'}>                                          
<Button onClick={()=>handleEdit(item.id)}>EDIT</Button>
</Link>
&nbsp;
<Button onClick={()=>handleDelete(item.id)}>DELETE</Button>
                                        </td>
                                    </tr>)
                            }) : "No data available"
                    }
                </tbody>
            </Table>
<br></br>
<Link className="d-grid gap-2" to="/create">
    <Button size="lg">Create </Button>
</Link>
        </div>
    )
}

export default Home