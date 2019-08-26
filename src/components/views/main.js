import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';

import { Window, TitleBar } from 'react-desktop/windows';

import AboutDialog from '../../containers/dialog/about';
import ThemeDialog from '../../containers/dialog/theme';
import SettingDialog from '../../containers/dialog/setting';

import Fab from '../../containers/views/fab';
import Drawer from '../../containers/views/drawer';

const requirePageFunc = require.context('../pages', true, /\.js$/);
let pages = {};

requirePageFunc.keys().forEach(key => {
  let path = /^\.\/(.*)\.js$/.exec(key)[1].split('/');
  const dfs = obj => {
    let head = path.shift();
    if (path.length > 0) {
      if (obj[head]) obj[head] = dfs(obj[head]);
      else obj[head] = dfs({});
    } else {
      obj[head] = requirePageFunc(key);
    }
    return obj;
  }
  pages = dfs(pages);
});

const styles = theme => ({
  main: {
    overflow: 'auto',
    height: 'calc(100%)',
    width: '700px',
    marginLeft: "auto",
    marginRight: "auto",
    position: 'relative'
  }
});

class Main extends React.Component {
  static propTypes = {
    theme: PropTypes.object,
    page: PropTypes.string
  };

  render() {
    const { classes } = this.props;

    return (
      <Window
        chrome
        height='600px'
        width='800px'
        padding='0px'>
        <TitleBar title='TEMPLATE' controls
                  onCloseClick={() => window.close()}
                  onMinimizeClick={() => console.log('minimize')}
                  style={{ zIndex: 10000 }} />
        <MuiThemeProvider theme={this.props.theme}>
          {/* Dialogs */}
          <AboutDialog />
          <ThemeDialog />
          <SettingDialog />
          {/* Views*/}
          <Fab />
          <Drawer />
          {/* Pages */}
          <div className={classes.main}>
            {pages[this.props.page].default}
          </div>
        </MuiThemeProvider>
      </Window>
    )
  }
}

export default withStyles(styles)(Main);
