import axios from 'axios';
const baseUrl = "http://localhost:3001/employees";
class EmployeeService {

    createEmployee(employee) {
       
        return axios.post(baseUrl, employee);
       
        
    }
    getAllEmployees() {
        return axios.get(baseUrl);
    }
    getEmployeeById(employeeId) {
        return axios.get(baseUrl + '/'+ employeeId);
    }

    updateEmployeeById(employeeId, employee) {
        return axios.put(baseUrl + '/' + employeeId, employee);
    }
    deleteEmployeeById(employeeId)
    {
        return axios.delete(baseUrl+'/'+employeeId);
    }

}
export default new EmployeeService();