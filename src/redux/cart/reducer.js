import { CART_ADD_ITEM_TO_CART, CART_REMOVE_ITEM_FROM_CART } from './actionTypes'

const baseState = {
  cartItemsIds: []
}

export const cartReducer = (state = baseState, action) => {

  switch (action.type) {
    case CART_ADD_ITEM_TO_CART: {
      return {
        ...state,
        cartItemsIds: [...state.cartItemsIds, action.payload]
      }
    }

    case CART_REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        cartItemsIds: state.cartItemsIds.filter(id => id !== action.payload)
      }
    }

    default: 
      return state
  }
}