import { MENU_SET_MENU_ACTIVE_TAB } from './actionTypes'

/**
 * set active tab
 * @param {active tab name} payload 
 */
export const setMenuActiveTab = (payload) => ({
  type: MENU_SET_MENU_ACTIVE_TAB,
  payload
})