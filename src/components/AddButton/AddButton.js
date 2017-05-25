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
import uuidV4 from 'uuid/v4';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AddButton.css';
import * as airrandsActionCreators from '../../actions/airrands';


function mapStateToProps(state) {
  return {
    list: state.airrands.list,
  };
}

class AddButton extends React.Component {

  static propTypes = {
    store: PropTypes.object,
    setAirRands: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      isOpen: PropTypes.bool.isRequired,
    })),
  };

  static defaultProps = {
    list: [],
  }

  constructor(props) {
    super(props);
    this.state = {
      list: [],
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

  addRow() {
    const { setAirRands, list } = this.props;
    list.push({ name: uuidV4(), id: uuidV4(), isOpen: false });

    setAirRands({ name: 'list', list });
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <button onClick={() => this.addRow()}>+</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, airrandsActionCreators)(withStyles(s)(AddButton));
