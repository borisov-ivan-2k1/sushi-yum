import React from 'react'
import './MenuProducts.scss'
import { mapStateToProps } from './MenuProducts.index'
import { connect } from 'react-redux'

import { ProductItem } from '../../ProductItem/ProductItem'

const MenuProductsPresenter = ({ productItems, productIds }) => {

  return (
    <>
      {!productIds.length ?
        <div className='empty'>Тут пока пусто</div> :

        <div className='menuProducts'>
          {productIds.map(productId => (
            <ProductItem data={productItems[productId]} />
          ))}
        </div>
      }

    </>
  )
}

export const MenuProducts = connect(
  mapStateToProps,
  undefined
)(MenuProductsPresenter)