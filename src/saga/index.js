import { all } from 'redux-saga/effects'
import studentSaga from '../saga/studentSaga'
import uploadSaga from './uploadSaga'

function* rootSaga() {
  yield all({
    ...studentSaga,
    ...uploadSaga
  })
}

export default rootSaga