import { useEffect } from 'react'
import { Alert, AlertColor, AlertTitle } from '@mui/material'

import useAppDispatch from '../hooks/useAppDispatch'
import { initializeNotification } from '../redux/reducers/userReducer'

interface NotificationProps {
    message: string,
    severity: AlertColor
}
const Notification = ({ message, severity }: NotificationProps) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        setTimeout(() => {
            dispatch(initializeNotification())
        }, 5000)
    }, [])
    return (
        <Alert severity={severity}>
            <AlertTitle>{severity}</AlertTitle>
            {message}
        </Alert>
        )

}

export default Notification