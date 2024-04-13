// Import necessary dependencies from React and React Native
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

// Define your functional component
const Onboarding2 = () => {
    return (
    <><ImageBackground
          source={require('security-app/assets/onb1.png')}
          style={styles.background} /><View style={styles.container}>
<<<<<<< Updated upstream
              <Text style={styles.text}>Hi there, you are...</Text>
=======
            <Text style={styles.text}>Choose your</Text>
            <Text style={[styles.text, {fontWeight: 'bold' }]}>preferable UI</Text>
            <TouchableOpacity style={styles.button1} onPress={(handleButtonPress) => { navigation.navigate('App'); } }>
                    <Text style={[styles.buttonText1, { color: '#FFFFFF', fontWeight: 'bold', fontSize: 20 }]}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={(handleButtonPress) => { navigation.navigate('Onboarding1'); } }>
                    <Text style={[styles.buttonText1, { color: '#E2698F', fontWeight: 'bold', fontSize:20 }]}>Back</Text>
                </TouchableOpacity>
>>>>>>> Stashed changes
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
