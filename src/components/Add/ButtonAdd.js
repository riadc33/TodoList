import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import {Overlay, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from 'TodoList/src/res/colors';

export default function ButtonAdd({setTodos, todos}) {
  const [text, setText] = useState();
  const [visible, setVisible] = useState(false);

  const submitHandle = () => {
    const data = [
      ...todos,
      {
        text: text,
        state: false,
        key: Math.random().toString(),
      },
    ];
    setTodos(data);

    storeData(data);

    setVisible(!visible);
  };
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const changeHandler = (val) => {
    setText(val);
  };
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@todos', jsonValue);
    } catch (e) {}
  };

  return (
    <View>
      <TouchableOpacity
        onPress={toggleOverlay}
        style={styles.touchableOpacityStyle}>
        <Image
          style={styles.ImageStyles}
          source={require('TodoList/src/assets/plus.png')}
        />
      </TouchableOpacity>

      <Overlay
        overlayStyle={styles.overlay}
        isVisible={visible}
        onBackdropPress={toggleOverlay}>
        <>
          <TextInput
            placeholder="ejemplo: comprar tomates"
            onChangeText={changeHandler}
            style={styles.TextImp}
          />
          <Button
            onPress={() => submitHandle(text)}
            buttonStyle={styles.buttonstyles}
            title="agregar tu nota"
            type="solid"></Button>
        </>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    width: 68,
    height: 68,
    borderRadius: 40,
    backgroundColor: colors.header,
    position: 'absolute',
    bottom: 15,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyles: {
    height: 30,
    resizeMode: 'contain',
  },
  overlay: {
    height: 120,
    width: 350,
    alignItems: 'stretch',
    borderRadius: 25,
    backgroundColor: colors.fondobtn,
  },
  TextImp: {
    borderRadius: 40,
    paddingStart: 12,
    paddingEnd: 12,
    backgroundColor: colors.fondo,
  },
  buttonstyles: {
    borderRadius: 12,
    backgroundColor: colors.header,
    margin: 8,
  },
});
