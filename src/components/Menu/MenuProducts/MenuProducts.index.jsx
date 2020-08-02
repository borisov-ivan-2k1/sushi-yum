
export const mapStateToProps = (state, props) => {
  console.log(props.type);
  console.log(state.products.products.filter(product => product.type === props.type));
  return {
    productItems: state.products.productsItems,
    productIds: state.products.products.filter(product => product.type === props.type).map(el => el.id),
  }
}
