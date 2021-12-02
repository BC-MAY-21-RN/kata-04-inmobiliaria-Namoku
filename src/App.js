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
import {View, FlatList} from 'react-native';

const App = () => {
  const renderItem = ({item}) => {
    return <Card house={item} />;
  };

  return (
    <View style={{backgroundColor: '#E5E5E5', height: '100%'}}>
      <FlatList
        data={houses}
        renderItem={renderItem}
        keyExtractor={({index}) => index}
      />
    </View>
  );
};
export default App;
