import { all } from "redux-saga/effects"

import dummySagas from "./dummy"

export default function* rootSagas() {
  yield all([dummySagas()])
}
