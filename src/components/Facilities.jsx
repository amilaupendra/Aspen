import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Facilities() {
  return (
    <View style={styles.container}>
      <View style={styles.facilityContaier}>
        <Feather name="wifi" size={24} color="#bdbdbd" />
        <Text style={styles.facilityText}>1 heater</Text>
      </View>
      <View style={styles.facilityContaier}>
        <MaterialIcons name="dinner-dining" size={24} color="#bdbdbd" />
        <Text style={styles.facilityText}>Dinner</Text>

      </View>
      <View style={styles.facilityContaier}>
        <FontAwesome name="bathtub" size={24} color="#bdbdbd" />
        <Text style={styles.facilityText}>1 Tub</Text>

      </View>
      <View style={styles.facilityContaier}>
        <FontAwesome5 name="swimming-pool" size={24} color="#bdbdbd" />
        <Text style={styles.facilityText}>Pool</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    marginTop: 40,
    flexDirection: "row",
    // backgroundColor:'red',
  },
  facilityContaier: {
    width: "23%",
    height: "100%",
    backgroundColor: "#ecf6fe",
    borderRadius: 20,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  facilityText:{
    fontSize:12,
    color:'#bdbdbd',
  }
});
