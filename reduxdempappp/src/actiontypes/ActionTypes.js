import {ADD_STUDENT,SET_ALL_STUDENTS} from '../constants/Constants';
export const setAllStudents=((students)=>{
   return{ type:SET_ALL_STUDENTS,
    payload:students
   }
})
export const addStudents=(()=>{
    return{
        type:ADD_STUDENT,
        payload:student
    }
})