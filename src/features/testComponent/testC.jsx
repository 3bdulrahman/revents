import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Button} from 'semantic-ui-react';
import {incactions,decactions} from '../testComponent/testActions'
const mapToState = (state)=>{
     return{
          data:state.test.data
     }
}
const actions = {
    incactions,
    decactions
}
 class testC extends Component {
  render() {
     const {decactions,incactions,data} = this.props;
    return (
      <div>
         <h1>test {data}</h1>
         <Button onClick={incactions} positive content='increment' />
         <Button negative onClick={decactions} content='decrement' />
      </div>
    )
  }
}


export default connect(mapToState,actions)(testC);