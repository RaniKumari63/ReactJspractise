import axios from 'axios'
const baseUrl="http://localhost:3001/products"
class ProductService
{
createService(product)
{ alert(product);
    return axios.post(baseUrl,product)
}
getAllProducts()
{
    return axios.get(baseUrl)
}
getProductById(productId)
{
return axios.get(baseUrl+"/"+productId)
}
updateProductById(productId,product)
{
    return axios.put(baseUrl+"/"+productId,product)

}
deleteProductById(productId)
{
return axios.delete(baseUrl+"/"+productId)
}
}
export default new ProductService();