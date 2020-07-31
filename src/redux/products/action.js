import { PRODUCTS_ADD_PRODUCT_TO_CART, PRODUCTS_REMOVE_PRODUCT_TO_CART } from './actionTypes'

/**
 * add product to cart by id
 * @param {productId} payload 
 */
export const addProductCart = (payload) => ({
  type: PRODUCTS_ADD_PRODUCT_TO_CART,
  payload
})

/**
 * remove product from cart by id
 * @param {productId} payload 
 */
export const removeProductCart = (payload) => ({
  type: PRODUCTS_REMOVE_PRODUCT_TO_CART,
  payload
})