

export const mapStateToProps = (state) => {
  return {
    products: state.products.productsItems,
    productsItems: state.products.productsItems,

    newProductsIds: state.products.products.filter(item => item.option === 'new').map(el => el.id),
    saleProductsIds: state.products.products.filter(item => item.option === 'sale').map(el => el.id),
    superSaleProductsIds: state.products.products.filter(item => item.option === 'superSale').map(el => el.id)
  }
}