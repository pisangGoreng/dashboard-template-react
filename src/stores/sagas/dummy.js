import { call, put, takeEvery, all, takeLatest } from "redux-saga/effects"
import { getDataSuccess } from "../reducers/dummy"

function* workGetDummySuccess() {
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"))
  const formattedCats = yield cats.json()

  yield put(getDataSuccess(formattedCats))
}

function* dummySagas() {
  yield takeEvery("dummy/getDataFetch", workGetDummySuccess)
}

export default dummySagas
