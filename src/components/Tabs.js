/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';

const TabBarIcon = ({ focused, name }) => (
  <Feather name={name} size={25} color={focused ? 'tomato' : 'black'} />
);

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'lightblue',
        },
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
          color: 'tomato',
        },
      }}
    >
      <Tab.Screen
        name="Current"
        component={CurrentWeather}
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name="droplet" />,
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={UpcomingWeather}
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name="clock" />,
        }}
      />
      <Tab.Screen
        name="City"
        component={City}
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name="home" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
