import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Importing icons
import Explore from '../screens/Explore'; // Correct import path
import Home from '../screens/Home';
import Destination from '../screens/Destination';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Destination') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'heart' : 'heart-outline';
          }else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerShown: false
        // tabBarStyle: styles.tabBar, // Applying custom style
        // tabBarItemStyle: styles.tabBarItem, // Applying custom item style
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Destination" component={Destination} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Profile" component={Explore} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 10,
    // overflow: 'hidden',
    // position: 'absolute',
    left: 0,
    right: 0,
    tabBar: 0,
    elevation: 0,
    height: 60,
    shadowColor: '#000',
    // shadowOffset: { width: 0, height: 10 },
    // shadowOpacity: 0.12,
    // shadowRadius: 10,
  },
  tabBarItem: {
    borderRadius: 20,
    margin: 5,
  },
});
