import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from './src/screens/Explore'
import Destination from './src/screens/Destination';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safecontainer}>
      <StatusBar style="light" />
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WElcome' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Destination" component={Destination} />

      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  },
  safecontainer:{
    flex:1,
  }
});
