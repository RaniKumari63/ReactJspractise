import {createStore} from 'redux';
const initialState={
    counter:0
}

const reducerFn=(state=initialState,action)=>{
   switch(action.type)
   {
   case 'INC':
    return {
       ...state,
       counter:state.counter+1
    }
    case 'DEC':
    return {
        ...state,
        counter:state.counter-1
    }
    case 'ADD':
        return{
            counter:state.counter+action.payload 
        }
    default:return state

   }
return state;
}
const store=createStore(reducerFn)
export default store;