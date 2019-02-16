export const createReducer =(initState,fun)=>{
     return(state = initState , {type,payload})=>{
          const handler = fun[type];
          return handler ? handler(state,payload):state
     }
}
