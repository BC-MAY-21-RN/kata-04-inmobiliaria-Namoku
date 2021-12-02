import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const Description = ({house}) => {
  return (
    <View>
      <Text style={[styles.name, styles.fontBold]}>{house.name}</Text>
      <Text style={styles.location}>{house.location}</Text>
      <Text style={styles.fontBold}>
        {house.rooms} - {house.baths} - {house.surface}ft²
      </Text>
      <Text style={[styles.name, styles.fontBold]}>${house.price}/m</Text>
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
    <View style={styles.card}>
      <Thumbnail rate={house.rate} />
      <Description house={house} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 16.05,
    resizeMode: 'contain',
    width: 100,
    height: 100,
    marginRight: 20,
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
  card: {
    backgroundColor: '#F5FDFF',
    borderRadius: 15,
    flexDirection: 'row',
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  fontBold: {
    color: 'black',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
  },
  location: {
    color: 'grey',
  },
});

export default Card;
