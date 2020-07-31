import { PRODUCTS } from '../../products'

let prodctsItems = {}

PRODUCTS.forEach(product => {
  prodctsItems[product.id] = product
})

const baseState = {
  products: PRODUCTS,
  productsIds: PRODUCTS.map(product => product.id),
  prodctsItems
}

export const productsReducer = (state = baseState, action) => {
  switch (action) {

    default:
      return state
  }
}