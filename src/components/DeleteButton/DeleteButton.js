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
import s from './DeleteButton.css';
import * as airrandsActionCreators from '../../actions/airrands';


function mapStateToProps(state) {
  // console.log('mapStateToProps: ', state.airrands);
  return {
    list: state.airrands.list,
  };
}

class DeleteButton extends React.Component {

  static propTypes = {
    store: PropTypes.object,
    setAirRands: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string.isRequired,
    })),
    id: PropTypes.string.isRequired,
  };

  static defaultProps = {
    list: [],
    id: '',
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

  deleteTask() {
    const { id } = this.props;
    console.log('in the delete task method: ', this.props);
    // e.preventDefault();
    const { setAirRands, list } = this.props;

    const newList = list.filter(task => task.id !== id);
    setAirRands({ name: 'list', list: newList });
  }

  render() {
    return (
      <button className={s.boxField} onClick={() => this.deleteTask()}> - </button>
    );
  }

}

export default connect(mapStateToProps, airrandsActionCreators)(withStyles(s)(DeleteButton));
