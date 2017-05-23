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
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AirRandsButton.css';
import Id from '../../utils/id'




class AirRandsButton extends React.Component {
    static propTypes = {
    name: PropTypes.string.isRequired,
    key: 0,
        // description: PropTypes.string.isRequired,
        // destinationA: PropTypes.string.isRequired,
        // destinationB: PropTypes.string.isRequired,
        // payments: PropTypes.number.isRequired,
        // status: PropTypes.string.isRequired,
        // messages: PropTypes.string.isRequired,
        // rating: PropTypes.number.isRequired,
    };

    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
    }


    render() {
        return (
            <span onClick={() => this.toggleView()} className={s.airRandsButton}>
                <span >
                    {this.props.name}                    
                </span>
                {
                    this.state.isOpen && 
                     <div className={s.OpenAirRands}></div>
                }
            </span>
        );
    }
    
    toggleView() {
        this.setState({isOpen: !this.state.isOpen});
        console.log('state: ', this.state.isOpen);
    }
}

export default withStyles(s)(AirRandsButton);