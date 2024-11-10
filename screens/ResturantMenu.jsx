import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ResturantMenu = () => {
  const navigation = useNavigation();

  // Array of menu items with external URLs directly in the image source
  const menuItems = [
    {
      id: 1,
      title: 'Udon Miso',
      description: 'Thick handmade udon noodles in a rich miso broth topped with green onions and mushrooms.',
      price: 16.00,
      image: { uri: 'https://www.cookerru.com/wp-content/uploads/2021/04/yaki-udon-feature-4-feature-1170x1755.jpg.webp' }
    },
    {
      id: 2,
      title: 'Tempura',
      description: 'Crispy battered shrimp and vegetables served with a savory dipping sauce.',
      price: 12.00,
      image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjGCBPV3Lrk7XBPlkquvRg9bYVclzQvAz67g&s' },
    },
    {
      id: 3,
      title: 'Macaroni',
      description: 'Creamy macaroni pasta with cheese and herbs.',
      price: 10.00,
      image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXmBlA48j_2dgMAXnmlhGLrl-b3EwimmIfA&s' },
    },
  ];

  const handleAddToCart = (item) => {
    navigation.navigate('MenuQT', { item });
  };

  return (
    <View style={styles.container}>
      {/* Header Image */}
      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3mZtMe7ijxZkP4JsR72Rg6qr6UMz51sD8A&s' }} style={styles.headerImage} />

      {/* Restaurant Info */}
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>Malik Shoaib</Text>
        <Text style={styles.restaurantAddress}>2972 Westheimer Rd. Santa Ana</Text>
      </View>

      {/* Menu Items */}
      <ScrollView style={styles.menuContainer}>
        {menuItems.map((item) => (
          <View key={item.id} style={styles.menuItem}>
            <Image source={item.image} style={styles.menuImage} />
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuDescription}>{item.description}</Text>
              <Text style={styles.menuPrice}>${item.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity
              style={styles.plusIcon}
              onPress={() => handleAddToCart(item)}
            >
              <Ionicons name="add-circle" size={36} color="#4e4ec8" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c3a',
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  restaurantInfo: {
    padding: 16,
    alignItems: 'center',
  },
  restaurantName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  restaurantAddress: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 4,
  },
  menuContainer: {
    paddingHorizontal: 16,
  },
  menuItem: {
    backgroundColor: '#2c2c52',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    position: 'relative',
  },
  menuImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  menuTextContainer: {
    padding: 16,
  },
  menuTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  menuDescription: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 10,
  },
  menuPrice: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  plusIcon: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});

export default ResturantMenu;
