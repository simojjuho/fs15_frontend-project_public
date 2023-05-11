import React, { useContext } from 'react'
import { AppBar, Box, Container, IconButton, Toolbar, Typography, useTheme } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Outlet } from 'react-router-dom'

import ColorThemeContext from '../utils/ColorThemeContext';

const HomePage = () => {
  const theme = useTheme()
  const colorContext = useContext(ColorThemeContext)
  const themeClickHandler = () => {
    if(colorContext) colorContext()
  }

  return (
    <Container color={theme.palette.primary.light} sx={{minHeight: '100vh' }}>
      <AppBar
        color='primary'
        sx={{
          height: '80px'
        }}
      >
        <Toolbar sx={{
          justifyContent: 'space-between'
        }}>
          <Typography
            variant='h1'
          >
            NETSHOP
          </Typography>
          <Box>
            <IconButton onClick={themeClickHandler}>
              {theme.palette.mode === 'light' ? <DarkModeIcon color='secondary' /> : <LightModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
      <Container role='footer'></Container>
    </Container>
  )
}

export default HomePage