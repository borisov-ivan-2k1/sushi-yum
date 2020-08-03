// import { bindActionCreators } from 'redux'

export const mapStateToProps = (state) => ({
  productsItems: state.products.productsItems ,
  cartProductsIds: state.cart.cartItemsIds
})

// export const mapDispatchToProps = (dispatch) => bindActionCreators({

// }, dispatch)