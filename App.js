import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import ErrorItem from './src/components/ErrorItem';
import { useGetWeather } from './src/hooks/useGetWeather';

const App = () => {
  const [isLoading, errorMsg, weather] = useGetWeather();

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  console.log(errorMsg);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={'blue'} />
      ) : (
        <ErrorItem message={errorMsg} />
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
