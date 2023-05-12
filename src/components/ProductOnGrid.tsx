import { Link as RouterLink } from 'react-router-dom'
import { Paper, Link, Grid } from '@mui/material'
import Product from '../types/Product'
import { useMemo } from 'react';

interface ProductOnGridProps {
    product: Product
}

const ProductOnGrid = ({product}: ProductOnGridProps) => {
    const child = useMemo(() => {
        return (<Paper sx={{padding: '2em'}}>
        <Link component={RouterLink} to={`/:products/:id`}>
            {product.title}
        </Link>
       </Paper>)
           },[]);
    return (
    <Grid>
        {child}
    </Grid>
  )
}

export default ProductOnGrid