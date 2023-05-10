import Product from "../../types/Product";

const initialProducts: Product[] = [{
    id: 1,
    title: 'Nike sneakers',
    price: 199.99,
    description: 'Cool sneakers!',
    images: ['firstImg.com', 'secondImg.fi'],
    creationAt: '09-12-2022',
    updateAt: '02-01-2023'
},
{
    id: 2,
    title: 'Adidas sneakers',
    price: 210.99,
    description: 'A bit better sneakers!',
    images: ['firstImg.com', 'secondImg.fi'],
    creationAt: '07-12-2022',
    updateAt: '06-01-2023'
},
{
    id: 3,
    title: 'Reebok sneakers',
    price: 189.99,
    description: 'A bit worse sneakers!',
    images: ['firstImg.com', 'secondImg.fi'],
    creationAt: '07-12-2022',
    updateAt: '06-01-2023'
}
]

export default initialProducts