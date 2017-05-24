import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import AddButton from '../../components/AddButton';
import s from './AirRands.css';
import AirRandsButton from '../../components/AirRandsButton';
import * as airrandsActionCreators from '../../actions/airrands';


function mapStateToProps(state) {
  return {
    list: state.airrands.list,
    isOpen: state.isOpen,
  };
}

class AirRands extends React.Component {
  static propTypes = {
    store: PropTypes.object,
    isOpen: PropTypes.bool.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })),
  };

  static defaultProps = {
    list: [],
    isOpen: false,
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

  render() {
    const { list, store } = this.props;
    return (
      <div className={s.container}>
        <div>
          {(this.props.list || [{ name: 'Add a Task...' }]).map((task, index) => (
            <div key={index}>
              <AirRandsButton
                isOpen={this.props.isOpen}
                name={task.name}
                store={store}
              />
            </div>
          ))}
        </div>
        <AddButton list={list} store={store} />
      </div>

    );
  }
}

export default connect(mapStateToProps, airrandsActionCreators)(withStyles(s)(AirRands));
