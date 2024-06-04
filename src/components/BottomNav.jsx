import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from '@react-navigation/native';


//Bottom Navbar
export default function BottomNav() {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedTab, setSelectedTab] = useState(route.name);

  useEffect(() => {
    setSelectedTab(route.name);
  }, [route.name]);

  const handlePress = (tabName, routeName) => {
    if (routeName !== route.name) {
      navigation.navigate(routeName);
    }
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handlePress("Home", "Home")}
      >
        <Ionicons name="home" size={24} color={selectedTab === "Home" ? "#1dafe2" : "#e8e9ea"} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handlePress("Explore", "Explore")}
      >
        <Ionicons name="map" size={24} color={selectedTab === "Explore" ? "#1dafe2" : "#e8e9ea"} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handlePress("Destination", "Destination")}
      >
        <Ionicons name="heart-outline" size={24} color={selectedTab === "Destination" ? "#1dafe2" : "#e8e9ea"} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handlePress("Profile", "Profile")}
      >
        <Ionicons name="person" size={24} color={selectedTab === "Profile" ? "#1dafe2" : "#e8e9ea"}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff", 
    height: 60,
    borderTopWidth: 0.2,
    borderTopColor: "gray",
    borderRadius:20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
