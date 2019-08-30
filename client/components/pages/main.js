import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
});

class Message extends React.Component {
  static propTypes = {
    // State
    open: PropTypes.bool
  };

  render() {
    const { classes } = this.props;

    return (
      <Fade in={this.props.open}>
        <div>
          <Paper>
            <Typography variant='h3'>
              {'Hello world!'}
            </Typography>
          </Paper>
        </div>
      </Fade>
    );
  }
}

export default withStyles(styles)(Message);
