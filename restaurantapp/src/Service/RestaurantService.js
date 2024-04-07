import axios from 'axios'
const baseUrl="http://localhost:3001/restaurant"
class RestaurantService
{
getAllRestaurants()
{
   //return axios.get(baseUrl)
    return fetch(baseUrl)

}
getRestaurantById(restaurantId)
{
  return axios.get(baseUrl+"/"+restaurantId);
}
searchRestaurant(key)
{
  // return axios.get("http://localhost:3001/restaurant?q="+key)

  return fetch("http://localhost:3001/restaurant?q="+key)
}
createRestaurant(restaurant)
{
  //return axios.post(baseUrl,restaurant);
  return fetch(baseUrl,{
    method:"POST",
     headers:{
       'Content-Type':'application/json'},
       body:JSON.stringify(restaurant)
     });
}

deleteRestaurant(restaurantId)
{
  //return axios.delete(baseUrl+"/"+restaurantId);
  return fetch(baseUrl+"/"+restaurantId,{
    method:"DELETE"
  })
}


}
export default new RestaurantService()