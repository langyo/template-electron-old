import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

const styles = theme => ({
});

class Main extends React.Component {
  static propTypes = {
    // State
    open: PropTypes.bool
  };

  render() {
    const { classes } = this.props;

    return (
      <Fade in={this.props.open}>
        <div>
          
        </div>
      </Fade>
    );
  }
}

export default withStyles(styles)(Main);
