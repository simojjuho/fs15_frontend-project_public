import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'

import Product from '../types/Product'
import Loading from '../components/Loading'

const SingleProductPage = () => {
  const [product, setPrduct] = useState<Product | null>(null)
  const id = useParams().id
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`)
      setPrduct(data)
    }
    fetchProduct()
    }, [id])

  if(product) {
    return (
      <Container sx={{
        marginTop: '6em',
        minHeight: '80vh'
        }}>
          {product?.title}
      </Container>
    )
  }
  return <Loading />

}

export default SingleProductPage