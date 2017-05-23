/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import s from './AddButton.css';
import Link from '../Link';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import AirRandsButton from '../AirRandsButton'
import AirRands from '../../routes/airrands'
import withStyles from 'isomorphic-style-loader/lib/withStyles';


class AddButton extends React.Component {

  static propTypes = {

    //name: "AddButton",
    // description: PropTypes.string.isRequired,
    // destinationA: PropTypes.string.isRequired,
    // destinationB: PropTypes.string.isRequired,
    // payments: PropTypes.number.isRequired,
    // status: PropTypes.string.isRequired,
    // messages: PropTypes.string.isRequired,
    // rating: PropTypes.number.isRequired,
  };


  constructor(props) {
    super(props);
     this.state = {
       isOpen: false,
     };
  }


  render() {
     const { setAirRands } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <button>+</button>
        </div>
      </div>
    );
  }

}

export default withStyles(s)(AddButton);
