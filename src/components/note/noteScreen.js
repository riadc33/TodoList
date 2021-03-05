import React, {useState, useEffect} from 'react';
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
    const data = todos.map((todo) =>
      todo.key == key ? {...todo, state: !todo.state} : todo,
    );

    setTodos(data);
    storeData(data); */
  };
  /* const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);

      await AsyncStorage.setItem('@todos', jsonValue);
    } catch (e) {}
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
      
      <FlatList
        showsVerticalScrollIndicator={false}
        data={todos}
        renderItem={({item}) => (
          <NoteItem
            item={item}
            updatetodo={()=>updatetodo(item)}
            pressHandler={() => pressHandler(item)}
          />
        )}
        keyExtractor={(item) => item.key}></FlatList>
      <ButtonAdd setTodos={setTodos} todos={todos} setReload={setReload} reload={reload} accessToken={accessToken}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* justifyContent: "center" */

    

  
  },
  loading: {
    flex: 4,
    alignItems:"center",
    justifyContent:"center",
    
  }
});

