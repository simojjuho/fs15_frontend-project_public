import Role from "./Role";
import ShoppingCart from "./ShoppingCart";

interface User {
    id: string
    username: string
    passwordHash: string
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