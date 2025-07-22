import { View, StyleSheet } from 'react-native';
import React from 'react'

const Cards = ({ children, style }: { children: React.ReactNode; style?: object }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};



const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    margin: 6,
    elevation: 2,
  },
});
export default Cards