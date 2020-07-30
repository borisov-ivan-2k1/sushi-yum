import { combineReducers } from 'redux'
import { cartReducer as cart} from './cart/reducer'
import { productsReducer as products} from './products/reducer'

export const rootReducer = combineReducers({
  cart,
  products
})