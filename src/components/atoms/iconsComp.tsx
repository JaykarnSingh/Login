import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const IconsComp = () => {
  return (
    <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconBox}>
          <AntDesign name="google" size={24} color="#DB4437" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBox}>
          <FontAwesome name="facebook" size={24} color="#4267B2" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBox}>
          <FontAwesome name="apple" size={24} color="#000000" />
        </TouchableOpacity>
      </View>
  )
}
const styles = StyleSheet.create({
  
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 20,
  },
  iconBox: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 30,
    elevation: 4, // for Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default IconsComp