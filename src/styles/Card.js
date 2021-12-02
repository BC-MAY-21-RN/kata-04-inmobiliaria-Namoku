import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    borderRadius: 16.05,
    resizeMode: 'contain',
    width: 100,
    height: 100,
    marginRight: 20,
  },
  rate: {
    color: '#7A6229',
    backgroundColor: '#FBEDB7',
    width: 50,
    height: 22,
    position: 'absolute',
    flexDirection: 'row',
    bottom: 5,
    left: 25,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  rateText: {
    fontWeight: 'bold',
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
    fontSize: 15,
    marginLeft: 8,
  },
  heartContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#00B074',
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  includesContainer: {
    flexDirection: 'row',
  },
  includesView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 25,
  },
  includesFont: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default styles;
