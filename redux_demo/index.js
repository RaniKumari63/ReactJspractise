const redux=require('redux')
const createStore=redux.createStore

console.log("hai");
const BUY_CAKE='BUY_CAKE'
const ADD_CAKE='ADD_CAKE'
function buyCake()
{
    return {
    type:BUY_CAKE,
    info:'first  redux action'
}
}
function addCake()
{
    return{
        type:ADD_CAKE,
        info:'first  redux action'
    }
}



const initialState={
    numOfCakes:10
}
const reducer=(state=initialState,action)=>{
switch(action.type)
{
    case BUY_CAKE:return
    {
        
        numOfCakes:state.numOfCakes-1
    }
    case ADD_CAKE:return{
        numOfCakes:state.numOfCakes+1
    }
    default:return state
}
}
const store=createStore(reducer)
console.log('InitialState',store.getState())
const subscribe=store.subscribe(()=>console.log('updated state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

