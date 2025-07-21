import {  Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';

const ButtonComp = ({title,onPress,style}:any) => {
  return (
    <TouchableOpacity style={[styles.button_conatiner,style]} onPress={onPress}>
      <Text style={styles.button_text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    button_conatiner:{
          backgroundColor:"#EB3E6F",
          width:"100%",
          paddingVertical:verticalScale(10),
          paddingHorizontal:scale(10),
          borderRadius:moderateScale(4),
          alignItems:"center"
    },
    button_text:{
        fontSize:moderateScale(14),
        color:"white",
    }
})
export default ButtonComp