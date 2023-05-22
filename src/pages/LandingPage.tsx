import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'
import useAppDispatch from '../hooks/useAppDispatch'
import { setRegistrationVisibility, setLoginVisibility } from '../redux/reducers/modalReducer'
import useAppSelector from '../hooks/useAppSelector'

const LandingPage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.userReducer.user)
  const handleRegistrationClick = () => {
    dispatch(setRegistrationVisibility())
  }
  const handleLoginClick = () => {
    dispatch(setLoginVisibility())
  }
  return (
    <Container className='tempContainer' >
      {user 
      ? <Box className='landingContent'>
        <Typography variant='h2'>Welcome {user.name}!</Typography>
        <Button onClick={() => navigate('/products')} color="secondary" variant="outlined">proceed to webshop</Button>
      </Box> 
      :<Box className='landingContent'>
        <Typography variant='h2'>
          Welcome!
        </Typography>
        <Box id='landingProfileActions'>
          <Button onClick={handleLoginClick} color="secondary" variant="outlined">Log in</Button > or
          <Button onClick={handleRegistrationClick} color="secondary" variant="outlined">Sign up</Button >
        </Box>
        <Box id='landingProceed'>
          <Typography variant='body1'>
            You can also proceed to the webshop without signing up.
          </Typography>
          <Button onClick={() => navigate('/products')} color="secondary" variant="outlined">proceed to webshop</Button>
          
        </Box>
      </Box>}
    </Container>
  )
}

export default LandingPage