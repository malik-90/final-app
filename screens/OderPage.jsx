import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const OrderPage = () => {
  const route = useRoute();

 
  const { item, quantity, totalPrice } = route.params;

  return (
    
    <LinearGradient colors={['#2c1857', '#007bff']} style={styles.container}>
      <View style={styles.content}>
        
        <Image
          source={{ uri: 'https://media.q4launch.website/uploads/sites/58/2023/03/restaurants-near-camden-mejpg.jpeg' }}
          style={styles.image} 
        />
        
        <Text style={styles.title}>Order Summary</Text>
        <Text style={styles.text}>Item: {item.title}</Text>
        <Text style={styles.text}>Quantity: {quantity}</Text>
        <Text style={styles.text}>Total Price: ${totalPrice.toFixed(2)}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
  },
  text: {
    fontSize: 18,
    marginVertical: 8,
    color: '#fff', 
  },
  image: {
    width: '100%', 
    height: 200,  
    borderRadius: 10,  
    marginBottom: 20,  
  },
});

export default OrderPage;
