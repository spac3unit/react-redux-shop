import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

export function* fetchProductsAsync() {
  try {
    const products = yield call(() => {
      return fetch('http://5a7ceeb74c1e2d00124a5e6a.mockapi.io/api/products').then(res => res.json())
    })
    yield put({ type: actions.FETCH_PRODUCTS_SUCCESS, data: products })
  } catch (e) {
    yield put({ type: actions.FETCH_PRODUCTS_FAILURE, message: e.message })
  }
}
export default function* () {
  yield takeEvery(actions.FETCH_PRODUCTS, fetchProductsAsync)
}
