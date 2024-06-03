import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import  {React,useState} from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import Place1 from '../../assets/place1.jpg';
import Place2 from '../../assets/place2.jpg';
import PopularPlaceCard from '../components/PopularPlaceCard';





import Place3 from '../../assets/place3.jpg';


export default function PopularCarousel() {
  const places = [
    { name: "Alley place", image: Place1, rating: 4.5 },
    { name: "Swiz", image: Place2, rating: 4.8 },
    { name: "nepal", image: Place3, rating: 4.8 },
    // { name: "kandy", image: "https://picsum.photos/200/300", rating: 4.8 },
    // { name: "Place 2", image: "https://picsum.photos/200/300", rating: 4.8 },
    // { name: "Place 2", image: "https://picsum.photos/200/300", rating: 4.8 },
    // { name: "Place 2", image: "https://picsum.photos/200/300", rating: 4.8 },
    // { name: "Place 2", image: "https://picsum.photos/200/300", rating: 4.8 },
    // { name: "Place 2", image: "https://picsum.photos/200/300", rating: 4.8 },
    // { name: "Place 2", image: "https://picsum.photos/200/300", rating: 4.8 },
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
 
  const handlePress = (place) => {
    setSelectedPlace(place);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {places.map((place, index) => (
          <TouchableOpacity key={index} style={styles.carouselItem} onPress={() => handlePress(place)}>
            <ImageBackground
              source={place.image}
              resizeMode="cover"
              style={styles.image}
            >
              <Text style={styles.text}>{place.name}</Text>
              <View style={styles.textContainer}>
                <View style={styles.ratingContainer}>
                <Entypo name="star" size={20} color="#fadf05" />
                  <Text style={styles.ratingText}>{place.rating}</Text>
                </View>
                <View style={styles.likeContainer}>
                  <Ionicons name="heart-circle" size={24} color="red" />
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <PopularPlaceCard
        visible={modalVisible}
        place={selectedPlace}
        onClose={() => setModalVisible(false)}
      />
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
    fontSize: 16,
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
