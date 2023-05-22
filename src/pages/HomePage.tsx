import { Outlet } from 'react-router-dom'

import { Box } from '@mui/material'

import Footer from '../components/Footer';
import Header from '../components/Header';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';

const HomePage = () => {
  return (
    <Box sx={{position: 'relative',minHeight: '100vh', backgroundColor: 'primary.main' }}>
      <Header />
      <LoginModal />
      <RegisterModal />
      <Outlet />
      <Footer />
    </Box>
  )
}

export default HomePage