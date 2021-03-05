import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import colors from 'TodoList/src/res/colors';

export default function noteItem({item, pressHandler, updatetodo}) {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <View style={styles.list}>
=======
      <View style={[item.state ? styles.listCheck : styles.list]}>
>>>>>>> 6b0a7525e94646ba9a4f3976ad608c6bd2db307a
        <CheckBox
          value={item.state}
          onValueChange={() => updatetodo(item.key)}
          style={styles.checkbox}
        />

<<<<<<< HEAD
        <Text style={[item.state ? styles.testcheck : styles.test]}>
=======
        <Text style={/* styles.testcheck */  styles.test}>
>>>>>>> 6b0a7525e94646ba9a4f3976ad608c6bd2db307a
          {item.text}
        </Text>

        <TouchableWithoutFeedback
          onPress={() => pressHandler(item.key)}
          style={styles.delete}>
          <Image
            style={styles.imgDelete}
            source={require('TodoList/src/assets/delete.png')}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 3,
    backgroundColor: colors.fondobtn,
    padding: 18,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
  },
  check: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'blue',
    width: 35,
    height: 35,
    borderRadius: 12,
  },
  test: {
    flex: 1,
    margin: 10,
    fontSize: 18,
    alignItems: 'center',
  },
  testcheck: {
    textDecorationLine: 'line-through',
    flex: 1,
    margin: 10,
    fontSize: 18,
    alignItems: 'center',
  },
  delete: {
    flex: 1,
    width: 35,
    height: 35,
    borderRadius: 12,
  },
  imgDelete: {
    width: 30,
    height: 30,
  },
<<<<<<< HEAD
=======
  listCheck: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 3,
    backgroundColor: "#2ECC71",
    padding: 18,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
  },
>>>>>>> 6b0a7525e94646ba9a4f3976ad608c6bd2db307a
});
