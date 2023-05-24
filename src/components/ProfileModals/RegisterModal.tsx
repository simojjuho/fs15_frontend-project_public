import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import useAppSelector from '../../hooks/useAppSelector'
import useAppDispatch from '../../hooks/useAppDispatch'
import { setRegistrationVisibility } from '../../redux/reducers/modalReducer'
import registrationFormSchema, { RegistrationFormData } from '../../validation/registrationFormSchema'
import NewUser from '../../types/NewUser';
import { registerUser, initializeNotification } from '../../redux/reducers/userReducer';
import { useEffect  } from 'react';
import Notification from '../Notification';

const RegisterModal = () => {
    const isOpen = useAppSelector(state => state.modalReducer.registrationModal)
    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.userReducer)
    const { handleSubmit, control, formState: { errors }, reset } = useForm<RegistrationFormData>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            repeat: '',
            avatar: ''
        },
        resolver: yupResolver(registrationFormSchema)
    })
    useEffect(() => {
        reset()
        dispatch(initializeNotification())
    }, [isOpen, reset, dispatch])
    const onSubmit = async (data: RegistrationFormData) => {
        const avatar = data.avatar ? data.avatar : 'https://i.pravatar.cc/300'
        const newUser: NewUser = {
            name: data.name,
            email: data.email,
            password: data.password,
            avatar: avatar
        }
        dispatch(registerUser(newUser))
        setTimeout(() => {
            dispatch(setRegistrationVisibility())
        }, 6000)
    }
    const handleClose = () => {
        dispatch(setRegistrationVisibility())
    }
    return (
        <Dialog open={isOpen} onClose={handleClose} maxWidth='sm'>
            <DialogTitle>Sign up</DialogTitle>
            {users.isSuccess
                ? <Notification message={'Profile created succesfully! You can now sign in using your login information'} severity={'success'}/> 
                : users.notification
                ? <Notification message={users.notification} severity={'error'}/>
                : null}
            <DialogContent className='modalForm'>
                <Controller 
                    name="name"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => 
                        <TextField
                            { ...field }
                            placeholder='Your email address'
                            label={errors.name?.message ? errors.name?.message : 'Name'} 
                            color={ errors.name?.message ? 'warning' : 'secondary' }
                            className='formInput'
                        />}           
                />
                <Controller 
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: {onChange} }) => 
                        <TextField
                            onChange={onChange}
                            placeholder='Your email address'
                            label={'Email'} 
                            color='secondary'
                            className='formInput'
                        />}           
                />
                <Controller 
                    name="password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: {onChange} }) => 
                        <TextField
                            onChange={onChange}
                            placeholder='Your password'
                            label={'Password'} 
                            type='password'
                            color='secondary'
                            className='formInput'
                        />}           
                />
                <Controller 
                    name="repeat"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: {onChange} }) => 
                        <TextField
                            onChange={onChange}
                            placeholder='Your password again'
                            label={'Repeat password'}
                            type='password' 
                            color='secondary'
                            className='formInput'
                        />}           
                /> 
                <Controller 
                    name="avatar"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: {onChange} }) => 
                        <TextField
                            onChange={onChange}
                            placeholder='Your avatar address'
                            label={'Avatar'} 
                            color='secondary'
                            className='formInput'
                        />}           
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit(onSubmit)} color='secondary' variant='outlined'>Sign up</Button>
                <Button onClick={() => dispatch(setRegistrationVisibility())} color='secondary' variant='outlined'>Cancel</Button>
            </DialogActions>
        </Dialog>
  )
}

export default RegisterModal