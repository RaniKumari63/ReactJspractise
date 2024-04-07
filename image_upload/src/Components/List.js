import React, { Component } from 'react'
import ProductService from './ProductService'
import { useNavigate } from 'react-router-dom'

export class List extends Component {
 navigate=useNavigate();
    constructor(){
        super()
        {
            this.state={
                products:[]
          
            }
        }
    }
    componentDidMount()
    {
       ProductService.getAllProducts().then((res)=>{
        console.log(res.data)
        this.setState({products:res.data})
       })
    }
    deleteProduct(productId)
    {
        ProductService.deleteProductById(productId).then((res)=>{
  console.log(res);
        })
        window.location.reload("/list");
    }
 updateProduct(productId,event)
 {
 event.preventDefault();
 alert("productid"+productId)
 this.navigate('/update')
 }
  render() {
    return (
      <div className='card'>
        <div className='card-header'>
            <h1>ProductList</h1>
        </div>
        <div className='card-body'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ProductId</th>
                        <th>ProductName</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.products.map((prod,index)=>{
                       return<tr key={index}>
                        <td>{prod.id}</td>
                        <td>{prod.name}</td>
                        <td>{prod.qty}</td>
                        <td>{prod.price}</td>
                        <td><img src={prod.file.blob} alt="rice bag here" width="20" height="20"/></td>
                        <td><button className="btn btn-primary" onClick={(event)=>this.updateProduct(prod.id,event)}>Update</button></td>
                        <td><button className="btn btn-danger" onClick={()=>this.deleteProduct(prod.id)}>Delete</button></td>
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