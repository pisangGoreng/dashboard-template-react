import createSagaMiddleware from "redux-saga"
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import rootSagas from "./sagas"
import themeReducer from "./reducers/theme"
import dummyReducer from "./reducers/dummy"

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    dummy: dummyReducer,
    theme: themeReducer,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
})
sagaMiddleware.run(rootSagas)

export default store
