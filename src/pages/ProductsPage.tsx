import { useEffect, useState } from "react"
import { Container, Grid, Input, Pagination } from "@mui/material"

import { getAllProducts } from "../redux/reducers/productsReducer"
import useAppDispatch from "../hooks/useAppDispatch"
import useAppSelector from "../hooks/useAppSelector"
import ProductOnGrid from "../components/ProductOnGrid"
import useDebounce from "../hooks/useDebounce"
import Product from "../types/Product"

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
  const filterFunc = (filter: string, products: Product[]): Product[] => {
    return products.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()))
  }
  const products = useAppSelector(state => state.productsReducer.products)
  const searchDebounce = useDebounce<Product>(filterFunc, products)
  
  const pageCount = Math.ceil(searchDebounce.filteredItems.length / itemsPerPage)
  const endOffset = itemOffset+itemsPerPage
  const itemsToShow = searchDebounce.filteredItems.slice(itemOffset, endOffset)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }; 
  return (
    <Container maxWidth='lg' sx={{
      padding: '6em 0',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Input onChange={searchDebounce.handleChange} value={searchDebounce.search} placeholder='Search for a product' sx={{
        maxWidth: 400
      }} />
      <Grid container spacing={2} sx={{
        marginTop: 8,
        marginBottom: 4
      }}>
        {itemsToShow.map(item => 
          <ProductOnGrid key={item.id} product={item} />)
        }
      </Grid>
      <Pagination page={page} count={pageCount} onChange={(e, value) => handleChange(e, value)} sx={{
        alignSelf: 'center'
      }} />
    </Container>
  )
}

export default ProductsPage