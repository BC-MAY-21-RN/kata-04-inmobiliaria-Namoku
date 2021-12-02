/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Card from './components/Card';
import {houses} from './assets/data.json';

const App = () => {
  return <Card house={houses[0]} />;
};
export default App;
