import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from '../screens/Home';
import Home from '../screens/Home';
import Destination from '../screens/Destination';

const Tab = createBottomTabNavigator();


export default function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Destination" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})