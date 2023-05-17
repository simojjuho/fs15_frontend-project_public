import { useContext } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box, IconButton, useTheme, Link } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import ColorThemeContext from '../utils/ColorThemeContext'
import useAppSelector from '../hooks/useAppSelector'

const Header = () => {
    const colorContext = useContext(ColorThemeContext)
    const theme = useTheme()
    const themeClickHandler = () => {
        if(colorContext) colorContext()
    }
    const shoppngCart = useAppSelector(state => state.shoppingCartReducer)
    const navigate = useNavigate()
    return (
        <AppBar
            sx={{
            height: '80px',
            backgroundColor: 'secondary.main',
            }}
        >
            <Toolbar sx={{
            justifyContent: 'space-between'
            }}>
            <Link variant='body2' component={RouterLink} to='/' underline="none">
                <Typography
                    variant='h1'
                >
                    NETSHOP
                </Typography>
            </Link>
            <Box role='navigation' sx={{
                display: 'flex',
                alignItems: 'center',    
                gap: '1em'
            }} >          
                <Link variant='body2' component={RouterLink} to='/' underline="none">
                    HOME
                </Link>
                <Link variant='body2' component={RouterLink} to='/products' underline="none">
                    PRODUCTS
                </Link>
                <Box sx={{position: 'relative'}}>
                    <IconButton aria-label='link to shopping cart' onClick={() => navigate('/shopping-cart')}>
                        <ShoppingCartIcon/>
                    </IconButton>
                    <Box sx={{
                        fontSize: '0.6em',
                        fontWeight: '700',
                        backgroundColor: 'orange',
                        width: '1.6em',
                        height: '1.6em',
                        borderRadius: '50%',
                        position: 'absolute',
                        top: '10%',
                        right: '20%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>{shoppngCart.productsInCart.length}</Box>
                </Box>
                <IconButton onClick={themeClickHandler} aria-label='color theme switch'>
                    {theme.palette.mode === 'light' ? <DarkModeIcon  /> : <LightModeIcon />}
                </IconButton>
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
            </Box>
            </Toolbar>
        </AppBar>
    )
    }

export default Header