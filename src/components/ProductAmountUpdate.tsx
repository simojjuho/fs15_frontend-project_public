import { Box, IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import AmountInput from './AmountInput'
import ProductInCart from '../types/ProductsInCart'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import useInput from '../hooks/useInput'
import { addProduct, updateProduct, removeProduct } from '../redux/reducers/shoppingCartReducer'
import Product from '../types/Product';

interface ProductAmountUpdateProps{
    product: Product
}
const ProductAmountUpdate = ({product}: ProductAmountUpdateProps) => {
    const shoppingCart = useAppSelector(state => state.shoppingCartReducer)
    const dispatch = useAppDispatch()
    const initialAmount = () => {
        const item = shoppingCart.productsInCart.find(item => item.product.id === product.id)
        if (item) return `${item.amount}`
        return '1'
        }
    const { value, onChange } = useInput(initialAmount())
    const handleUpdate = () => {
        const amount = Number(value)
        if( typeof amount === 'number' ) {
            amount === 0 
            ? dispatch(removeProduct(product.id))
            : dispatch(updateProduct({id: product.id, amount}))
        }        
    }
    const isProductInCart = () => shoppingCart.productsInCart.some((item: ProductInCart) => item.product.title === product.title)
    const handleProductClick = () => {
        isProductInCart() ? dispatch(removeProduct(product.id)) : dispatch(addProduct(product))
    }
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            gap: 1
        }}>
            {isProductInCart() ? <AmountInput handleChange={onChange} handleUpdate={handleUpdate} initialValue={value}/> : null} 
            <IconButton onClick={handleProductClick} sx={{
                color: 'secondary'
            }}>
                {isProductInCart() ? <RemoveShoppingCartIcon /> : <AddShoppingCartIcon />}
            </IconButton>
        </Box>
    )
}

export default ProductAmountUpdate