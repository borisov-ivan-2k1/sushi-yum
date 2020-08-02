export const mapStateToProps = (state) => ({
  cartCount: state.cart.cartItemsIds.length
})