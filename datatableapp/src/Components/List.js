import React, { Component } from 'react'
import 'jquery/dist/jquery.min.js'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import $ from 'jquery'
import axios from 'axios'
export class List extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount()
    {
        axios.get("http://localhost:3001/users").
        then((res)=>{
this.setState({data:res.data})
        });
      
 $(document).ready(function(){
    setTimeout(function(){
        $('#usertable').DataTable();
    },1000);
 });

    }
  render() {
    return (
      <div className='card'>
        <div className='card-header'>
            <h1>UserList</h1>
        </div>
        <div className='card-body'>
            <table className='table table-hover table-bordered' id='usertable'>
               <thead>
                <tr>
                    <th>User ID</th>
                    <th>UserName</th>
                    <th>UserEmail</th>
                </tr>
                </thead> 
                <tbody>
                  {
                    this.state.data.map((user,index)=>{
                        return <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    })
                  }
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}

export default List