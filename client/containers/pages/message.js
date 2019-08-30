export const mapStateToProps = (state) => ({
    ...state.pages.picker,
    open: state.views.drawer.show === 'message'
  });
  
  export const mapDispatchToProps = (dispatch, ownProps) => ({
  });
  