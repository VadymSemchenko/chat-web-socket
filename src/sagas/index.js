import { takeEvery } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'

export default function* (socket) {
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    socket.send(JSON.stringify(action))
  })
}
