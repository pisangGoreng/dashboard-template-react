import React, { useState } from "react"
import { Box, useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

import Sidebar from "../../components/Sidebar"

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={{}} // for make sidebar not error if data still fetch / undefined
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </Box>
  )
}

export default Layout
