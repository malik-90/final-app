import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const images = {
  Burgers: require('./image/healthy-simple-mexican-tacos-meat-260nw-2466683611.webp'),
  Dessert: require('./image/images.jpg'),
  Mexican: require('./image/Maki-zushi.webp'),
  Sushi: require('./image/photo-1551024601-bec78aea704b.jpg')
};

const bannerData = [
  {
    id: 1,
    imageUrl: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzL8Raj238e9hcvEip9o43pXASbzmAIMD52g&s' },
    discount: '30% OFF',
    description: 'Discover discounts in your favorite local restaurants',
  },
  {
    id: 2,
    imageUrl: { uri: 'https://www.eatingwell.com/thmb/Qcd3ZdtD608IfSDyax6AFvZrj-0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Eat-the-Rainbow-Chopped-Salad-with-Basil-Mozzarella-4f304ec0564944f98016b36765124667.jpg' },
    discount: '25% OFF',
    description: 'Get the best deals on sushi near you',
  },
  {
    id: 3,
    imageUrl: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5IP6H2bIMnoTPMMeN8gf0zh8rr7zC6N6LAQ&s' },
    discount: '50% OFF',
    description: 'Special discounts on desserts this weekend',
  },
  {
    id: 4,
    imageUrl: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5IP6H2bIMnoTPMMeN8gf0zh8rr7zC6N6LAQ&s' },
    discount: '10% OFF',
    description: 'Save big on burgers this Friday!',
  },
];

const Profile = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: '#1a0c3d' }}>
        {/* Header */}
        <View style={{ paddingTop: 40, paddingHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={{ color: 'white', fontSize: 16 }}>Delivery</Text>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Maplewood Suites</Text>
          </View>
          <MaterialIcons name="delivery-dining" size={30} color="white" />
        </View>

        {/* Search Bar */}
        <View style={{ marginVertical: 15, paddingHorizontal: 15 }}>
          <View style={{ backgroundColor: '#2c1857', flexDirection: 'row', borderRadius: 10, alignItems: 'center', padding: 10 }}>
            <SearchIcon name="search" size={20} color="white" />
            <TextInput
              style={{ color: 'white', marginLeft: 10, flex: 1 }}
              placeholder="Your order?"
              placeholderTextColor="white"
            />
          </View>
        </View>

        {/* Categories */}
        <View style={{ paddingHorizontal: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 18, marginBottom: 10 }}>Categories</Text>
            <TouchableOpacity>
              <Text style={{ color: 'blue', fontSize: 14 }}>See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row' }}>
            {['Burgers', 'Dessert', 'Mexican', 'Sushi'].map((category, index) => (
              <TouchableOpacity key={index} style={{ alignItems: 'center', marginRight: 20 }}>
                <View style={{ backgroundColor: '#2c1857', padding: 20, borderRadius: 20 }}>
                  <Image
                    source={images[category]}
                    style={{ width: 50, height: 50 }}
                    resizeMode="contain"
                  />
                </View>
                <Text style={{ color: 'white', marginTop: 10 }}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Discount Cards */}
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
          {bannerData.map((item, index) => (
            <View
              key={index}
              style={{
                width: 300,
                marginHorizontal: 10,
                backgroundColor: '#2c1857',
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 5,
                overflow: 'hidden',
              }}
            >
              <ImageBackground
                source={item.imageUrl}
                style={{
                  width: '100%',
                  height: 150,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
              />
              <View style={{ padding: 20 }}>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
                  {item.discount}
                </Text>
                <Text style={{ color: 'white', fontSize: 16, marginBottom: 10 }}>
                  {item.description}
                </Text>
                <TouchableOpacity
                  style={{
                    paddingVertical: 10,
                    backgroundColor: 'blue',
                    borderRadius: 10,
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Order Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Fastest Near You */}
        <View style={{ paddingHorizontal: 15 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Fastest near you</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', marginTop: 10 }}>
            {[1, 2, 3].map((item, index) => (
              <View key={index} style={{ marginRight: 15 }}>
                <Image source={{ uri: 'https://example.com/restaurant.png' }} style={{ width: 150, height: 100, borderRadius: 10 }} />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
