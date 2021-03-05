// SignUp.js
import React from 'react'
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native'

import colors from 'TodoList/src/res/colors';
import axios from 'axios';

export default function SignUp({navigation}){
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [password_confirmation, setPassword_confirmation] = React.useState("");
    const submitHandle = () => {
        const bodyParameters = {
          username:username,
          email:email,
          password:password,
          password_confirmation:password_confirmation,

        }; 
        axios.post('http://127.0.0.1:8000/register/',
        bodyParameters,
        )
          .then(res=> {
              console.log(res.data)
            navigation.navigate('login')
          })
          .catch(function (error) {
    
            console.log(error);
            
          });
          
        }
  
    return (
      <View style={styles.container}>
           <Text style={styles.logo}>Todo List</Text>
        <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder='USERNAME'
          autoCapitalize="none"
          placeholderTextColor={colors.header}
          onChangeText={txt => {setUsername(txt)}}
          value={username}
        />
        
        
        
        </View>
        <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder='EMAIL'
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor={colors.header}
          onChangeText={txt => {setEmail(txt)}}
          value={email }
        />
        </View >
        <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder='PASSWORD'
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor={colors.header}
          onChangeText={txt => {setPassword(txt)}}
          value={password}
        />
        </View>
        <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder='CONFIRM PASSWORD'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor={colors.header}
          onChangeText={txt => {setPassword_confirmation(txt)}}
          value={password_confirmation}
        />
        </View>
        
        
       
        <TouchableOpacity style={styles.loginBtn}
        onPress={submitHandle}
        >
            <Text style={styles.signText}
            >SIGN UP</Text>
        </TouchableOpacity>
      </View>
    )
  }


const styles = StyleSheet.create({
  input: {
    width:"80%",
        backgroundColor:"#E1E2E7",
        borderRadius:25,
        height:50,
        marginBottom:15,
        justifyContent:"center",
        padding:20,
        fontWeight:"bold",
        fontSize:18
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#fff"
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:colors.header,
    marginBottom:130,
    
  },
  loginBtn:{
    width:"40%",
    backgroundColor:colors.header,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:25,
    
  },
  signText:{
    color:"#fff",
    fontWeight:"bold",
},
inputView:{
    width:"80%",
    backgroundColor:"#E1E2E7",
    borderRadius:25,
    height:50,
    marginBottom:15,
    justifyContent:"center",
    padding:20
  },
  inputText:{
        height:50,
        color:colors.header,
        fontWeight:"bold",
        fontSize:17
      },

  
})