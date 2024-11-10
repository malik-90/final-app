import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const MenuQT = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;

  const [quantity, setQuantity] = useState(1); 

  const handleAddQuantity = () => {
    setQuantity(quantity + 1); 
  };

  const handleRemoveQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleOrder = () => {
    const totalPrice = item.price * quantity;
    navigation.navigate('OrderPage', { item, quantity, totalPrice }); 
  };

  return (
    <LinearGradient colors={['#2c1857', '#007bff']} style={styles.container}>
      <View style={styles.content}>
        
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>Price: ${item.price}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={handleRemoveQuantity} style={styles.button}>
            <Text style={{ fontSize: 50 }}>-</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{quantity}</Text>
          <TouchableOpacity onPress={handleAddQuantity} style={styles.button}>
            <Text style={{ fontSize: 40 }}>+</Text>
          </TouchableOpacity>
        </View>

        <Button title="Order" onPress={handleOrder} />
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
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 50,
    color: '#fff',
    marginVertical: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    marginHorizontal: 10,
  },
});

export default MenuQT;
