export default {
  mapStateToProps: (state) => {
    return {
      ...state.pages.picker,
      open: state.views.drawer.show === ''
    };
  },

  mapDispatchToProps: (dispatch, ownProps) => ({
  })
}