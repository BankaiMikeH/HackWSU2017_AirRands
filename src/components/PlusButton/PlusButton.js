import React from 'react';
import FontAwesome from 'react-fontawesome';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PlusButton.css';


class PlusButton extends React.Component {
  render() {
    return (
    <div>
        <FontAwesome
        className='super-crazy-colors'
        name='rocket'
        size='2x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      ></FontAwesome>
    </div>
    );
  }
}

export default withStyles(s)(PlusButton);
