import { CART_SET_CART_ITEMS } from './actionTypes'

const baseState = {
  cartSum: 0,
  cartItems: []
}

export const cartReducer = (state = baseState, action) => {
  switch (action) {
    case CART_SET_CART_ITEMS: {
      return {
        ...state,
        cartSum: state.cartSum + action.payload.price,
        items: [...state.cartItems, action.payload]
      }
    }
    default: 
      return state
  }
}