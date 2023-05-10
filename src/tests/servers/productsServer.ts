import { rest } from 'msw'
import { setupServer } from 'msw/node'
import initialProducts from '../data/initialProduct'

const productServer = setupServer(
    // Describe the requests to mock.
    rest.get("https://api.escuelajs.co/api/v1/products", (req, res, ctx) => {
        /* 
        req: to access params and wuiries of the request
        res: method to send data back
        ctx: method to construct the content of returned data */
        return res(
            ctx.json(initialProducts),
        )
    })
)

export default productServer