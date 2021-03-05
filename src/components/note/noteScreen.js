import React, {useState, useEffect} from 'react';
<<<<<<< HEAD
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
=======
import {View, FlatList, StyleSheet,ActivityIndicator} from 'react-native';
import NoteItem from './noteItem';
import Header from './header';
import ButtonAdd from '../Add/ButtonAdd';
import axios from "axios";
import colors from 'TodoList/src/res/colors';

export default function noteScreen({navigation,route}) {
  const [todos, setTodos] = useState([]);
  const[reload,setReload]= useState(false)
  const [loading,setLoading]=useState(true)
  const {accessToken}=route.params;

  useEffect(() => {
   
      
      getData();
    

  }, [reload, accessToken]); 

  const pressHandler = (item) => {
    console.log(item);
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` }
  };
    
    axios.delete(`http://127.0.0.1:8000/todos/${item.id}`,
    config
    )
    
    .then(res => {
      console.log(res.data)
     // console.log(res);
      console.log(res.data)
      setReload(false); 
    })
    .catch(err=>{
      alert('This is a button!')
       console.log(JSON.stringify(err)) 
    })
    /* console.log(data);
    setTodos(data);
    storeData(data); */
  };
  const updatetodo = (item) => {
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` }
  };
    
    axios.put(`http://127.0.0.1:8000/todos/${item.id}`,{ state:!item.state},config)
    
    .then(res => {
      console.log(item.state)
     // console.log(res);
      console.log(res.data)
      setReload(false);
      
      
    })



    /* console.log('update');
>>>>>>> 6b0a7525e94646ba9a4f3976ad608c6bd2db307a
    const data = todos.map((todo) =>
      todo.key == key ? {...todo, state: !todo.state} : todo,
    );

    setTodos(data);
<<<<<<< HEAD
    storeData(data);
  };
  const storeData = async (value) => {
=======
    storeData(data); */
  };
  /* const storeData = async (value) => {
>>>>>>> 6b0a7525e94646ba9a4f3976ad608c6bd2db307a
    try {
      const jsonValue = JSON.stringify(value);

      await AsyncStorage.setItem('@todos', jsonValue);
    } catch (e) {}
<<<<<<< HEAD
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

=======
  }; */

  const getData = async () => {
    
    axios.get("http://127.0.0.1:8000/todos/", {
      headers:{
      'Authorization': `Bearer ${accessToken}`
    }
  })
    
    .then(res=>{
      console.log(accessToken)
      setTodos(res.data)
      console.log(res.data)
      setLoading(false)
      setReload(true);
     })
    .catch(err=>{
      console.log(err+" mal")
      /* console.log(JSON.stringify(err)) */
    })
    
    
  };

  
  return (
    <View style={styles.container}>
      
      
      { loading &&
        <View style={styles.loading}>

        <ActivityIndicator size="large" color= {colors.header} />
      </View>
      }
      
>>>>>>> 6b0a7525e94646ba9a4f3976ad608c6bd2db307a
      <FlatList
        showsVerticalScrollIndicator={false}
        data={todos}
        renderItem={({item}) => (
          <NoteItem
            item={item}
<<<<<<< HEAD
            updatetodo={updatetodo}
            pressHandler={pressHandler}
          />
        )}
        keyExtractor={(item) => item.key}></FlatList>
      <ButtonAdd setTodos={setTodos} todos={todos} />
    </View>
=======
            updatetodo={()=>updatetodo(item)}
            pressHandler={() => pressHandler(item)}
          />
        )}
        keyExtractor={(item) => item.key}></FlatList>
      <ButtonAdd setTodos={setTodos} todos={todos} setReload={setReload} reload={reload} accessToken={accessToken}/>
    </View>
    
>>>>>>> 6b0a7525e94646ba9a4f3976ad608c6bd2db307a
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
  },
});
=======
    /* justifyContent: "center" */

    

  
  },
  loading: {
    flex: 4,
    alignItems:"center",
    justifyContent:"center",
    
  }
});

>>>>>>> 6b0a7525e94646ba9a4f3976ad608c6bd2db307a
