import React from 'react'
import './ProductItem.scss'
import { Button } from '../UI/Button/Button'
import { ButtonCartBox } from '../UI/ButtonCartBox/ButtonCartBox'

import {mapStateToProps, mapDispatchToProps} from './ProductItem.index'
import { connect } from 'react-redux'

// import new from 
import newImg from '../../assets/img/new.png'

const ProductItemPresenter = ({
  data, 
  cartItemsIds,
  addProductCount,
  subProductCount,
  addItemToCart,
  removeItemFromCart
}) => {

  let optionImg
  if (data.option === 'new') {
    optionImg = newImg
  }

  const onAddProduct = (id) => {
    addProductCount(id)
    !cartItemsIds.includes(id) && addItemToCart(id)
  }

  const onRemoveProduct = (id, count) => {
    subProductCount(id)
    // при удалении в этом экшене count = 1, значи, чо count будет 0
    count === 1 && removeItemFromCart(id)
  }

  return (
    <div className='productItem'>
      {optionImg && <img className='productItem-optionImage' src={optionImg}/>}
      <img className='productItem-image' src={data.image}/>
      <span className='productItem-title'>{data.title}</span>
      <span className='productItem-description'>{data.description}</span>

      <div className='productItem-buy'>
        <span>{`${data.price}р.`}</span>
        {data.count === 0 ? 
        <Button onClick={() => onAddProduct(data.id)} type='button'>Купить</Button> : 
        <ButtonCartBox plus={() => onAddProduct(data.id, data.count)} minus={() => onRemoveProduct(data.id, data.count)} value={data.count}/>
        }
      </div>
    </div>
  )
}

export const ProductItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItemPresenter)