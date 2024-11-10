// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Button, Card, Text } from 'react-native-paper';
// import MapView, { Marker } from 'react-native-maps';

// const PaperMap = () => {
//   return (
//     <View style={styles.container}>
//       <Card style={styles.card}>
//         <Card.Title title="React Native Paper Map Example" />
//         <Card.Content>
//           <Text>
//             This card has a map inside it, demonstrating the combination of React Native Paper and React Native Maps.
//           </Text>
//         </Card.Content>
//         <Card.Actions>
//           <Button onPress={() => alert('Map Button Pressed')}>Add to Cart</Button>
//         </Card.Actions>
//       </Card>
      
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="Marker" />
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   card: {
//     marginBottom: 20,
//   },
//   map: {
//     width: '100%',
//     height: 300,   
//   },
// });

// export default PaperMap;
