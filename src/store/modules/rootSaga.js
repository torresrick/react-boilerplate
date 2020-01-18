import { all } from 'redux-saga/effects';

import main from './main/sagas';

export default function* rootSaga() {
  return yield all([main]);
}
