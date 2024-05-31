import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';


export default function PopularCarousel() {
  const places = [
    { name: "Alley place", image: "https://picsum.photos/200/300", rating: 4.5 },
    { name: "Coeurdes Alpes", image: "https://picsum.photos/200/300", rating: 4.8 },
    { name: "Swiz", image: "https://picsum.photos/200/300", rating: 4.8 },
    { name: "nepal", image: "https://picsum.photos/200/300", rating: 4.8 },
    { name: "kandy", image: "https://picsum.photos/200/300", rating: 4.8 },
    { name: "Place 2", image: "https://picsum.photos/200/300", rating: 4.8 },
    { name: "Place 2", image: "https://picsum.photos/200/300", rating: 4.8 },
    { name: "Place 2", image: "https://picsum.photos/200/300", rating: 4.8 },
    { name: "Place 2", image: "https://picsum.photos/200/300", rating: 4.8 },
    { name: "Place 2", image: "https://picsum.photos/200/300", rating: 4.8 },
    { name: "Place 2", image: "https://picsum.photos/200/300", rating: 4.8 },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {places.map((place, index) => (
          <View key={index} style={styles.carouselItem}>
            <ImageBackground
              source={{ uri: place.image }}
              resizeMode="cover"
              style={styles.image}
            >
              <Text style={styles.text}>{place.name}</Text>
              <View style={styles.textContainer}>
                <View style={styles.ratingContainer}>
                <Entypo name="star" size={24} color="yellow" />
                  <Text style={styles.ratingText}>{place.rating}</Text>
                </View>
                <View style={styles.likeContainer}>
                  <Ionicons name="heart-circle" size={24} color="red" />
                </View>
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding:5,
  },
  carouselItem: {
    width: 200,
    height: 250,
    marginRight: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  textContainer: {
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    flexDirection: "row",
    justifyContent:"space-between"
  },
  text: {
    color: "white",
    fontSize: 18,
    backgroundColor:'#868B8E',
    alignSelf: "flex-start",
    borderRadius:20,
    paddingHorizontal:15,


  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    backgroundColor: "#868B8E",
    borderRadius: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 5,
  },
  ratingText: {
    color: "white",
    fontSize: 14,
    marginLeft: 5,
  },
  likeContainer:{
    flexDirection: "row",
    
  }
});
