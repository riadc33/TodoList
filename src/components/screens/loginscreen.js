import React,{useState,useContexts} from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Animated} from 'react-native';
import colors from 'TodoList/src/res/colors';
import axios from 'axios';


/* export const TokenContext = createContext(); */


export default function login({navigation}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] =useState ("");
    const [accessToken,setAccessToken] =useState(); 
    const [refreshToken,setRefreshToken]=useState();

    const submitHandle = () => {
    const bodyParameters = {
      username:username,
      password:password
    };
    
    axios.post('http://127.0.0.1:8000/login/',
    bodyParameters,
    )
      .then(res=> {
        navigation.navigate('todo',{accessToken: res.data.access})
         /* navigation.navigate("",{refreshToken:res.data.refresh})  */
        console.log(accessToken)
        /* console.log(refreshToken) */
      })
      .catch(function (error) {
        alert('confirma si la contraseña o el usuario son correctos')
        console.log(error);
        
      });
      
    }
    const register=()=>{
      navigation.navigate('register',)
    }

  
    return (
      <View style={styles.container}>

        <Text style={styles.logo}>Todo List</Text>

            <View style={styles.inputView} >
                <TextInput  
                 autoCapitalize={"none"} 
                style={styles.inputText}
                placeholder="USERNAME" 
                placeholderTextColor={colors.header}
                onChangeText={txt => {setUsername(txt)}}
                value={username}
                 />
            </View>
        
        
        <View style={styles.inputView}>
        <TextInput 
        secureTextEntry={true} 
            style={styles.inputText}
            placeholder="PASSWORD" 
            placeholderTextColor={colors.header}
            onChangeText={txt => {setPassword(txt)}}
            value={password}
        /> 
        </View>
        <TouchableOpacity style={styles.loginBtn}
        onPress={submitHandle}        
        >
          <Text style={styles.loginText}>LOGIN</Text>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.signBtn}
        onPress={register}
        >
          <Text style={styles.signText}>SIGN UP</Text>
          
        </TouchableOpacity>
      </View>
      
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo:{
        fontWeight:"bold",
        fontSize:50,
        color:colors.header,
        marginBottom:235,
        
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
      forgot:{
        color:colors.header,
        fontSize:13,
        fontWeight:"normal",
      },
      loginBtn:{
        width:"40%",
        backgroundColor:colors.header,
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        
      },
      loginText:{
          color:"#fff",
          fontWeight:"bold",
      },
      signText:{
        color:colors.header,
        fontWeight:"bold",
    },
      signBtn:{
        width:"20%",
        backgroundColor:"#fff",
        borderRadius:25,
        height:20,
        alignItems:"center",
        justifyContent:"center",
        marginTop:25
      },
    

    
});
