import React from 'react'
import './ButtonCartBox.scss'

export const ButtonCartBox = ({ value, plus, minus }) => {

  return (
    <div className='buttonCartBox'>
      <div onClick={minus} className='buttonCartBox-minus'>
        -
      </div>
      <div className='buttonCartBox-value'>
        {value}
      </div>
      <div onClick={plus} className='buttonCartBox-plus'>
        +
      </div>
    </div>
  )
}