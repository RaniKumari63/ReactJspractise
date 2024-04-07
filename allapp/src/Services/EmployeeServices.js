import axios from 'axios'
const baseUrl= "http://localhost:3001/employees";
class EmployeeService
{
getAllEmployees()
{
    return axios.get(baseUrl);
}
}
export default  new EmployeeService();