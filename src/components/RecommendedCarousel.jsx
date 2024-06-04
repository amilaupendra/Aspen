import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import RecPlace1 from '../../assets/recplace1.jpg';
import RecPlace2 from '../../assets/recplace2.jpg';

export default function PopularCarousel() {
  const places = [
    {
      name: "Explore Aspen",
      image: RecPlace1,
      quality: "2N/5D",
    },
    {
      name: "Luxurious Aspen",
      image: RecPlace2,
      quality: "2N/5D",
    },
    
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {places.map((place, index) => (
          <View key={index} style={styles.carouselItem}>
            <View style={styles.imageItem}>
              <ImageBackground
                source={ place.image}
                resizeMode="cover"
                style={styles.image}
              ></ImageBackground>
              </View>

              <View style={styles.likeContainer}>
                <Text style={styles.qualityContainer}>{place.quality}</Text>
              </View>
              <Text style={styles.nameContainer}>{place.name}</Text>
            
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
    // paddingTop: 5,
  },
  carouselItem: {
    width: 250,
    height: 170,
    marginRight: 10,
    //   borderRadius: 20,
    overflow: "hidden",
    // backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center'

  },
  imageItem: {
    width: 230,
    height: 130,
    borderRadius: 20,
    overflow:'hidden'

    
  },
  image: {
    flex:1,
    justifyContent: "flex-end",
  },
  textContainer: {
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontSize: 18,
    backgroundColor: "#868B8E",
    alignSelf: "flex-start",
    borderRadius: 20,
    paddingHorizontal: 15,
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
  likeContainer: {
    alignItems: "flex-end",
  },
  qualityContainer: {
    backgroundColor: "#279e5d",
    paddingVertical: 2,
    paddingHorizontal:8,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 2,
    top: -20,
    right:-120,
    color:'white',
    // justifyContent:'flex-end',

    position:'absolute'
  },
  nameContainer:{
    // fontWeight: 'bold',
    fontSize: 16,
    text:'left',
    justifyContent:'flex-start',
    alignSelf:'flex-start',
    marginLeft:20,
  }
});
