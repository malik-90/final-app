import { useNavigation } from '@react-navigation/native';

import { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient
import axios from 'react-native-axios'

import Foodie from './image/foodie.png'; 
import { BASE_URL } from './config/constraints';

const App = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNavigate = async(e) => {
    if (name && email && password) {

      try {
e.perventDefault();
const userObj = {
  firstName,
  email,
  password,
};

const response = await axios.post(`${BASE_URL}/api/signup`, userObj);

console.log(response);
navigation.navigate('Login');
        

      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Please fill all the fields.');
    }
  };

  return (
    <LinearGradient
      colors={['#9b4dff', '#6a1dff', '#4a148c']} // Linear gradient with purple shades
      style={styles.container}
    >
      <Image
        source={Foodie} // Replace with your image URL or local file path
        style={styles.image}
      />

<Text>
        Deliver Favourit Food 
      </Text>

      <TextInput
        style={styles.input}
        placeholder="USER NAME..."
        placeholderTextColor="#FFF"
        onChangeText={(e) => setName(e)}
      />

      <TextInput
        style={styles.input}
        placeholder="EMAIL..."
        placeholderTextColor="#FFF"
        onChangeText={(e) => setEmail(e)}
      />

      <TextInput
        style={styles.input}
        placeholder="PASSWORD ..."
        placeholderTextColor="#FFF"
        secureTextEntry
        onChangeText={(e) => setPassword(e)}
      />

      <TouchableOpacity onPress={handleNavigate}>
        <Text style={styles.signupText}>SIGNUP..</Text>
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
    marginBottom: 50, 
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
    color: '#00FF00', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#32CD32', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});

export default App;
