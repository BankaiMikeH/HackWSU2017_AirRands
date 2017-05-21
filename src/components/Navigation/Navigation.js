import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import SideMenu from '../Menu';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#FFFFFF'
  },
  bmCrossButton: {
    height: '24px',
    width: '240px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}


class Navigation extends React.Component {
  render() {
    return (
      <SideMenu styles={ styles } customCrossIcon={false} >
          <Link className={s.link} to="/airrands">AirRands</Link>
          <Link className={s.link} to="/about">About</Link>
          <Link className={s.link} to="/contact">Contact</Link>
          <Link className={s.link} to="/login">Log in</Link>
          <Link className={s.link} to="/register">Sign up</Link>        
      </SideMenu>
    );
  }
}

export default withStyles(s)(Navigation);
