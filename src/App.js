import { useEffect } from "react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { themeSettings } from "./theme"
import Dashboard from "./scenes/dashboard"
import Layout from "./scenes/layout"
import { getDataFetch, getDataFailure } from "./stores/reducers/dummy"

function App() {
  const mode = useSelector((state) => state.theme.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  // const cats = useSelector((state) => state)
  const dispatch = useDispatch()

  // useEffect(() => {
  // dispatch(getDataFetch())
  // }, [dispatch])

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" />} replace />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
