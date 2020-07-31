import { PRODUCTS } from '../../products'
import { PRODUCTS_ADD_PRODUCT_TO_CART, PRODUCTS_REMOVE_PRODUCT_TO_CART } from './actionTypes'

let productsItems = {}

PRODUCTS.forEach(product => {
  productsItems[product.id] = product
})

const baseState = {
  products: PRODUCTS,
  productsIds: PRODUCTS.map(product => product.id),
  productsItems
}

export const productsReducer = (state = baseState, action) => {
  switch (action.type) {

    case PRODUCTS_ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        productsItems: {
          ...state.productsItems,
          [action.payload]: {
            ...state.productsItems[action.payload],
            count: state.productsItems[action.payload].count += 1
          }
        }
      }
    }

    case PRODUCTS_REMOVE_PRODUCT_TO_CART: {
      return {
        ...state,
        productsItems: {
          ...state.productsItems,
          [action.payload]: {
            ...state.productsItems[action.payload],
            count: state.productsItems[action.payload].count -= 1
          }
        }
      }
    }

    default:
      return state
  }
}