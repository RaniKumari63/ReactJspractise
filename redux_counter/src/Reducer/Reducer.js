 function Reducer(state={count:0},action)
{
   
    switch(action.type)
    {
        case 'ADD':
            alert("reducer"+state.count)
            return{
                ...state,
                count:state.count+1
            }
            case 'SUBTRACT':
                return{
                    ...state,
                    count:state.count-1
                }
                default:
                    return state
    }
}
export default Reducer;