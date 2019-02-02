import {DECREMENT_DATA,INCREMENT_DATA} from '../testComponent/testConstants';

export const incactions = ()=>{
     return{
          type:INCREMENT_DATA
     }
}
export const decactions = ()=>{
    return{
         type:DECREMENT_DATA
    }
}