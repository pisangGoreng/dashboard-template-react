import { createSlice } from "@reduxjs/toolkit"

export const themeSLice = createSlice({
  name: "theme",
  initialState: {
    mode: "dark",
    userId: "63701cc1f03239b7f700000e",
  },
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"
    },
  },
})

export const { setMode } = themeSLice.actions

export default themeSLice.reducer
