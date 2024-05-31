import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PopularCarousel from '../components/PopularCarousel';
import RecommendedCarousel from '../components/RecommendedCarousel';

export default function ExploreHeader() {
    const [selectedTab, setSelectedTab]= useState('location');

    const handleTabPress = (tabName) =>{
        setSelectedTab(tabName)
    }
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <View style={styles.exploreAspen}>
        <Text style={styles.exploreText}>Explore</Text>
        <Text style={styles.aspenText}>Aspen</Text>
        </View>
        <View style={styles.locationView}>
          <AntDesign name="enviromento" size={16} color="blue" />
          <Text style={styles.locationText}>Aspen, USA</Text>
          <AntDesign name="down" size={12} color="blue" />
        </View>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Find things to do"
        placeholderTextColor="#a1a1a1"
      />
      <View style={styles.tabs}>
                <TouchableOpacity style={selectedTab === 'location' ? styles.tabSelected : styles.tab} onPress={() => handleTabPress('location')}>
                    <Text style={selectedTab === 'location' ? styles.tabTextSelected : styles.tabText}>Location</Text>
                </TouchableOpacity>
                <TouchableOpacity style={selectedTab === 'hotels' ? styles.tabSelected : styles.tab} onPress={() => handleTabPress('hotels')}>
                    <Text style={selectedTab === 'hotels' ? styles.tabTextSelected : styles.tabText}>Hotels</Text>
                </TouchableOpacity>
                <TouchableOpacity style={selectedTab === 'food' ? styles.tabSelected : styles.tab} onPress={() => handleTabPress('food')}>
                    <Text style={selectedTab === 'food' ? styles.tabTextSelected : styles.tabText}>Food</Text>
                </TouchableOpacity>
                <TouchableOpacity style={selectedTab === 'adventure' ? styles.tabSelected : styles.tab} onPress={() => handleTabPress('adventure')}>
                    <Text style={selectedTab === 'adventure' ? styles.tabTextSelected : styles.tabText}>Adventure</Text>
                </TouchableOpacity>
                <TouchableOpacity style={selectedTab === 'activities' ? styles.tabSelected : styles.tab} onPress={() => handleTabPress('activities')}>
                    <Text style={selectedTab === 'activities' ? styles.tabTextSelected : styles.tabText}>Activities</Text>
                </TouchableOpacity>
            </View>

            {selectedTab == 'location' ?(
                <>
                <View style={styles.popularView}>
                <Text style={styles.Populartext}>Popular</Text>
                <Text style={styles.seeAllText}>See all</Text>
                </View>
                <PopularCarousel/>
                <View style={styles.popularView}>
                <Text style={styles.Populartext}>Recommended</Text>
                </View>
                <RecommendedCarousel/>
                </>
            ):console.log('gg')}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  exploreAspen:{
    top:20,
  },
  exploreText: {
    fontSize: 16,
  },
  aspenText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 5,
    marginRight: 5,
    color: '#1dafe2',
  },
  searchInput: {
    height: 40,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    marginTop:20,
  },
  popularView:{
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'baseline'
  },
  Populartext:{
    fontSize: 20,
    fontWeight:'bold',
    marginTop:20,
    marginLeft:20,

  },
  seeAllText:{
    fontSize:12,
    color:'#1dafe2',
    fontWeight:'bold',
  },
  tabs: {
    flexDirection: 'row',
  },
  tab: {
    fontSize:15,
    paddingHorizontal:30,
    padding:10,
    borderRadius:50,
   

  },


  tabSelected: {
    marginRight: 10,
    backgroundColor:'#EEFBFD',
    borderRadius:50,
    paddingHorizontal:30,
    paddingVertical:10




  },
  tabText: {
    color: '#a1a1a1',
    fontSize:15,
  },
  tabTextSelected: {
    color: '#1dafe2',
    fontSize:15,
    fontWeight: 'bold',

  },
});
