import React from 'react'
import './ProductItem.scss'
import { Button } from '../UI/Button/Button'
import { ButtonCartBox } from '../UI/ButtonCartBox/ButtonCartBox'

import {mapStateToProps, mapDispatchToProps} from './ProductItem.index'
import { connect } from 'react-redux'

// import new from 
import newImg from '../../assets/img/new.png'

const ProductItemPresenter = ({data, addProductCart, removeProductCart}) => {

  let optionImg
  if (data.option === 'new') {
    optionImg = newImg
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
        <Button onClick={() => addProductCart(data.id)} type='button'>Купить</Button> : 
        <ButtonCartBox plus={() => addProductCart(data.id)} minus={() => removeProductCart(data.id)} value={data.count}/>
        }
      </div>
    </div>
  )
}

export const ProductItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItemPresenter)