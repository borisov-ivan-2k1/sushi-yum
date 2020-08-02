import React from 'react'
import './Menu.scss'
import { mapStateToProps, mapDispatchToProps } from './Menu.index'
import { connect } from 'react-redux'

import { MenuProducts } from './MenuProducts/MenuProducts'

const MenuPresenter = ({
  activeTab,
  setMenuActiveTab
}) => {
  return (
    <div className='menu'>

      <div className='menu-tabs'>
        <div onClick={() => setMenuActiveTab('roll')} className={activeTab === 'roll' ? 'menu-tabs-active': ''}>Роллы</div>
        <div onClick={() => setMenuActiveTab('sushi')} className={activeTab === 'sushi' ? 'menu-tabs-active': ''}>Суши</div>
        <div onClick={() => setMenuActiveTab('rollSet')} className={activeTab === 'rollSet' ? 'menu-tabs-active': ''}>Наборы</div>
      </div>

      <div className='menu-body'>
        <MenuProducts type={activeTab}/>
      </div>

    </div>
  )
}

export const Menu = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuPresenter)