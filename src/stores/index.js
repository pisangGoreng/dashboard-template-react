import createSagaMiddleware from "redux-saga"
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"

import rootSagas from "./sagas"
import themeReducer from "./reducers/theme"
import dummyReducer from "./reducers/dummy"

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: persistReducer(
    { key: "root", storage },
    combineReducers({
      dummy: dummyReducer,
      theme: themeReducer,
    })
  ),
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
  devTools: process.env.NODE_ENV !== "production",
})
sagaMiddleware.run(rootSagas)

export default store

export const persistor = persistStore(store)
