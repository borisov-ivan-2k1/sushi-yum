import { PRODUCTS } from '../../products'
import { PRODUCTS_ADD_PRODUCT_COUNT, PRODUCTS_SUB_PRODUCT_COUNT, PRODUCTS_REMOVE_PRODUCT_COUNT } from './actionTypes'

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

    case PRODUCTS_ADD_PRODUCT_COUNT: {
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

    case PRODUCTS_SUB_PRODUCT_COUNT: {
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

    case PRODUCTS_REMOVE_PRODUCT_COUNT: {
      return {
        ...state,
        productsItems: {
          ...state.productsItems,
          [action.payload]: {
            ...state.productsItems[action.payload],
            count: 0
          }
        }
      }
    }

    default:
      return state
  }
}