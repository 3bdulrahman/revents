import {DECREMENT_DATA,INCREMENT_DATA} from '../../features/testComponent/testConstants'
import {createReducer} from '../../app/common/util/reducerUtil'
const initState = {
      data:1
}
const increment = (state,payload)=>{ 
    return {...state,data:state.data+1}
}
const decrement = (state,payload)=>{
    return {...state,data:state.data-1}
}
// const testReducer = (state = initState,action)=>{
//     switch (action.type) {
//         case INCREMENT_DATA:
//             return {...state,data:state.data+1}
           
//         case DECREMENT_DATA:
//            return {...state,data:state.data-1}
//         default:
//             return state
//     }
// }


export default createReducer(initState,{
    [INCREMENT_DATA]:increment,
    [DECREMENT_DATA]:decrement
});