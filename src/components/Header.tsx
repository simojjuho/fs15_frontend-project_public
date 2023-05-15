import { useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom'
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
    return (
        <AppBar
            sx={{
            height: '80px',
            backgroundColor: 'primary.dark',
            }}
        >
            <Toolbar sx={{
            justifyContent: 'space-between'
            }}>
            <Link variant='body2' color={'secondary.contrastText'} component={RouterLink} to='/' underline="none">
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
                <Link variant='body2' color={'secondary.contrastText'} component={RouterLink} to='/' underline="none">
                    HOME
                </Link>
                <Link variant='body2' color={'secondary.contrastText'} component={RouterLink} to='/products' underline="none">
                    PRODUCTS
                </Link>
                <IconButton aria-label='shopping cart' sx={{
                    '&::after': {
                        content: `"${shoppngCart.productsInCart.length}"`,
                        fontSize: '0.4em',
                        fontWeight: '700',
                        backgroundColor: 'orange',
                        display: 'block',
                        width: '1em',
                        borderRadius: '50%',
                        position: 'absolute',
                        top: '20%',
                    }
                }}>
                    <ShoppingCartIcon color='secondary'/>
                </IconButton>
                <IconButton onClick={themeClickHandler} aria-label='color theme switch'>
                    {theme.palette.mode === 'light' ? <DarkModeIcon color='secondary' /> : <LightModeIcon />}
                </IconButton>
                <IconButton >
                    <AccountCircleIcon color='secondary'/>
                </IconButton>
            </Box>
            </Toolbar>
        </AppBar>
    )
    }

export default Header