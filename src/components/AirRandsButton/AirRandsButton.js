import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AirRandsButton.css';
import * as airrandsActionCreator from '../../actions/airrands';

function mapStateToProps(state) {
  return {
    isOpen: state.airrands.isOpen,
    list: state.airrands.list,
  };
}

class AirRandsButton extends React.Component {
  static propTypes = {
    store: PropTypes.object,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    setAirRands: PropTypes.func.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      isOpen: PropTypes.bool.isRequired,
    })),

    //setButtonVisibility: PropTypes.func.isRequired,
    // description: PropTypes.string.isRequired,
    // destinationA: PropTypes.string.isRequired,
    // destinationB: PropTypes.string.isRequired,
    // payments: PropTypes.number.isRequired,
    // status: PropTypes.string.isRequired,
    // messages: PropTypes.string.isRequired,
    // rating: PropTypes.number.isRequired,
  };

  static defaultProps = {
    isOpen: false,
    list: [],
  }

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
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

  filterById(task) {
    const { id, setIsOpen } = this.props;
    if (task.id === id) {
      const isVisible = task.isOpen !== true;
      const showButton = { isOpen: isVisible };
      Object.assign(task, { ...showButton });
      setIsOpen({ name: 'isOpen', isOpen: isVisible });
    }
    return task;
  }

  toggleView() {
    const { setAirRands, list } = this.props;
    const filteredList = list.filter(task => this.filterById(task));
    setAirRands({ name: 'list', list: filteredList });
  }

  render() {
    const { id, list } = this.props;
    const me = list.filter(task => task.id === id);
    return (
      <div>
        <button onClick={() => this.toggleView()} className={s.airRandsButton}>
          <span >
            {this.props.name}
          </span>
          { me[0].isOpen &&
            <span className={s.openAirRands}> Extra Details Text </span>
          }
        </button>
      </div>

    );
  }
}

export default connect(mapStateToProps, airrandsActionCreator)(withStyles(s)(AirRandsButton));
