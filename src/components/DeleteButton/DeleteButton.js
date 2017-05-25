import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DeleteButton.css';
import * as airrandsActionCreators from '../../actions/airrands';


function mapStateToProps(state) {
  return {
    list: state.airrands.list,
  };
}

class DeleteButton extends React.Component {

  static propTypes = {
    store: PropTypes.object,
    setAirRands: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      isOpen: PropTypes.bool.isRequired,
    })),
  };

  static defaultProps = {
    list: [],
    id: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      id: '',
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
    const { id, setAirRands, list } = this.props;
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
