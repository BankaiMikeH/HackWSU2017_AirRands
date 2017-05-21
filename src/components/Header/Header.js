import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import logoAirRands from './air_rands.png';


class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link className={s.brand} to="/">
            <img src={logoAirRands}  width="154" height="90" alt="React" />
          </Link>
         
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Air Rands</h1>
            <p className={s.bannerDesc}>Complex web apps made easy</p>
          </div>
           
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
