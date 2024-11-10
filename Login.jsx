import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; 

import Foodie from './image/foodie.png'; 
import axios from 'axios';
import { BASE_URL } from './config/constraints';

const Login = () => {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('Signup
      ');
  };

  const handleSignupNavigate = async(e) => {
    if ( email && password) {

      try {
e.perventDefault();
const userObj = {
  email,
  password,
};

const response = await axios.post(`${BASE_URL}/api/signup`, userObj);

console.log(response);
navigation.navigate('Signup');
        

      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Please fill all the fields.');
    }
  }

  return (
    <LinearGradient
      colors={['#9b4dff', '#6a1dff', '#4a148c']} 
      style={styles.container}
    >
      <Image
        source={Foodie}
        style={styles.image}
      />

      <Text>
        Deliver Favourit Food 
      </Text>

      <TextInput
        style={styles.input}
        placeholder="EMAIL"
        placeholderTextColor="#FFF"
        onChangeText={(e) => setEmail(e)}
      />

      <TextInput
        style={styles.input}
        placeholder="PASSWORD"
        placeholderTextColor="#FFF"
        onChangeText={(e) => setPassword(e)}
        secureTextEntry
      />

      <TouchableOpacity onPress={handleSignupNavigate}>
        <Text style={styles.signupText}>I AM ALREADY LOGGED IN...</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNavigate}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 20,
  },
  image: {
    width: 200, 
    height: 100, 
    resizeMode: 'contain', 
    marginBottom: 30, 
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#FFF',
  },
  signupText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: '#00FF00', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#32CD32', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});

export default Login;
