import axios from 'axios'
const baseUrl="http://localhost:3001/users";
class LoginService
{
    login(email,password)
    {
        return axios.get("http://localhost:3001/users?email="+email+"&password="+password);    }

}
export default new LoginService();