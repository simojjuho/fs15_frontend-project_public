import { useEffect, useState } from "react"
import { Container, Grid, Pagination } from "@mui/material"

import { getAllProducts } from "../redux/reducers/productsReducer"
import useAppDispatch from "../hooks/useAppDispatch"
import useAppSelector from "../hooks/useAppSelector"
import ProductOnGrid from "../components/ProductOnGrid"

const ProductsPage = () => {
  const dispatch = useAppDispatch()
  const [page, setPage] = useState(1)
  const [itemOffset, setOffset] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  useEffect(() => {
    dispatch(getAllProducts())
  },[])
  useEffect(() => {
    if(products.length > 0) {
      setOffset((page - 1) * itemsPerPage % products.length)
    }
  }, [page])
  const products = useAppSelector(state => state.productsReducer.products)
  const pageCount = Math.ceil(products.length / itemsPerPage)
  const endOffset = itemOffset+itemsPerPage
  const itemsToShow = products.slice(itemOffset, endOffset)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  };
  return (
    <Container maxWidth='lg' sx={{
      padding: '6em',
      
    }}>
      <Grid container gap={2}>
        {itemsToShow.map(item => 
          <ProductOnGrid key={item.id} product={item} />)
        }
      </Grid>
      <Pagination page={page} count={pageCount} onChange={(e, value) => handleChange(e, value)}/>
    </Container>
  )
}

export default ProductsPage