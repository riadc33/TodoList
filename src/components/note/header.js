import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import colors from 'TodoList/src/res/colors';
export default function Header() {
<<<<<<< HEAD
=======
  
>>>>>>> 6b0a7525e94646ba9a4f3976ad608c6bd2db307a
  return (
    <View style={styles.header}>
      <Text style={styles.title}>LISTA</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
<<<<<<< HEAD
    height: 50,
    paddingTop: 12,
    alignItems: 'center',
=======
    height: "5%",
    
    alignContent:"center",
    alignItems: "center",
>>>>>>> 6b0a7525e94646ba9a4f3976ad608c6bd2db307a
    backgroundColor: colors.header,
  },

  title: {
    color: colors.fondobtn,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
