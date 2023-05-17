import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { objectParser } from '../testUtils/parsers'
import Product from '../../types/Product'
import initialProducts from '../data/initialProducts'

let products: Product[] = initialProducts
const productServer = setupServer(
    rest.get('https://api.escuelajs.co/api/v1/products', (req, res, ctx) => {
        return res(
            ctx.json(products),
        )
    }),
    rest.post('https://api.escuelajs.co/api/v1/products', async (req, res, ctx) => {
        const data = await req.json()
        let newId = products[-1].id + 1
        if(!newId) newId = 1 
        const newProduct = objectParser(data, newId)
        products.push(newProduct)  
        return res(
            ctx.json({data: newProduct})   
        )              
    }),
    rest.delete('https://api.escuelajs.co/api/v1/products/:id', async (req, res, ctx) => {
        const id = Number(req.params.id)
        products = products.filter(item => item.id !== id)
        return res(
            ctx.json(true)
        )
    })
)

export default productServer