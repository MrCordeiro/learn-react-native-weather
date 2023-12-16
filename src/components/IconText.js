import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const IconText = ({ iconName, iconColor, bodyText, bodyTextStyles }) => {
  const { wrapper, textTheme } = styles;

  return (
    <View style={wrapper}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTheme: {
    fontWeight: 'bold',
  },
});

export default IconText;
