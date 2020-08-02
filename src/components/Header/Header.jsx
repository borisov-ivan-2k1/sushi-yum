import React from 'react'
import './Header.scss'
import logo from '../../assets/img/logo.png'
import cart from '../../assets/img/cart.png'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapStateToProps } from './Header.index'

const HeaderPresenter = ({cartCount}) => {

  return (
    <div className='header'>
      <div className='header-logo'>
        <img src={logo} alt='logo'/>
      </div>

      <div className='header-menu'>
        <NavLink activeClassName='header-menu-active' to='/' exact>Главная</NavLink>
        <NavLink activeClassName='header-menu-active' to='/menu' exact>Меню</NavLink>
        <NavLink activeClassName='header-menu-active' to='/delivery' exact>Доставка</NavLink>
      </div>

      <NavLink className='header-cart' to='cart'>
        <img src={cart}/>
          <div className='header-cart-count'>{cartCount}</div>
      </NavLink>
    </div>
  )
}

export const Header = connect(
  mapStateToProps,
  undefined
)(HeaderPresenter)