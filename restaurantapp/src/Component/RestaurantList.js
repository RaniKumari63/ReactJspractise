import React, { Component } from 'react'
import RestaurantService from '../Service/RestaurantService'
import {Link, useNavigate,useHistory} from 'react-router-dom'
import 'jquery/dist/jquery.min.js'
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import {browserHistory} from 'react-router'
import $ from 'jquery'
export class RestaurantList extends Component {

    constructor() {
        super()

        this.state = {
            restaurant: []
        }


    }
    componentDidMount() {
        RestaurantService.getAllRestaurants().then((res) => {

            res.json().then((data) => {

                this.setState({ restaurant: data })

            })
        })
        /*  RestaurantService.getAllRestaurants().then((res)=>{
      
          this.setState({restaurant:res.data})
         }) */

         /* $(document).ready(function () {
            setTimeout(function () {
                $('#table').DataTable();
            }, 1000);
        });  */
    }
    delete(restaurantId) {
        alert("Delete" + restaurantId);
       /*  RestaurantService.deleteRestaurant(restaurantId).then((res) => {
            console.log("gggggggffff" + res.status);
        }) */

        RestaurantService.deleteRestaurant(restaurantId).then((res)=>
        { res.json().then((data)=>
            {
                console.log(data);
            })

        })
        window.location.reload('/list')
    }
    details(restaurantId) {
        alert("Delete" + restaurantId);
       /*  RestaurantService.deleteRestaurant(restaurantId).then((res) => {
            console.log("gggggggffff" + res.status);
        }) */

      browserHistory.push('/details'+restaurantId)
    }
    render() {
        return (
            <div className='card'>
                <div className='card-header'>
                    <h1>RestuarantList</h1>
                </div>
                {
                    this.state.restaurant ?
                        <div className='card-body'>
                            <table id='table' className='table table-striped'>
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
                                        <th colSpan={3}>Actions</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {
                                        this.state.restaurant.map((data, index) => {

                                            return <tr key={index}>
                                                <td>{data.id}</td>
                                                <td>{data.name}</td>
                                                <td>{data.address}</td>
                                                <td>{data.rating}</td>
                                                <td>{data.email}</td>
                                                <td><img src={data.file.blob} alt="rice bag here" width="20" height="20" /></td>
                                                <td><button className='btn btn-danger' onClick={() => { this.delete(data.id) }}>Delete</button></td>
                                                <td><button className='btn btn-success'>Update</button></td>
                                              {/*   <td><span><Link to={'/details/1'} className='btn btn-info'>Details</Link></span></td> */}
                                            <td><button className='btn btn-info' onClick={() => { this.details(data.id)} }>Details</button></td>
                                        </tr>
                                        })


                                    }
                                </tbody>
                            </table>
                        </div>
                        : <p>Please Wait</p>
                }
            </div>
        )
    }
}

export default RestaurantList