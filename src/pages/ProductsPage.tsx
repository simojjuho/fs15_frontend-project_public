import { Container, Grid } from "@mui/material"
import { useEffect, useMemo } from "react"

import { getAllProducts } from "../redux/reducers/productsReducer"
import useAppDispatch from "../hooks/useAppDispatch"
import useAppSelector from "../hooks/useAppSelector"
import ProductOnGrid from "../components/ProductOnGrid"

const ProductsPage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllProducts())
  },[])
  const products = useAppSelector(state => state.productsReducer.products)
  
  return (
    <Container maxWidth='lg' sx={{
      paddingTop: '6em',
      
    }}>
      <Grid container gap={2} >
        {products.map(item => 
          <ProductOnGrid product={item} />)
        }
      </Grid>
    </Container>
  )
}

export default ProductsPage