// import { applyMiddleware, createStore } from 'redux'
// import {thunk} from 'redux-thunk'
// import reducers from './reducers'
// import { composeWithDevTools } from 'redux-devtools-extension'
//
// const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
//
// export default store


import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
