const { applyMiddleware, compose, createStore, combineReducers } = Redux;
import thunk from './middleware/thunk.js';
import localStorage from './middleware/localStorage.js';
import token from './token.js';
import user from './user.js';

// Creates Store and configs
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));
const reducer = combineReducers({ token, user });
const store = createStore(reducer, enhancer);

export default store;
