export const mapStateToProps = (state) => ({
  ...state.pages.picker,
  open: state.views.drawer.show === 'main'
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
});
