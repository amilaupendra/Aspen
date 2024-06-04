import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useCallback } from "react";
import React from "react";
import HomeImg from "../../assets/homeimg.jpg";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Landing Page Component
const Home = ({ navigation }) => {
  // Load custom font
  const [fontsLoaded, fontError] = useFonts({
    Hiatus: require("../../assets/fonts/Hiatus.otf"),
  });

  // Function to hide SplashScreen when fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Render nothing if fonts are still loading
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* Background Image */}
      <ImageBackground source={HomeImg} resizeMode="cover" style={styles.image}>
        <View
          style={{ width: "100%", height: 600 }}
          onLayout={onLayoutRootView} // Call onLayoutRootView function when layout is complete
        >
          {/* Title Text */}
          <Text
            style={{
              fontFamily: "Hiatus",
              fontSize: 100,
              color: "white",
              alignSelf: "center",
            }}
          >
            Aspen
          </Text>
        </View>

        {/* Explore Section */}
        <View style={styles.explore}>
          <Text style={{ fontSize: 26, color: "white", marginLeft: 20 }}>
            Plan your
          </Text>
          <Text style={{ fontSize: 40, color: "white", marginLeft: 20 }}>
            Luxurious
          </Text>
          <Text style={{ fontSize: 40, color: "white", marginLeft: 20 }}>
            Vacation
          </Text>

          {/* Explore Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Explore")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Explore</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#1b6ae4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  explore: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    marginLeft: 20,
    marginBottom: 20,
    width: "100%",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
