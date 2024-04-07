import React, { Component } from 'react'
import RestaurantService from '../Service/RestaurantService';

export class RestaurantDetail extends Component {
 
constructor(props)
{
  super(props);
  this.state={
    id:null,
    name:null,
    address:null,
    rating:null,
    email:null,
    file:null
  }
}

componentDidMount()
{
  console.log("llllllllllllllll"+this.props.params.id)
  RestaurantService.getRestaurantById(this.props.match.params.id).then((res)=>{
this.setState({id:res.id,
      name:res.name,
      address:res.address,
      rating:res.rating,
      email:res.email,
      file:res.file
});
  })
}
back()
{
  window.location.reload('/list')
}


  render() {
    return (
      <div className='card'>
<div className='card-header'>
  <h1>RestaurantDetails</h1>
</div>
<div className="card-body">
        <table className='table table-striped table-bordered table-hover' >
          <tr>
            <td>RestaurantId</td>
            <td>{this.state.id}</td>
          </tr>
          <tr>
            <td>RestaurantName</td>
            <td>{this.state.name}</td>
          </tr>
          <tr>
            <td>RestaurantAddress</td>
            <td>{this.state.address}</td>
          </tr>
          <tr>
            <td>RestaurantRating</td>
            <td>{this.state.rating}</td>
          </tr>
          <tr>
            <td>RestaurantEmail</td>
            <td>{this.state.email}</td>
          </tr>
          <tr>
            <td>RestaurantFile</td>
            <td>{this.state.file}</td>
          </tr>
        </table>
        <button onClick={()=>{this.back()}} className='btn btn-primary'>Back</button>
        </div>
      </div>
    )
  }
}

export default RestaurantDetail