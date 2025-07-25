import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';

const ButtonComp = ({ title, onPress, style, icon }: any) => {
  return (
    <TouchableOpacity style={[styles.button_container, style]} onPress={onPress}>
      <View style={styles.content}>
        {icon && <View style={styles.iconWrapper}>{icon}</View>}
        <Text style={styles.button_text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button_container: {
    backgroundColor: "#EB3E6F",
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10),
    borderRadius: moderateScale(4),
    alignItems: "center",
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginRight: moderateScale(8), // spacing between icon and text
  },
  button_text: {
    fontSize: moderateScale(14),
    color: "white",
  },
});

export default ButtonComp;
