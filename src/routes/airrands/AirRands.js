import React from 'react';
import Id from '../../utils/id'
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import AddButton from '../../components/AddButton'
import s from './AirRands.css';
import AirRandsButton from '../../components/AirRandsButton'
import PlusButton from '../../components/PlusButton'
import sARB from '../../components/AirRandsButton/AirRandsButton.css'
import * as airrandsActionCreators from '../../actions/airrands'


function mapStateToProps(state) {
  console.log("mapStateToProps: ", state.airrands);
  return {
    airrands: state.airrands,
  };
}

class AirRands extends React.Component {
  static propTypes = {
    store: PropTypes.object,
    airrands: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    })),
    setAirRands: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    console.log("airrands: ", JSON.stringify(this.props.airrands));
    this.state = {
      airrands: this.props.airrands,
      store: this.props.store,
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
    const { setAirRands } = this.props;
    const { airrands } = this.props;
    return (
      <div className={s.container}>
        <div>
          {airrands.map(element => (
            <div> <AirRandsButton isOpen={false} key={Id()} name={element.name} /></div>
          ))}
        </div>
        <div>
          <AddButton/>
        </div>
      </div>

    );
  }

}

export default connect(mapStateToProps, airrandsActionCreators)(withStyles(s)(AirRands));
