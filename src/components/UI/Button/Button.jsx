import React from 'react'
import { NavLink } from 'react-router-dom'
import './Button.scss'

export const Button = ({type = 'button', onClick, children, to = ''}) => {

  return (
    <>
      {type === 'button' &&
        <button className={'button'} onClick={onClick}>{children}</button>
      }
      {type === 'navlink' &&
        <NavLink className={'button'} to={to}>{children}</NavLink>
      }
    </>
  )
}