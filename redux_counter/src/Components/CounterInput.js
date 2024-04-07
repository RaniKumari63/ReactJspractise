import React, { Component } from 'react';
import {connect} from 'react-redux';
import { increaseCount,decreaseCount } from '../ActionTypes/CounterAction';
export class CounterInput extends Component {
  handleOnClick = (e)=>{
   alert("hai")
    e.preventDefault()
    if(e.target.name === 'Up'){
       this.props.increaseCount()
    }else{
       this.props.decreaseCount()
    }

 


  }
  render(){
    return (
<div>
  <h1></h1>
<button name="Up" onClick={e=>this.handleOnClick(e)}>Up</button>
<button name="Down" onClick={e=>this.handleOnClick(e)}>Down</button>
</div>

 

  )
  }
}

const mapStateToProps = state =>{
  return(
     {
        count:state.count
     }
  )
  }
  export default connect(mapStateToProps,{increaseCount,decreaseCount})(CounterInput);