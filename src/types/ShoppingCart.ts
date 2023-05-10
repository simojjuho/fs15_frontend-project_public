import Product from "./Product"

interface ShoppingCart {
    id: string
    creationAt: string
    updateAt: string
    productsInCart: Product[]
}

export default ShoppingCart