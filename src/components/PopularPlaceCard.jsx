// DetailsModal.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Facilities from "./Facilities";


export default function DetailsModal({ visible, place, onClose }) {
  if (!place) return null;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
        
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            {/* <Text style={styles.closeButtonText}>{'<'}</Text> */}
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.heartContainer}>
            <Ionicons name="heart" size={24} color="red" />
          </View>
          <Image source={place.image} style={styles.image} />
          <View style={styles.nameContaienr}>
          <Text style={styles.name}>{place.name}</Text>
          <TouchableOpacity><Text style={{fontWeight:'bold', color:'#1dafe2'}}>Show map</Text></TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Entypo name="star" size={20} color="#fadf05" />
            <Text style={styles.rating}>{place.rating} (Reviews):</Text>
          </View>
          <View
            style={
              isExpanded ? styles.expandedTextView : styles.collapsedTextView
            }
          >
            <Text style={styles.placeIntro}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              doloremque, facilis mollitia iusto animi, excepturi possimus
              dolorum quidem optio adipisci eum nihil similique. Ex illum
              pariatur repudiandae, facere architecto aliquid! Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Dignissimos, saepe
              doloremque blanditiis explicabo dolor eligendi, modi adipisci
              odit, tenetur numquam amet molestiae velit necessitatibus labore
              ipsum praesentium optio esse rerum? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Inventore reiciendis aliquam ea ad
              dignissimos blanditiis, eius impedit minus hic et odio aspernatur,
              assumenda excepturi. Consequatur soluta asperiores beatae sequi
              minima.
            </Text>
          </View>
          <TouchableOpacity
            onPress={toggleExpand}
            style={styles.readMorecontainer}
          >
            <Text style={styles.readMoreText}>
              {isExpanded ? "See Less" : "See More"}
              <AntDesign
                name={isExpanded ? "up" : "down"}
                size={16}
                color="#1dafe2"
              />
            </Text>
          </TouchableOpacity>
          <Text style={{fontWeight:'bold', marginTop:20, alignSelf:'flex-start', fontSize:24}}>Facilitiues</Text>
          <Facilities />
          <View style={styles.bookContainer}>
            <View style={styles.priceContainer}>
                <Text style={{fontWeight:'bold'}}>Price</Text>
                <Text style={{fontWeight:'bold', fontSize:30,color:'#30cf86'}}>$199</Text>
            </View>
            <TouchableOpacity  style={styles.bookButton} onPress={()=>Alert.alert('Under Developing Stage')}>
            <Text style={{fontWeight:'bold', fontSize:20,color:'#fff'}}>Book Now</Text>
            <AntDesign name="arrowright" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    // borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: "40%",
    marginBottom: 20,
    borderRadius: 20,
  },
  nameContaienr:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    // marginBottom: 10,
    alignSelf: "flex-start",
  },
  rating: {
    fontSize: 14,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  closeButton: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    position: "absolute",
    alignSelf: "flex-start",
    zIndex: 20,
    top: 30,
    left: 30,
  },
  closeButtonText: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  heartContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 310,
    right: 35,
    elevation: 3, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 0.2, // For iOS shadow
    shadowRadius: 2, // For iOS shadow
    zIndex: 20,
  },
  ratingContainer: {
    flexDirection: "row",
    // alignItems: "center",
    // marginTop: 5,
    // backgroundColor: "#868B8E",
    // borderRadius: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 5,
  },
  placeIntro: {
    fontSize: 16,
    color: "green",
    textAlign: "left",
  },
  collapsedTextView: {
    height: 80, // Fixed height for collapsed view
    overflow: "hidden",
    textAlign: "justify",
  },
  expandedTextView: {
    // No height restriction for expanded view
  },
  readMoreText: {
    color: "#1dafe2",
    marginTop: 5,
    alignSelf: "flex-start",
    fontWeight: "bold",
    // backgroundColor:'red'
  },
  readMorecontainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  bookButton:{
    flexDirection:'row',
    backgroundColor:'#1dafe2',
    width:'60%',
    height:60,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
  },
  bookContainer:{
    marginTop:40,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between'
  }
});
  
