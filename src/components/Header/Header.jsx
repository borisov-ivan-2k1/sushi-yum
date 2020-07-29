import React from 'react'
import './Header.scss'
import logo from '../../assets/img/logo.png'
import cart from '../../assets/img/cart.png'
import { NavLink } from 'react-router-dom'

export const Header  = () => {

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

      <div className='header-cart'>
        <img src={cart}/>
      </div>
    </div>
  )
}