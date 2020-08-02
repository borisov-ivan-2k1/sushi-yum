import { MENU_SET_MENU_ACTIVE_TAB } from './actionTypes'

const baseState = {
  activeTab: 'roll'
}

export const menuReducer = (state = baseState, action) => {

  switch (action.type) {
    
    case MENU_SET_MENU_ACTIVE_TAB: {
      return {
        ...state,
        activeTab: action.payload
      }
    }

    default: 
      return state
  }
}