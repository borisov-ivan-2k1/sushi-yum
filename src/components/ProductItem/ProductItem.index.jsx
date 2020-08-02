import { addProductCount, subProductCount } from '../../redux/products/action'
import { addItemToCart, removeItemFromCart } from '../../redux/cart//action'
import { bindActionCreators } from 'redux'

export const mapStateToProps = (state) => ({
  cartItemsIds: state.cart.cartItemsIds,
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  addProductCount,
  subProductCount,
  addItemToCart,
  removeItemFromCart
}, dispatch)