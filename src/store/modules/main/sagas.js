import { all, takeLatest, put } from 'redux-saga/effects';
import history from '~/services/history';
import actions, { defaultAction } from './actions';

export function* defaultSaga() {
  yield put(defaultAction());
  history.push('/');
}

export default all([
  // action from redux-persist
  takeLatest(actions.DEFAULT_ACTION, defaultSaga),
]);
