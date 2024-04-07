import {createStore} from 'redux'
import studentReducer from "../Reducer/Reducer";
const store=createStore(studentReducer)
export default store;