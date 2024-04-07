import axios from 'axios'
const baseUrl=" http://localhost:3001/students";
class StudentService
{
    createStudent(student)
    {
    return axios.post(baseUrl,student)
    }
    getAllStudent()
    {
        return axios.get(baseUrl);
    }
    getStudentById(studentId)
    {
    return axios.get(baseUrl+"/"+studentId);
    }
    updateStudentById(studentId,student)
    {
        return axios.put(baseUrl+"/"+studentId,student);
    }
    deleteStudentById(studentId)
    {
    return axios.delete(baseUrl+"/"+studentId);
    }

}
export default new StudentService();