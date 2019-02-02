import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
//composeWithDevTools use this for display the store on the googlechrome dev redux tools
const storeConfigure = (preloadState)=>{
       const midelwares = [];
       const midlewareEnhancers = applyMiddleware(...midelwares);
       const storeEnhancers = [midlewareEnhancers];
       const composeEnhancers = composeWithDevTools(...storeEnhancers);
       const store = createStore(
             rootReducer,
             preloadState,
             composeEnhancers
       )
       //using this for not refrech the page when the state change 
       if(process.env.NODE_ENV !== 'production'){
              if(module.hot){
                     module.hot.accept('../../app/reducers/rootReducer.js',()=>{
                           const newReducer = require('../reducers/rootReducer').default;
                           store.replaceReducer(newReducer);
                     })
              }
       }
       //
       return store;
}

export default storeConfigure;