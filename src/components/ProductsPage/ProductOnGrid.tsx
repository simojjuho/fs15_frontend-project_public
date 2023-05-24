import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { Paper, Link, Grid, Box, Typography } from '@mui/material'

import Product from '../../types/Product'
import ProductAmountUpdate from '../ProductAmountUpdate';

interface ProductOnGridProps {
    product: Product
}

const ProductOnGrid = ({product}: ProductOnGridProps) => { 
    const child = useMemo(() => {
        return (
        <Paper sx={{
            padding: '0.2em',
            backgroundColor: 'primary.dark'
            }}>
            <Link aria-label={`Link to product page: ${product.title}`} color={'secondary.light'} sx={{
                textDecoration: 'none'
            }} component={RouterLink} to={`/products/${product.id}`}>
                <Box sx={{
                    background: `url(${product.images[0]}) center `,
                    height: '100px'
                }}></Box>    
                <Typography variant='h3'>
                    {product.title}
                </Typography>
            </Link><br />
            {product.price} €<br />
            <ProductAmountUpdate product={product} />
       </Paper>)
           },[product]);
    return (
    <Grid item xs={12} md={4} lg={3}>
        {child}
    </Grid>
  )
}

export default ProductOnGrid