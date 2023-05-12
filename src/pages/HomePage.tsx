import { Outlet } from 'react-router-dom'

import { Box } from '@mui/material'

import Footer from '../components/Footer';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <Box sx={{position: 'relative',minHeight: '100vh', backgroundColor: 'secondary.main' }}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  )
}

export default HomePage