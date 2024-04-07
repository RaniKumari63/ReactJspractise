import React, { Component } from 'react'
import RestaurantService from '../Service/RestaurantService'

export class RestaurantCreate extends Component {

  constructor(props)
  {
 super(props);
 this.state={
  id:0,
  name:null,
  address:null,
 rating:null,
 email:null,
 file:null


 }
  }
  create(e)
  { e.preventDefault();
    console.log("hai"+this.state)
   /*  RestaurantService.createRestaurant(this.state).then((res)=>{
   console.log(res);
  }) */
 RestaurantService.createRestaurant(this.state).then((res)=>{
  console.log("fff"+res)
  res.json().then((data)=>{
    console.log("fffffff",data);
   
  })
})
//window.location.reload('/list');
  }
  render() {
    return (
      <div className='card'>
      <div className='card-header'>
        <h1>RestaurantCreate</h1>
      </div>
         <div className='card-body'>
          <form>
          <div className='mb-3'>
          <label className='form-label' htmlFor='id'></label>
          <input  type='text' onChange={(event)=>{this.setState({id:event.target.value})}} className='form-control' name='id' id='id' placeholder='Enter Id' />
          </div>
          <div className='mb-3'>
          <label className='form-label' htmlFor='name'></label>
          <input  type='text' onChange={(event)=>{this.setState({name:event.target.value})}} className='form-control' name='name' id='name' placeholder='Enter Name' />
          </div>
          <div className='mb-3'>
          <label className='form-label' htmlFor='address'></label>
          <input  type='text' onChange={(event)=>{this.setState({address:event.target.value})}} className='form-control' name='address' id='address' placeholder='Enter Address' />
          </div>
          <div className='mb-3'>
          <label className='form-label' htmlFor='rating'></label>
          <input  type='text' onChange={(event)=>{this.setState({rating:event.target.value})}} className='form-control' name='rating' id='rating' placeholder='Enter Rating' />
          </div>
          <div className='mb-3'>
          <label className='form-label' htmlFor='email'></label>
          <input  type='text' onChange={(event)=>{this.setState({email:event.target.value})}}  className='form-control' name='email' id='email' placeholder='Enter Email' />
          </div>
          <div className='mb-3'>
          <label className='form-label' htmlFor='file'></label>
          <input  type='file'  accept="image/*" onChange={(event)=>{this.setState({file:URL.createObjectURL(event.target.files[0]),icon:event.target.files[0]})}} className='form-control' name='file' id='file' placeholder='Enter file'/>
          
          </div>
          <div className='mb-3'>
        
          <button className='btn btn-primary' onClick={(e)=>{this.create(e)}}>Add Restaurant</button>
          
          </div>
          </form>
         </div>
      </div>
    )
  }
}

export default RestaurantCreate