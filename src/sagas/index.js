import { takeEvery } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'

export default function* (params) {
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    action.author = params.username
    params.socket.send(JSON.stringify(action))
  })
}
