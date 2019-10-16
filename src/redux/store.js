import { applyMiddleware, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import rootReducer from './root.reducer';

const middlewares = [reduxLogger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
