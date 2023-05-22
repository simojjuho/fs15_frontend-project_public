import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'
import useAppDispatch from '../hooks/useAppDispatch'
import { setVisibility } from '../redux/reducers/modalReducer'

const LandingPage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleModalClick = () => {
    dispatch(setVisibility())
  }
  return (
    <Container className='tempContainer' >
      <Box id='landingContent'>
        <Typography variant='h2'>
          Welcome!
        </Typography>
        <Box id='landingProfileActions'>
          <Button color="secondary" variant="outlined">Log in</Button > or
          <Button onClick={handleModalClick} color="secondary" variant="outlined">Sign up</Button >
        </Box>
        <Box id='landingProceed'>
          <Typography variant='body1'>
            You can also proceed to the webshop without signing up.
          </Typography>
          <Button onClick={() => navigate('/products')} color="secondary" variant="outlined">proceed to webshop</Button>
          
        </Box>
      </Box>
    </Container>
  )
}

export default LandingPage