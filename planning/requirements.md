# Site requirements from the assignment

Create e-commerce website
- use API endpoint https://fakeapi.platzi.com/
- Pages
    1. Home
    2. Product
    3. Profile (logged-in user only)
    4. Cart page (or modal)
- Redux:
    - productsReducer
        1. getAllProducts
        2. findSingleProduct
        3. sortProducts (by price)
        4. createProduct (for admin only)
        5. updateProduct (for admin only)
        6. deleteProduct (for admin only)
    - userReducer
        1. registerUser
        2. loginUser
    - cartReducer
        1. addProduct
        2. removeProduct
        3. updateProduct
- If time:
    - context api to switch theme
    - unit testing for reducers !important