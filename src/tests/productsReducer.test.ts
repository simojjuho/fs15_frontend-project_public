import productsReducer, { createProduct, removeProduct, emptyProductsReducer } from "../redux/reducers/productsReducer"
import singleProduct from "./data/singleInitialProduct"
import initialProducts from "./data/initialProduct"
import store from "./shared/store"

beforeEach(() => {
    store.dispatch(emptyProductsReducer())
    for (let product of initialProducts) {
        store.dispatch(createProduct(product))
    }
})

describe('testing productsReducer', () => {
    test('fetching all entries is working', async () => {

    })

    test('creating new product entries', () => {
        const state = productsReducer(undefined, createProduct(singleProduct))
        expect(state.products).toHaveLength(1)
    })

    test('removing a product is succesful', () => {
        expect(store.getState().productsReducer.products).toHaveLength(3)
        store.dispatch(removeProduct(2))
        expect(store.getState().productsReducer.products).toHaveLength(2)
    })
})




export {}

