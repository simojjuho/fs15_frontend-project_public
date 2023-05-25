import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar, Icon, TableCell, TableRow } from '@mui/material'
import { ArrowForwardIos } from '@mui/icons-material'

import User from '../../types/User'

interface UserRowProps {
    user: User
}
const UserRow = ({ user }: UserRowProps) => {
  const navigate = useNavigate()
  const child = useMemo(() => {
    return (
      <TableRow className='userRow' onClick={() => navigate(`/users/${user.id}`)}>
        <TableCell>
            <Avatar src={user.avatar} />
        </TableCell>
        <TableCell>{user.id}</TableCell>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.role}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>
          <Icon>
            <ArrowForwardIos color='secondary'/>
          </Icon>
        </TableCell>
      </TableRow>
    )        
},[user])
  return (
    child
  )
}

export default UserRow