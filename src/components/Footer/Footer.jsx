import React from 'react'
import './Footer.scss'
import logo from '../../assets/img/logo.png'
import { NavLink } from 'react-router-dom'

export const Footer = ({}) => {

  return (
    <div className='footer'> 
      <div className='footer-wrapper'>
        <div className='footer-left'>
          <img src={logo}/>
          <div className='footer-left-menu'>
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='/menu'>Меню</NavLink>
            <NavLink to='/delivery'>Доставка</NavLink>
          </div>
        </div>

        <div className='footer-right'>
          <span>&copy; 2020 Все права защищены</span>
        </div>
      </div>
    </div>
  )
}