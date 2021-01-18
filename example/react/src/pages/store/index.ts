import { createStore, applyMiddleware } from 'redux'
import todos from './reducers'
import {rootSaga,fetchUserInfo} from './sagas'
import createSagaMiddleware from '../saga-demo/middleware';
// import createSagaMiddleware from 'redux-saga';
let sagaMiddleware=createSagaMiddleware();
let store = createStore(
  todos,
  [ 'Use Redux' ],
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

export default store;