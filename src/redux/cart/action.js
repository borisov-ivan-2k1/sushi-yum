import { CART_ADD_ITEM_TO_CART, CART_REMOVE_ITEM_FROM_CART } from './actionTypes'
/**
 * @param { id } payload product id
 */
export const addItemToCart = (payload) => ({
  type: CART_ADD_ITEM_TO_CART,
  payload
})

/**
 * @param { id } payload product id
 */
export const removeItemFromCart = (payload) => ({
  type: CART_REMOVE_ITEM_FROM_CART,
  payload
})