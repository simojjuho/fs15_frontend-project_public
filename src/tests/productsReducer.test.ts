import productsReducer, { createProduct, removeProduct, emptyProductsReducer, getAllProducts, sortProductsByPrice } from "../redux/reducers/productsReducer"
import singleProduct from "./data/singleInitialProduct"
import initialProducts from "./data/initialProduct"
import store from "./shared/store"
import productServer from "./servers/productsServer"

beforeAll(() => {
    productServer.listen()
})

afterAll(() => {
    productServer.close()
})

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
    
    test('state is initialized and fetching products functions properly', async () => {
        await store.dispatch(getAllProducts())
        const initializedState = store.getState().productsReducer
        expect(initializedState.loading).toBe(false)
        expect(initializedState.error).toBeFalsy()
        expect(initializedState.products).toHaveLength(3)
    })

    test('products are sorted by price ascending', () => {
        store.dispatch(sortProductsByPrice('asc'))
        expect(store.getState().productsReducer.products[0].title).toBe('Reebok sneakers')
        expect(store.getState().productsReducer.products[1].title).toBe('Nike sneakers')
        expect(store.getState().productsReducer.products[2].title).toBe('Adidas sneakers')
    })
})




export {}

