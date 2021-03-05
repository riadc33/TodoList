import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import {Overlay, Button} from 'react-native-elements';

import colors from 'TodoList/src/res/colors';
import axios from 'axios';

export default function ButtonAdd({setTodos, todos, setReload,reload,accessToken}) {
  const [text, setText] = useState();
  const [visible, setVisible] = useState(false);
  
  const submitHandle = () => {
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` }
  };
  const bodyParameters = {
    text:text
  };
    axios.post('http://127.0.0.1:8000/todos/',
    bodyParameters,
    config,
    )
    .then(add =>{ 
      
      setReload(!reload)
      setTodos(add.data)
      console.log(add.data) 
       setVisible(false) 

    })
    .catch(function (error) {
      console.log(error);
    });
   
  };
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const changeHandler = (val) => {
    setText(val);
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
    alignItems:"center"
  },
  TextImp: {
    height:40,
    width:300,
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
