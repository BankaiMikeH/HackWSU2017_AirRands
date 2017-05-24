/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import uuidV4 from 'uuid/v4';
import Layout from '../../components/Layout';
import configureStore from '../../store/configureStore';
import AirRands from './AirRands';

const title = 'Air Rands';

export default {

  path: '/airrands',


  action() {
    const initialState = {
      airrands: { list: [{ name: 'first', id: uuidV4() }] },
      button: { isOpen: false },
    };
    const store = configureStore(initialState, {});
    return {
      title,
      component: <Layout><AirRands store={store} /></Layout>,
    };
  },

};
