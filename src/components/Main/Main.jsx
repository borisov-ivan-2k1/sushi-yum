import React from 'react'
import './Main.scss'
import { Button } from '../UI/Button/Button'

import mainHeader from './mainHeader.png'
import fish from '../../assets/img/fish.png'
import pizza from '../../assets/img/pizza.png'
import sale from '../../assets/img/sale.png'

import { connect } from 'react-redux'
import { mapStateToProps } from './Main.index'

import { ProductItem } from '../ProductItem/ProductItem'

const MainPresenter = ({products}) => {

  return (
    <div className='main'>
      
      <div className='main-header'>
        <div className='main-header-offer'>
          <h1>Доставим суши и пиццу <br/> в течении получаса</h1>
          <Button type='navlink' to='/menu'>Перейти в меню</Button>
          <div className='main-header-offer-items'>

            <div>
              <img src={fish}/>
              <span>Свежие<br /> продукты</span>
            </div>

            <div>
              <img src={pizza}/>
              <span>Быстрая<br /> доставка</span>
            </div>

            <div>
              <img src={sale}/>
              <span>Постоянные<br /> скидки</span>
            </div>

          </div>
        </div>
        <div className='main-header-bg'>
          <img src={mainHeader}/>
        </div>
      </div>

      {Object.keys(products).map(productId => (
        <ProductItem key={products[productId].id} data={products[productId]}/>
      ))}

      
    </div>
  )
}

export const Main = connect(
  mapStateToProps,
  undefined
)(MainPresenter)