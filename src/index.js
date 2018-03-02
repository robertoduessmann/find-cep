import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, combineReducers } from 'redux'
import cep from './reducers/cep'
import ReduxThunk from 'redux-thunk'


const rootReducer = combineReducers({cep})
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
