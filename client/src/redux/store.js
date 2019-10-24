import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root.reducer';
import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const envIsProduction = process.env.NODE_ENV === 'production';

const composeEnhancers =
  !envIsProduction && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
