import React from 'react';
import moment from 'moment';
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utils/weatherType';

export const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { item, date, temp, dataTextWrapper } = styles;
  return (
    <View style={item}>
      <Feather name={weatherType[condition].icon} size={50} color="white" />
      <View style={dataTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}º/ ${Math.round(max)}º`}</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink',
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  dataTextWrapper: {
    flexDirection: 'column',
  },
});
