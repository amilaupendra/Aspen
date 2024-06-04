import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { AntDesign } from "@expo/vector-icons";
import PopularCarousel from "../components/PopularCarousel";
import RecommendedCarousel from "../components/RecommendedCarousel";
import BottomNav from "../components/BottomNav";
import { EvilIcons } from "@expo/vector-icons";

//Explore Screen Component
export default function ExploreHeader() {
  const [location, setLocation] = useState("Aspen, USA");
  const locationList = ["Aspen, USA", "France", "SriLanka", "Germany"];
  const [selectedTab, setSelectedTab] = useState("location");

  // Function to handle tab selection
  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.locationContainer}>
          <View style={styles.exploreAspen}>
            <Text style={styles.exploreText}>Explore</Text>
            <Text style={styles.aspenText}>Aspen</Text>
          </View>
          <View style={styles.locationView}>
            <AntDesign name="enviromento" size={16} color="#1dafe2" />
            {location != null ? (
              <>
                <Text style={styles.locationText}>{location}</Text>
              </>
            ) : null}

            <Picker
              selectedValue={location}
              style={{
                width: 50,
                fontSize: "10",
                color: "blue",
                marginRight: 2,
              }}
              onValueChange={(itemValue) => setLocation(itemValue)}
            >
              {locationList.map((loc) => (
                <Picker.Item key={loc} label={loc} value={loc} />
              ))}
            </Picker>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <EvilIcons
            name="search"
            size={24}
            color="black"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Find things to do"
            placeholderTextColor="#a1a1a1"
          />
        </View>
        <View style={styles.tabs}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={
                selectedTab === "location" ? styles.tabSelected : styles.tab
              }
              onPress={() => handleTabPress("location")}
            >
              <Text
                style={
                  selectedTab === "location"
                    ? styles.tabTextSelected
                    : styles.tabText
                }
              >
                Location
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={selectedTab === "hotels" ? styles.tabSelected : styles.tab}
              onPress={() => handleTabPress("hotels")}
            >
              <Text
                style={
                  selectedTab === "hotels"
                    ? styles.tabTextSelected
                    : styles.tabText
                }
              >
                Hotels
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={selectedTab === "food" ? styles.tabSelected : styles.tab}
              onPress={() => handleTabPress("food")}
            >
              <Text
                style={
                  selectedTab === "food"
                    ? styles.tabTextSelected
                    : styles.tabText
                }
              >
                Food
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedTab === "adventure" ? styles.tabSelected : styles.tab
              }
              onPress={() => handleTabPress("adventure")}
            >
              <Text
                style={
                  selectedTab === "adventure"
                    ? styles.tabTextSelected
                    : styles.tabText
                }
              >
                Adventure
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedTab === "activities" ? styles.tabSelected : styles.tab
              }
              onPress={() => handleTabPress("activities")}
            >
              <Text
                style={
                  selectedTab === "activities"
                    ? styles.tabTextSelected
                    : styles.tabText
                }
              >
                Activities
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {selectedTab == "location" ? (
          <>
            <View style={styles.popularView}>
              <Text style={styles.Populartext}>Popular</Text>
              <Text style={styles.seeAllText}>See all</Text>
            </View>
            {/* Popular Carousel */}
            <PopularCarousel />
            <View style={styles.popularView}>
              <Text style={styles.Populartext}>Recommended</Text>
            </View>
            {/* Recommended Carousel */}
            <RecommendedCarousel />
          </>
        ) : null}
      </ScrollView>
      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 10,
    backgroundColor: "white",
    flex: 1,
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  exploreAspen: {
    top: 20,
  },
  exploreText: {
    fontSize: 18,
  },
  aspenText: {
    fontSize: 38,
    fontWeight: "bold",
  },
  locationView: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    marginLeft: 5,
    marginRight: 5,
    color: "#1dafe2",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderColor: "#e1e1e1",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: "#f7fbff",
    marginTop: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: "100%",
    fontSize: 16,
  },
  popularView: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "baseline",
  },
  Populartext: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
  seeAllText: {
    fontSize: 14,
    color: "#1dafe2",
    fontWeight: "bold",
  },
  tabs: {
    flexDirection: "row",
    overflow: "scroll",
  },
  tab: {
    fontSize: 15,
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingRight: 2,
    borderRadius: 50,
  },

  tabSelected: {
    marginRight: 2,
    backgroundColor: "#EEFBFD",
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  tabText: {
    color: "#a1a1a1",
    fontSize: 15,
  },
  tabTextSelected: {
    color: "#1dafe2",
    fontSize: 15,
    fontWeight: "bold",
  },
});
