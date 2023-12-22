import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import ErrorItem from './src/components/ErrorItem';
import { useGetWeather } from './src/hooks/useGetWeather';

const App = () => {
  const [isLoading, errorMsg, weather] = useGetWeather();

  if (weather && weather.list && !isLoading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <ErrorItem message={errorMsg} />
      ) : (
        <ActivityIndicator size={'large'} color={'blue'} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
