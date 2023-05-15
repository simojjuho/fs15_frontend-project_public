import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { Paper, Link, Grid, Box, IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import Product from '../types/Product'
import useAppSelector from '../hooks/useAppSelector';
import useAppDispatch from '../hooks/useAppDispatch';
import ProductInCart from '../types/ProductsInCart';
import { addProduct, removeProduct } from '../redux/reducers/shoppingCartReducer';

interface ProductOnGridProps {
    product: Product
}

const ProductOnGrid = ({product}: ProductOnGridProps) => {
    const shoppingCart = useAppSelector(state => state.shoppingCartReducer)
    const dispatch = useAppDispatch()
    const isProductInCart = () => shoppingCart.productsInCart.some((item: ProductInCart) => item.product.title === product.title)
    const handleProductClick = () => {
        isProductInCart() ? dispatch(removeProduct(product.id)) : dispatch(addProduct(product))
    }
    const child = useMemo(() => {
        return (
        <Paper sx={{padding: '0.2em'}}>
            <Link component={RouterLink} to={`/products/${product.id}`}>
                <Box sx={{
                    background: `url(${product.images[0]}) center `,
                    height: '100px'
                }}></Box>    
                {product.title}
            </Link><br />
            {product.price} €<br />
            <IconButton onClick={handleProductClick}>
                {isProductInCart() ? <RemoveShoppingCartIcon /> : <AddShoppingCartIcon />}
            </IconButton>
       </Paper>)
           },[isProductInCart]);
    return (
    <Grid item xs={12} md={4} lg={3}>
        {child}
    </Grid>
  )
}

export default ProductOnGrid