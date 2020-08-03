import React from 'react'
import './CartProductItem.scss'
import { mapStateToProps, mapDispatchToProps } from './CartProductItem.index'
import { connect } from 'react-redux'

import { Button } from '../UI/Button/Button'
import { ButtonCartBox } from '../UI/ButtonCartBox/ButtonCartBox'

const CartProductItemPresenter = ({
  data,

  addProductCount,
  subProductCount,
  removeItemFromCart,
  removeProductCount
}) => {

  const onAddProduct = (id) => {
    addProductCount(id)
  }

  const onRemoveProduct = (id, count) => {
    subProductCount(id)
    count === 1 && removeItemFromCart(id)
  }

  const onRemoveProductFromCart = (id) => {
    removeItemFromCart(id)
    removeProductCount(id)
  }

  return (
    <div className='productCartItem'>

      <div className='productCartItem-name'>
        <img src={data.image} alt='product'/>
        <span>{data.title}</span>
      </div>

      <div className='productCartItem-price'>
        <span>{data.price}р</span>
      </div>

      <div className='productCartItem-count'>
        <ButtonCartBox plus={() => onAddProduct(data.id, data.count)} minus={() => onRemoveProduct(data.id, data.count)} value={data.count}/>
      </div>

      <div onClick={() => onRemoveProductFromCart(data.id)} className='productCartItem-remove'>
        Удалить
      </div>

    </div>
  )
}

export const CartProductItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartProductItemPresenter)