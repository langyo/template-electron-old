import { connect } from 'react-redux'

import Picker from '../../components/pages/picker';

const mapStateToProps = (state) => {
  return {
    ...state.pages.picker,
    open: state.views.drawer.show === ''
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picker);