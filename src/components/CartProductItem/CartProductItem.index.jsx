import { bindActionCreators } from 'redux'
import { addProductCount, subProductCount, removeProductCount } from '../../redux/products/action'
import { removeItemFromCart } from '../../redux/cart//action'

export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  addProductCount,
  subProductCount,
  removeItemFromCart,
  removeProductCount
}, dispatch)