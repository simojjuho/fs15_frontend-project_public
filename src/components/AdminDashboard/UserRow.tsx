import { Avatar, Icon, Link, TableCell, TableRow } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { ArrowForwardIos } from '@mui/icons-material'

import User from '../../types/User'

interface UserRowProps {
    user: User
}
const UserRow = ({ user }: UserRowProps) => {
  return (
    <TableRow className='userRow'>
      <Link component={RouterLink} to={`/users/${user.id}`}>
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
      </Link>
    </TableRow>
  )
}

export default UserRow