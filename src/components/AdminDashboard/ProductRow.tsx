import { TableRow, TableCell, Avatar, Button } from '@mui/material'
import React from 'react'
import Product from '../../types/Product'

interface ProductRowProps {
    product: Product
}
const ProductRow = ({ product }: ProductRowProps) => {
    return (
        <TableRow>
            <TableCell>
                <Avatar src={product.images[1]} />
            </TableCell>
            <TableCell>{product.id}</TableCell>
            <TableCell>{product.title}</TableCell>

            <TableCell>
                <Button variant='outlined' color='secondary'>edit</Button>
            </TableCell>
        </TableRow>
    )
}

export default ProductRow