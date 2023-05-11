import React from 'react'
import { AppBar, Container, Toolbar, Typography, useTheme } from '@mui/material'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  const theme = useTheme()

  return (
    <Container color={theme.palette.primary.light} sx={{minHeight: '100vh' }}>
      <AppBar
        color='primary'
        sx={{height: '80px'}}
      >
        <Toolbar>
          <Typography
            variant='h1'
          >
            NETSHOP
          </Typography>
        </Toolbar>
      </AppBar>
      <Outlet />
      <Container role='footer'></Container>
    </Container>
  )
}

export default HomePage