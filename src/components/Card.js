import React, {useState} from 'react';
import {View, Text, ImageBackground, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/Card.js';

const FavoriteButton = () => {
  const [liked, changeLiked] = useState(true);
  return (
    <TouchableHighlight
      onPress={() => changeLiked(!liked)}
      style={[
        styles.heartContainer,
        {backgroundColor: liked ? '#00B074' : 'pink'},
      ]}>
      <Icon name="heart" size={20} color="#fff" />
    </TouchableHighlight>
  );
};

const IncludesView = ({item, icon, cons}) => {
  return (
    <View style={styles.includesView}>
      <Icon name={icon} color="black" size={20} />
      <Text style={styles.includesFont}>
        {item}
        {cons}
      </Text>
    </View>
  );
};

const Includes = ({rooms, baths, surface}) => {
  return (
    <View style={styles.includesContainer}>
      <IncludesView item={rooms} icon="bed-outline" />
      <IncludesView item={baths} icon="water-outline" />
      <IncludesView item={surface} icon="home-outline" cons="ft²" />
    </View>
  );
};

const Description = ({house}) => {
  return (
    <View style={{flex: 1}}>
      <Text style={[styles.name, styles.fontBold]}>{house.name}</Text>
      <View style={styles.includesView}>
        <Icon name="location-outline" color="black" size={20} />
        <Text style={styles.location}>{house.location}</Text>
      </View>
      <Includes
        rooms={house.rooms}
        baths={house.baths}
        surface={house.surface}
      />
      <Text style={[styles.name, styles.fontBold]}>${house.price}/m</Text>
      <FavoriteButton />
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
        <Icon name="star" size={10} color="#EEBA00" />
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

export default Card;
