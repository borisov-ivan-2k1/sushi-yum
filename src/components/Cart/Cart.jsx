import React from 'react'
import './Cart.scss'
import { mapStateToProps } from './Cart.index'
import { connect } from 'react-redux'
import cartBig from '../../assets/img/cartBig.png'

import { CartProductItem } from '../CartProductItem/CartProductItem'
import { Button } from '../UI/Button/Button'

const CartPresenter = ({ productsItems, cartProductsIds }) => {
  return (
    <div className='cart'>
      <img src={cartBig} className='cart-img' />

      {!cartProductsIds.length ?
        <div>Корзина пуста</div> :
        <div className='cart-body'>
          <div className='cart-body-items'>
            {cartProductsIds.map(cartProductId => (
              <CartProductItem data={productsItems[cartProductId]} />
            ))}
          </div>

          <div className='cart-body-sum'>
              <div>Итого</div>
              <div>{cartProductsIds.reduce((acc, id) => acc + (productsItems[id].price * productsItems[id].count ), 0)}р</div>
              <Button>Далее</Button>
          </div>
        </div>

      }

    </div>
  )
}

export const Cart = connect(
  mapStateToProps,
  undefined
)(CartPresenter)