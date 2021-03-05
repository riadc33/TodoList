import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import colors from 'TodoList/src/res/colors';
export default function Header() {
  
  return (
    <View style={styles.header}>
      <Text style={styles.title}>LISTA</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: "5%",
    
    alignContent:"center",
    alignItems: "center",
    backgroundColor: colors.header,
  },

  title: {
    color: colors.fondobtn,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
