import Role from "./Role";
import ShoppingCart from "./ShoppingCart";



interface User {
    id: string
    username: string
    password: string //Password would not be saved like this if this was not only a frontend project. I would probably implement token base login system or something else.
    role: Role
    description?: string
    address_1: string
    address_2?: string
    postalCode: string
    city: string
    country: string
    phone: string
    shoppingCart?: ShoppingCart
}

export default User