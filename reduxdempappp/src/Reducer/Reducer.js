import {ADD_STUDENT,SET_ALL_STUDENTS} from  "../constants/Constants.js"

const initialState={
   students:[] 
}
const studentReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case SET_ALL_STUDENTS:
        {
return {
    ...state,
    students:action.payload
}
        }
        case ADD_STUDENT   :
            {
    return {
        ...state,
        students:action.payload
    }
            }
            default:
                {
                    return state;
                }
    }
}