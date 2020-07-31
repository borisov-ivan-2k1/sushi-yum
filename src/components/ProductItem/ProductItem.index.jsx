import { addProductCart, removeProductCart } from '../../redux/products/action'
import { bindActionCreators } from 'redux'

export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  addProductCart,
  removeProductCart
}, dispatch)