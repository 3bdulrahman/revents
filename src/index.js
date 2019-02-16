import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './app/layout/App';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import storeConfigure from '../src/app/store/configStore'
import ScrollToTop from './app/common/util/scrollToTop'
const rootEl = document.getElementById('root');
const store = storeConfigure();
const render = ()=>{
    ReactDOM.render(
     <Provider store={store}>
    <BrowserRouter>
          <ScrollToTop>
               <App/>
          </ScrollToTop>
    </BrowserRouter>
    </Provider>
    , rootEl);
}
if(module.hot){
     module.hot.accept('./app/layout/App',()=>{
          setTimeout(render)
     })
}
render();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
