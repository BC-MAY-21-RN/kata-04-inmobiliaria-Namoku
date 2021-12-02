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
import {View} from 'react-native';

const App = () => {
  return (
    <View style={{backgroundColor: '#E5E5E5', height: '100%'}}>
      <Card house={houses[0]} />
      <Card house={houses[1]} />
    </View>
  );
};
export default App;
