import React, { Component } from 'react'
import ProductService from './ProductService';

export class Create extends Component {

    formData=new FormData();
    constructor()
    {
        super();
        this.state={
        id:'',
        name:'',
        qty:'',
        price:'',
        file:'',

        };
    }

    createProduct(e)
    {
        e.preventDefault();
        let product={
            id:this.state.id,
            name:this.state.name,
            qty:this.state.qty,
            price:this.state.price,
            file:this.state.file

        }
        ProductService.createService(product).then((res)=>{console.log(res)});
    }
  render() {
    return (
      <div className='card'>
        <div className='card-header'>
<h1>CreateProduct</h1>
        </div>
        <div className='card-body'>
          <form>
            <div>
               <div className='mb-3'>
                <label className='form-label' htmlFor='id'>ProductId</label>
                <input type="text" className='form-control' name='id' id='id' onChange={(e)=>{this.setState({id:e.target.value})}}/>
               </div>
               <div className='mb-3'>
                <label className='form-label' htmlFor='name'>ProductName</label>
                <input type="text" className='form-control' name='name' id='name' onChange={(e)=>{this.setState({name:e.target.value})}}/>
               </div>
               <div className='mb-3'>
                <label className='form-label' htmlFor='qty'>ProductQty</label>
                <input type="text" className='form-control' name='qty' id='qty' onChange={(e)=>{this.setState({qty:e.target.value})}}/>
               </div>
               <div className='mb-3'>
                <label className='form-label' htmlFor='price'>ProductPrice</label>
                <input type="text" className='form-control' name='price' id='price' onChange={(e)=>{this.setState({price:e.target.value})}}/>
               </div>
               <div className='mb-3'>
                <label className='form-label' htmlFor='file'>ProductImage</label>
                <input type="file" className='form-control' name='file' id='file' accept="image/*" onChange={(e)=>this.setState({file:URL.createObjectURL(e.target.files[0]),icon:e.target.files[0]})}/>
               </div>
               <div className='mb-3'>
               <input type="submit" value="Create" className="btn btn-primary" onClick={(e)=>this.createProduct(e)}/>
               </div>
 {this.state.id}{this.state.name}{this.state.qty}{this.state.price}
 {this.state.file}
            </div>


</form>
        </div>
      </div>
    )
  }
}

export default Create