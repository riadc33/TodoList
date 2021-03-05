import React from 'react';
import {Text, View, FlatList, StyleSheet,Button} from 'react-native';
import ButtonAdd from '../TodoList/src/components/Add/ButtonAdd';
import colors from 'TodoList/src/res/colors';
import Login from "../TodoList/src/components/screens/loginscreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import noteScreen from '../TodoList/src/components/note/noteScreen';
import SignUp from '../TodoList/src/components/screens/signUpScreen';
const Stack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
      >
        <Stack.Screen 
        name="login" 
        component={Login}
        options={{
          title: 'LOGIN',
          headerStyle: {
            backgroundColor: colors.header,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: colors.fondobtn,
            fontSize: 20,
            fontWeight: 'bold',
          },
          
        }}
        />
        <Stack.Screen name="todo"
        options={{
          title: 'LIST',
          headerStyle: {
            backgroundColor: colors.header,
          },
          headerLeft:null,
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: colors.fondobtn,
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
        
        component={noteScreen}
        
        />
        <Stack.Screen name="register" component={SignUp}
        options={{
          title: 'REGISTER',
          headerStyle: {
            backgroundColor: colors.header,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: colors.fondobtn,
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fondo,
  },
  header:{
    backgroundColor: colors.header,
  }
});
export default App;
