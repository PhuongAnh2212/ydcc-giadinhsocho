// Import necessary dependencies from React and React Native
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

// Define your functional component
const Onboarding2 = () => {
    return (
    <><ImageBackground
          source={require('security-app/assets/onb1.png')}
          style={styles.background} /><View style={styles.container}>
              <Text style={styles.text}>Hi there, you are...</Text>
          </View></>
  );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0950F4',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    });

export default Onboarding2;
