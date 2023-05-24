import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Box, Container, IconButton, Tooltip } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'


import Product from '../types/Product'
import Loading from '../components/Loading'
import useAppSelector from '../hooks/useAppSelector'
import AddInCart from '../components/AddInCart'
import ProductsNoEdit from '../components/ProductNoEdit'
import ProductEdit from '../components/ProductEdit'

const SingleProductPage = () => {
  const [product, setPrduct] = useState<Product | null>(null)
  const user = useAppSelector(state => state.userReducer.user)
  const [isEdit, setEdit] = useState(false)
  
  const id = useParams().id
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`)
      setPrduct(data)
    }
    fetchProduct()
    }, [id])
  const handleEditClick = () => {
    setEdit(!isEdit)
  }
  if(product) {
    return (
      <Container className='pageContainer'>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <ProductsNoEdit product={product} />
          <Box sx={{ alignSelf: 'end'}}>
            <AddInCart product={product}/>
            <Tooltip title='Edit the product'>
              <IconButton onClick={handleEditClick}>
                <EditIcon />
              </IconButton>
            </Tooltip>
        </Box>
        </Box>
      </Container>
    )
  }
  return <Loading />

}

export default SingleProductPage