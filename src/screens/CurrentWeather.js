import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utils/weatherType';

const CurrentWeather = () => (
  <SafeAreaView style={styles.wrapper}>
    <View style={styles.headWrapper}>
      <Feather name="sun" size={100} color="black" />
      <Text style={styles.temp}>6</Text>
      <Text style={styles.feels}>Feels likes 5</Text>
      <RowText
        messageOne={'High: 8'}
        messageTwo={'Low: 8'}
        containerStyles={styles.highLowWrapper}
        messageOneStyles={styles.highLow}
        messageTwoStyles={styles.highLow}
      />
    </View>
    <RowText
      messageOne={"It's sunny"}
      messageTwo={weatherType["Thunderstorm"].message}
      containerStyles={styles.bodyWrapper}
      messageOneStyles={styles.description}
      messageTwoStyles={styles.message}
    />
  </SafeAreaView>
);

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  highLowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  highLow: {
    color: 'black',
    fontSize: 24,
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
