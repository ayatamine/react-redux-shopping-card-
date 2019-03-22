
import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/index';
import {createStore} from 'redux';
import {Provider } from 'react-redux';
import {filterBy} from './actions/index';
import {getSingleProduct} from './actions/index';
import  {removeCommandedProduct} from './actions/index'
import App from './components/App';


const store =createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log("state",store.getState());

//store.subscribe(()=> console.log("state",store.getState()));
//store.dispatch(removeCommandedProduct(2));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

