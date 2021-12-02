import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const Description = ({house}) => {
  return (
    <View>
      <Text>{house.name}</Text>
      <Text>{house.location}</Text>
      <Text>
        {house.rooms} - {house.baths} - {house.surface}
      </Text>
      <Text>${house.price}/m</Text>
    </View>
  );
};

const Thumbnail = ({rate}) => {
  return (
    <ImageBackground
      style={styles.image}
      imageStyle={styles.image}
      source={require('../assets/img/house.png')}>
      <View style={styles.rate}>
        <Text style={styles.rateText}>{rate}</Text>
      </View>
    </ImageBackground>
  );
};

const Card = ({house}) => {
  return (
    <View>
      <Thumbnail rate={house.rate} />
      <Description house={house} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 16.05,
    resizeMode: 'contain',
    width: 125,
    height: 125,
  },
  rate: {
    color: 'white',
    position: 'absolute',
    bottom: 5,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rateText: {
    color: '#7A6229',
    backgroundColor: '#FBEDB7',
    width: 50,
    textAlign: 'center',
    borderRadius: 8,
  },
});

export default Card;
