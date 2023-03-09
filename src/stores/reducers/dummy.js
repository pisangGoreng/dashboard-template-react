import { createSlice } from "@reduxjs/toolkit"

export const dummySlice = createSlice({
  name: "dummy",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    getDataFetch: (state) => {
      state.isLoading = true
    },
    getDataSuccess: (state, action) => {
      state.data = action.payload
      state.isLoading = false
    },
    getDataFailure: (state) => {
      state.isLoading = false
    },
  },
})

export const { getDataFailure, getDataSuccess, getDataFetch } =
  dummySlice.actions

export default dummySlice.reducer
