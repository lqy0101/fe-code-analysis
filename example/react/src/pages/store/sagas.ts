import { call, put, takeEvery,} from '../saga-demo/effects';
import { fetchUserInfoAPI } from './api';
// import { call, put, takeEvery,} from 'redux-saga/effects';

// export function* fetchUserInfo() {
//   yield put({ type: "FETCH_USER_FAILED", payload: 'message' });
  
// }

export function* rootSaga() {
  const user = yield call(fetchUserInfoAPI);
  yield put({ type: "FETCH_USER_SUCCEEDED", payload: user });

}
