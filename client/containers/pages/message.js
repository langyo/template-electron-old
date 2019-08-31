import socket from '../../socket';

export const mapStateToProps = (state) => ({
  ...state.pages.message,
  open: state.views.drawer.show === 'message',
  clipboard: state.data.clipboard
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onToggleClipboard: () => {
    socket.commandRegister.receive('api.clipboard.get', obj => dispatch({
      type: 'data.clipboard.set',
      content: obj.content
    }));
    socket.manager.send({
      type: 'execute',
      package: 'api.clipboard.get'
    });
  }
});
