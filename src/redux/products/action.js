import { PRODUCTS_ADD_PRODUCT_COUNT, PRODUCTS_SUB_PRODUCT_COUNT, PRODUCTS_REMOVE_PRODUCT_COUNT } from './actionTypes'

/**
 * add product to cart by id
 * @param {productId} payload 
 */
export const addProductCount = (payload) => ({
  type: PRODUCTS_ADD_PRODUCT_COUNT,
  payload
})

/**
 * remove product from cart by id
 * @param {productId} payload 
 */
export const subProductCount = (payload) => ({
  type: PRODUCTS_SUB_PRODUCT_COUNT,
  payload
})

/**
 * zeroing product count
 * @param {productId} payload 
 */
export const removeProductCount = (payload) => ({
  type: PRODUCTS_REMOVE_PRODUCT_COUNT,
  payload
})
