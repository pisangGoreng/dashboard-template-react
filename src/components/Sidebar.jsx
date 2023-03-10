import React, { useEffect, useState } from "react"
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material"
import {
  AdminPanelSettingsOutlined,
  CalendarMonthOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  Groups2Outlined,
  HomeOutlined,
  PieChartOutlined,
  PieChartRounded,
  PointOfSaleOutlined,
  PublicOutlined,
  ReceiptLongOutlined,
  SettingsOutlined,
  ShoppingCartOutlined,
  TodayOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material"
import { useLocation, useNavigate } from "react-router-dom"

import FlexBetween from "./FlexBetween"

const navItems = [
  { text: "Dashboard", icon: <HomeOutlined /> },
  { text: "Clients Facing", icon: null },
  { text: "Products", icon: <ShoppingCartOutlined /> },
  { text: "Customers", icon: <Groups2Outlined /> },
  { text: "Transactions", icon: <ReceiptLongOutlined /> },
  { text: "Geo", icon: <PublicOutlined /> },
  { text: "Sales", icon: null },
  { text: "Overview", icon: <PointOfSaleOutlined /> },
  { text: "Daily", icon: <TodayOutlined /> },
  { text: "Monthly", icon: <CalendarMonthOutlined /> },
  { text: "Breakdown", icon: <PieChartRounded /> },
  { text: "Management", icon: null },
  { text: "Admin", icon: <AdminPanelSettingsOutlined /> },
  { text: "Performance", icon: <TrendingUpOutlined /> },
]

function SideBar({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) {
  const { pathname } = useLocation()
  const [active, setActive] = useState("")
  const navigate = useNavigate()
  const theme = useTheme()

  useEffect(() => {
    // * run everythime pathname is changed
    setActive(pathname.substring(1))
  }, [pathname])

  console.log(process.env)

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            // override style for selected class
            // & for targetting class
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "botder-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h5" fontWeight="bold">
                    {process.env.REACT_APP_SIDEBAR_NAME} -{" "}
                    {process.env.REACT_APP_STAGE}
                  </Typography>
                </Box>

                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>

            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  )
                }
                const lcText = text.toLowerCase()
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`)
                        setActive(lcText)
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>

                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </List>

            <Box bottom="2rem">
              <Divider />
              <FlexBetween
                textTransform="none"
                gap="1rem"
                m="1.5rem 2rem 1.5rem 3rem"
              >
                <Box
                  component="img"
                  alt="profile"
                  src="https://cf.shopee.co.id/file/b31c83696bdf9418c25374f764e7fca8"
                  height="40px"
                  width="40px"
                  borderRadius="50%"
                  sx={{ objectFit: "cover" }}
                />
                <Box textAlign="left">
                  <Typography
                    fontWeight="bold"
                    fontSize="0.9rem"
                    sx={{ color: theme.palette.secondary[100] }}
                  >
                    {/* {user.name} */}
                    Kucing
                  </Typography>

                  <Typography
                    fontSize="0.8rem"
                    sx={{ color: theme.palette.secondary[200] }}
                  >
                    {/* {user.occupation} */}
                    guguk
                  </Typography>
                </Box>

                <SettingsOutlined
                  sx={{ color: theme.palette.secondary[300], fontSize: "34px" }}
                />
              </FlexBetween>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  )
}

export default SideBar
