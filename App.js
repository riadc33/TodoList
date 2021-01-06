import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import NoteScreen from '../TodoList/src/components/note/noteScreen';
import ButtonAdd from '../TodoList/src/components/Add/ButtonAdd';
import colors from 'TodoList/src/res/colors';
const App = () => {
  return (
    <View style={styles.container}>
      <NoteScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fondo,
  },
});
export default App;
