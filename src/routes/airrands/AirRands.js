import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import AddButton from '../../components/AddButton';
import DeleteButton from '../../components/DeleteButton';
import s from './AirRands.css';
import AirRandsButton from '../../components/AirRandsButton';
import * as airrandsActionCreators from '../../actions/airrands';


function mapStateToProps(state) {
  return {
    list: state.airrands.list,
  };
}

class AirRands extends React.Component {
  static propTypes = {
    store: PropTypes.object,
    list: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
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

  render() {
    const { list, store } = this.props;
    return (
      <div className={s.container}>
        <div>
          {(this.props.list).map(task => (
            <div key={task.id}>
              <AirRandsButton
                id={task.id}
                isOpen={task.isOpen}
                name={task.name}
                store={store}
                list={list}
              />
              <DeleteButton id={task.id} list={list} store={store} >-</DeleteButton>
            </div>
          ))}
        </div>
        <AddButton list={list} store={store} />
      </div>
    );
  }
}

export default connect(mapStateToProps, airrandsActionCreators)(withStyles(s)(AirRands));
