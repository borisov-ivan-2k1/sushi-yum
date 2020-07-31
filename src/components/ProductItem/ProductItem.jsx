import React from 'react'
import './ProductItem.scss'
import { Button } from '../UI/Button/Button'

export const ProductItem = ({data}) => {

  return (
    <div className='productItem'>
      <img className='productItem-image' src={data.image}/>
      <span className='productItem-title'>{data.title}</span>
      <span className='productItem-description'>{data.description}</span>

      <div className='productItem-buy'>
        <span>{`${data.price}р.`}</span>
        <Button onClick={() => {}} type='button'>Купить</Button>
      </div>
    </div>
  )
}