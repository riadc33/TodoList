import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import NoteItem from './noteItem';
import Header from './header';
import ButtonAdd from '../Add/ButtonAdd';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function noteScreen() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const pressHandler = (key) => {
    const data = todos.filter((todo) => todo.key != key);
    console.log(data);
    setTodos(data);
    storeData(data);
  };
  const updatetodo = (key) => {
    console.log('update');
    const data = todos.map((todo) =>
      todo.key == key ? {...todo, state: !todo.state} : todo,
    );

    setTodos(data);
    storeData(data);
  };
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);

      await AsyncStorage.setItem('@todos', jsonValue);
    } catch (e) {}
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@todos');

      if (value !== null) {
        setTodos(JSON.parse(value));
        console.log(JSON.parse(value));
      }
    } catch (e) {}
  };

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {}

    console.log('Done.');
  };

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={todos}
        renderItem={({item}) => (
          <NoteItem
            item={item}
            updatetodo={updatetodo}
            pressHandler={pressHandler}
          />
        )}
        keyExtractor={(item) => item.key}></FlatList>
      <ButtonAdd setTodos={setTodos} todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
