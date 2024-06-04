import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useCallback } from 'react';
import React from "react";
import HomeImg from '../../assets/homeimg.jpg';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';



const Home = ({navigation}) => {

  const [fontsLoaded, fontError] = useFonts({
    'Hiatus': require('../../assets/fonts/Hiatus.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  
  console.log(navigation); // Check if navigation prop is received

  
  return (
    <SafeAreaView style={styles.container}>
              <StatusBar style="auto" />

      <ImageBackground source={HomeImg} resizeMode="cover" style={styles.image}>
        <View style={{width:'100%', height:600,}}>
        <Text style={{fontFamily: 'Hiatus',fontSize: 100, color:'white', alignSelf:'center'}}>Aspen</Text>

        </View>
        {/* <Text style={{ fontFamily: 'Hiatus', fontSize: 30, color:'white' }}>Inter Black</Text> */}
        <View style={styles.explore}>
        <Text style={{fontSize:26, color:'white', marginLeft: 20}}>Plan your</Text>
        <Text style={{fontSize:40, color:'white', marginLeft: 20}}>Luxurius</Text>
        <Text style={{fontSize:40, color:'white', marginLeft: 20}}>Vacation</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Explore")} style={styles.button}>
            <Text style={styles.buttonText}>Explore</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 60,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'Hiatus'
  },
  button: {
    backgroundColor: '#1b6ae4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',

  },
  explore:{
    flex:1,
    position: 'absolute',
    bottom: 0,
    marginLeft: 20,
    marginBottom: 20,
    width: '100%',
    alignSelf: 'center',

  },
  buttonText:{
    color: 'white',
    textAlign: 'center'
  }
});
