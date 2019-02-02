export const createReducer =(initState,fun)=>{
     return(state = initState , {type,payload})=>{
          const handler = fun[type];
          console.log("the function running",handler);
          console.log("the type :",type);
          console.log('the payload :',payload)

          return handler ? handler(state,payload):state
     }
}
