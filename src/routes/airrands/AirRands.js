import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AirRands.css';
import AirRandsButton from '../../components/AirRandsButton'
import PlusButton from '../../components/PlusButton'
import sARB from '../../components/AirRandsButton/AirRandsButton.css'


class AirRands extends React.Component {
  static propTypes = {

  };


  render() {
    const buttons = ['name', 'name2'];
    return (
      <div className={s.container}>
        <div>
          <div> <AirRandsButton  isOpen={false}  name='Button 1' /></div>
          <div> <AirRandsButton  isOpen={false}  name='Button 2' /></div>
          <div> <AirRandsButton  isOpen={false}  name='Button 3' /></div>
          <div> <AirRandsButton  isOpen={false}  name='Button 4' /></div>
        </div>
        <div>
          <PlusButton />
        </div>
      </div>
      
    );
  }

}

export default withStyles(s)(AirRands);
