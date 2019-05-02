import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import { watchFetchPosts } from './sagas/saga'; // watcher sagas 

const initialState = {};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middleware = [thunk, sagaMiddleware];

const store = createStore(
    rootReducer, 
    initialState,
    compose(
        applyMiddleware(...middleware),
        reduxDevTools,
    )
);

// run the saga
sagaMiddleware.run(watchFetchPosts);

export default store; 