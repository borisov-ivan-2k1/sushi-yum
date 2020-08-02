import { bindActionCreators } from 'redux'
import { setMenuActiveTab } from '../../redux/menu/action'


export const mapStateToProps = (state) => ({
  activeTab: state.menu.activeTab
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  setMenuActiveTab
}, dispatch)