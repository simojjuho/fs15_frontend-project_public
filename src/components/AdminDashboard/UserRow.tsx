import { Avatar, Button, TableCell, TableRow } from '@mui/material'
import React from 'react'
import User from '../../types/User'

interface UserRowProps {
    user: User
}
const UserRow = ({ user }: UserRowProps) => {
  return (
    <TableRow>
        <TableCell>
            <Avatar src={user.avatar} />
        </TableCell>
        <TableCell>{user.id}</TableCell>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.role}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>
            <Button variant='outlined' color='secondary'>edit</Button>
        </TableCell>
    </TableRow>
  )
}

export default UserRow