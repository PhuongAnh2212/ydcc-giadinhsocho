import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// Is this the real life, is this the fantasy (must be Final Fantasy)
// We are truly the arknights
// Manifest Đà Lạt


//                   _.-/`)
//                  // / / )
//               .=// / / / )
//              // / / / / /
//             //`/       /
//            ||         /
//            \\        /
//             ))     .`
//            //    /        


const Homepage = ({ navigation }) => {
  const goToDetails = () => {
    // Navigate to another screen (e.g., Details screen)
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button title="Go to Details" onPress={goToDetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Homepage;
