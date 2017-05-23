import React from 'react';
import FontAwesome from 'react-fontawesome';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PlusButton.css';


class PlusButton extends React.Component {
  render() {
    return (
    <span className='fa-stack fa-lg'>
    <FontAwesome name='square-o' stack='2x' />
    <FontAwesome name='twitter' stack='1x' />
  </span>
    );
  }
}

export default withStyles(s)(PlusButton);
