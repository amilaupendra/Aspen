import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React from 'react';
import PopularCarousel from '../components/PopularCarousel';

const Explore = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate("Destination")} >
        <Text>expolreeeeeeeeeeeee</Text>
        </TouchableOpacity>

        <PopularCarousel/>
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'red',
        marginTop: 30,
      },
})