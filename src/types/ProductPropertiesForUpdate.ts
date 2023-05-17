interface ProductPropertiesForUpdate {
    id: number,
    data: {
  title?: string
  price?: number,
  description?: string
  images?: string[]
}
}

export default ProductPropertiesForUpdate