import React, { Component } from 'react'
import { Form } from 'react-router-dom'
import RestaurantService from '../Service/RestaurantService'

export class RestaurantSearch extends Component {
  constructor()
  {
    super()
   this.state={
    searchData:null,
    noData:false,
    lastSearch:""
   }
  }
  search(key)
  {
    this.setState({lastSearch:key})
  /*   RestaurantService.searchRestaurant(key).then((res)=>{
      if(res.data.length>0)
      {
        this.setState({searchData:res.data,noData:false})
      }
      else{
        this.setState({searchData:null,noData:true})
      }
    }) */
    RestaurantService.searchRestaurant(key).then((res)=>{
      res.json().then((data)=>{
        if(data.length>0)
      {
        this.setState({searchData:data,noData:false})
      }
      else{
        this.setState({searchData:null,noData:true})
      }     

      })
    })

  }
  render() {
    return (
      <div className='container'>
        <div className='card-header'>
<h1>RestaurantSearch</h1>
<input type='text' onChange={(event)=>this.search(event.target.value)}  placeholder="Search restaurant" />
        </div>
        <div className='card-body'>
    <table className='table table-striped'>
      <thead>
      <tr>
                    <th>
                        RestaurantId
                    </th>
                    <th>
                        RestaurantName
                    </th>
                    <th>
                        RestaurantAddress
                    </th>
                    <th>
                        RestaurantRating
                    </th>
                    <th>
                        RestaurantEmail
                    </th>
                    <th>
                        RestaurantFile
                    </th>
                </tr>
      </thead>
<tbody>
  { this.state.searchData?this.state.searchData.map((item,index)=>{
     return <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.rating}</td>
        <td>{item.email}</td>
        <td><img src={item.file.blob} alt="rice bag here" width="20" height="20"/></td>
     </tr>

  }):""
    
  }
</tbody>
     </table>
        </div>
      </div>
    )
  }
}

export default RestaurantSearch