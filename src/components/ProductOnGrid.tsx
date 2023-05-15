import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { Paper, Link, Grid, Box, IconButton, Typography } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import Product from '../types/Product'
import useAppSelector from '../hooks/useAppSelector';
import useAppDispatch from '../hooks/useAppDispatch';
import ProductInCart from '../types/ProductsInCart';
import { addProduct, removeProduct, updateProduct } from '../redux/reducers/shoppingCartReducer';
import AmountInput from './AmountInput';
import useInput from '../hooks/useInput';

interface ProductOnGridProps {
    product: Product
}

const ProductOnGrid = ({product}: ProductOnGridProps) => {
    const { value, handleChange } = useInput()
    const handleUpdate = () => {
        const amount = Number(value)
        if( typeof amount === 'number' ) {
            Number(value) === 0 ? dispatch(removeProduct(product.id)) :dispatch(updateProduct({id: product.id, amount}))
        }        
    }
    const shoppingCart = useAppSelector(state => state.shoppingCartReducer)
    const dispatch = useAppDispatch()
    const isProductInCart = () => shoppingCart.productsInCart.some((item: ProductInCart) => item.product.title === product.title)
    const handleProductClick = () => {
        isProductInCart() ? dispatch(removeProduct(product.id)) : dispatch(addProduct(product))
    }
    const child = useMemo(() => {
        return (
        <Paper sx={{
            padding: '0.2em',
            backgroundColor: 'primary.dark'
            }}>
            <Link color={'secondary.light'} sx={{
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
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'end',
                gap: 1
            }}>
                {isProductInCart() ? <AmountInput handleChange={handleChange} handleUpdate={handleUpdate} amount={value}/> : null} 
                <IconButton onClick={handleProductClick} sx={{
                    color: 'secondary'
                }}>
                    {isProductInCart() ? <RemoveShoppingCartIcon /> : <AddShoppingCartIcon />}
                </IconButton>
            </Box>
       </Paper>)
           },[isProductInCart]);
    return (
    <Grid item xs={12} md={4} lg={3}>
        {child}
    </Grid>
  )
}

export default ProductOnGrid