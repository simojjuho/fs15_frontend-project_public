import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { useState } from 'react'

import useAppSelector from '../hooks/useAppSelector'
import { setLoginVisibility } from '../redux/reducers/modalReducer'
import useInput from '../hooks/useInput'
import { loginUser } from '../redux/reducers/userReducer'
import LoginCredentials from '../types/LoginCredentials'
import useAppDispatch from '../hooks/useAppDispatch'
import Notification from './Notification'

const LoginModal = () => {
    const isOpen = useAppSelector(state => state.modalReducer.loginModal)
    const dispatch = useAppDispatch()
    const userReducer = useAppSelector(state => state.userReducer)
    const emailInput = useInput('')
    const passwordInput = useInput('')
    const handleLogin = async () => {
        if(emailInput.value && passwordInput.value) {
            const credentials: LoginCredentials = {
                email: emailInput.value,
                password: passwordInput.value
            }
            await dispatch(loginUser(credentials))
            if(userReducer.user) {
                dispatch(setLoginVisibility())
            }
        }
    }
    return (
        <Dialog open={isOpen} onClose={() => dispatch(setLoginVisibility())}>
            <DialogTitle>Log in</DialogTitle>
            { userReducer.notification
                ? <Notification message={'Login failed. Check your email and/or password!'} severity={'error'} />
                : null
            }
            <DialogContent className='modalForm'>
                <TextField 
                    label='Email address'
                    color='secondary'
                    {...emailInput}
                    className='formInput'
                />
                <TextField
                    label='Password'
                    color='secondary'
                    type='password'
                    {...passwordInput}
                    className='formInput'
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleLogin} variant='outlined' color='secondary'>Log in</Button>
                <Button onClick={() => dispatch(setLoginVisibility())} variant='outlined' color='secondary'>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default LoginModal