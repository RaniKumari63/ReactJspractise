import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {actions} from './store/storecdstoolkit'
function App() {
  const counter=useSelector((state)=>state.counter);
  const dispatch=useDispatch();
  const increment=()=>
  {dispatch(actions.increment());

  }
  const decrement=()=>{
    dispatch(actions.decrement());
  }
  const add=()=>{
    dispatch(actions.addBy(20))
  }

  return (
    <div>
     <h1>Counter App</h1>  
     <h2>{counter}</h2>  
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
     <button onClick={add}>Add</button>
     </div>
  );
}

export default App;
