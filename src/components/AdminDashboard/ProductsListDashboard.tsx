import { useState } from 'react'
import { TableContainer, Paper, Table, TableBody, TableFooter, TableRow, TablePagination, TableCell } from '@mui/material'
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions'

import useAppSelector from '../../hooks/useAppSelector'
import ProductRow from './ProductRow'

const ProductsListDashboard = () => {
    const [page, setPage] = useState(1)
    const [itemssPerPage, setUsersPerPage] = useState(10)
    const products = useAppSelector(state => state.productsReducer.products)
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * itemssPerPage - products.length) : 0

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
      ) => {
        setPage(newPage)
    }
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        ) => {
        setUsersPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableBody>
                    {(itemssPerPage > 0
                    ? products.slice(page * itemssPerPage, page * itemssPerPage + itemssPerPage)
                    : products
                 ).map(product => <ProductRow key={product.id} product={product}/>)}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 73 * emptyRows }}>
                        <TableCell colSpan={6} />
                    </TableRow>
                )}
                </TableBody>
                <TableFooter>
                <TableRow>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                        colSpan={3}
                        count={products.length}
                        rowsPerPage={itemssPerPage}
                        page={page}
                        SelectProps={{
                            inputProps: {
                            'aria-label': 'rows per page',
                            },
                            native: true,
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                    />
                </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}

export default ProductsListDashboard