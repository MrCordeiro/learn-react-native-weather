import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import IconText from '../components/IconText';

const City = () => {
  const {
    container,
    overlay,
    imageLayout,
    cityName,
    countryName,
    cityText,
    populationWraper,
    populationText,
    riseSetWrapper,
    riseSetText,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/bg/city.jpg')}
        style={imageLayout}
      >
        <View style={overlay} />
        <Text style={[cityText, cityName]}>Portree</Text>
        <Text style={[cityText, countryName]}>Scotland</Text>
        <View style={populationWraper}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={'10,000'}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={riseSetWrapper}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={'10:46:23 am'}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={'10:46:23 pm'}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
    marginTop: 50,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 50,
  },
  populationWraper: {
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
  },
  riseSetWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    marginRight: 10,
    color: 'white',
  },
});

export default City;
