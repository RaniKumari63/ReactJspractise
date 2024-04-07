import React, { useState } from 'react'


function Customer() {

    const[cid,setCid]=useState();
    const[cname,setCname]=useState();
    const[cemail,setCemail]=useState();
    const[cmobile,setCmobile]=useState();
    const[ccourse,setCcourse]=useState();
    const[customers,setCustomers]=useState([]);

    const register=(e)=>
    {
        e.preventDefault();
        const CustObj={
           cid:cid,
           cname:cname,
           cemail:cemail,
           cmobile:cmobile,
           ccourse:ccourse

        }

        customers.push(CustObj);
        setCcourse(customers);
        console.log(customers.length)
        console.log(customers)
    }
 const cusEdit=(e,id)=>
 {
    e.preventDefault();
    alert("edit customer"+id)

 }
 const cusDele=(e,id)=>
 { e.preventDefault();
alert("Deleted Customer id: "+id);

 }

  return (
    <div>
        <div className="container">
<div className="card">
    <div className="card-header">
        <h1>Customer Registration Form</h1>
    </div>
    <div className="card-body">
        <form>
    <div class="mb-3">
    <label for="exampleInputId" class="form-label">CustomerId</label>
    <input type="text" class="form-control" id="exampleInputId" name="cid" onChange={(e)=>setCid(e.target.value)}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputName" class="form-label">CustomerName</label>
    <input type="text" class="form-control" id="exampleInputName" name="cname" onChange={(e)=>setCname(e.target.value)}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail" class="form-label">CustomerEmail</label>
    <input type="email" class="form-control" id="exampleInputEmail" name="cemail" onChange={(e)=>setCemail(e.target.value)}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputMobile" class="form-label">CustomerMobile</label>
    <input type="number" class="form-control" id="exampleInputMobile" name="cmobile" onChange={(e)=>{setCmobile(e.target.value)}} />
    
  </div>
  <div>
  <select class="form-select" id="ccourse" name="ccourse" onChange={(e)=>{setCcourse(e.target.value)}}>
  <option selected>Open this select menu</option>
  <option value="cus1">Cus1</option>
  <option value="cus2">Cus2</option>
  <option value="cus3">Cus3</option>
</select>
</div>
<div className="mb-3">
<button className='btn btn-primary' onClick={register}>Register</button>
</div>

</form>
    </div>
</div>
        </div>
        <div className="container">
<div className="card">
    <div className="card-header">
        <h1>CustomerList</h1>
    </div>
    <div className="card-body">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Cid</th>
                    <th>Cname</th>
                    <th>Cemail</th>
                    <th>Cmobile</th>
                    <th>Ccourse</th>
                </tr>
            </thead>

            <tbody>
               { customers.map((customer,index)=> {
           return<tr key={index}>
                <td>{customer.cid}</td>
                <td>{customer.cname}</td>
                <td>{customer.cemail}</td>
                <td>{customer.cmobile}</td>
                <td>{customer.ccourse}</td>
                <td colSpan={2}>
                    <button className='btn btn-primary' onClick={(e)=>cusEdit(e,customer.cid)}>EDIT</button>
                <button className='btn btn-danger' onClick={(e)=>cusDele(e,customer.cid)}>DELETE </button>
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

export default Customer