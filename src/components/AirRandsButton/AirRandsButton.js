/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AirRandsButton.css';
import * as buttonActionCreators from '../../actions/button';


function mapStateToProps(state) {
  console.log('mapStateToProps: ', state.isOpen);
  return {
    isOpen: state.button.isOpen,
  };
}

class AirRandsButton extends React.Component {
  static propTypes = {
    store: PropTypes.object,
    name: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    setButtonVisibility: PropTypes.func.isRequired,
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

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() =>
      this.forceUpdate(),
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  toggleView() {
    const { setButtonVisibility } = this.props;
    setButtonVisibility({ name: 'isOpen', isOpen: !this.props.isOpen });
    console.log('state: ', this.state.isOpen);
  }

  render() {
    return (
      <button onClick={() => this.toggleView()} className={s.airRandsButton}>
        <span >
          {this.props.name}
        </span>
        {
          this.props.isOpen &&
          <div className={s.OpenAirRands}> Extra Details Text </div>
        }
      </button>
    );
  }
}

export default connect(mapStateToProps, buttonActionCreators)(withStyles(s)(AirRandsButton));
