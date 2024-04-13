// Import necessary dependencies from React and React Native
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

// Define your functional component
const Onboarding1 = () => {
    return (
    <><ImageBackground
<<<<<<< Updated upstream
          source={require('security-app/assets/onb1.png')}
          style={styles.background} /><View style={styles.container}>
              <Text style={styles.text}>Hi there, you are...</Text>
          </View></>
=======
            source={require('security-app/assets/onb1.png')}
            style={styles.background} /><View style={styles.container}>
                <Text style={styles.text}>Do you want to</Text>
                <Text style={[styles.text, {fontWeight: 'bold' }]}>receive surprise content?</Text>

                <TouchableOpacity style={styles.button1} onPress={(handleButtonPress) => { navigation.navigate('Onboarding2'); } }>
                    <Text style={[styles.buttonText1, { color: '#FFFFFF', fontWeight: 'bold', fontSize:20 }]}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={(handleButtonPress) => { navigation.navigate('Onboarding'); } }>
                    <Text style={[styles.buttonText1, { color: '#E2698F', fontWeight: 'bold', fontSize:20 }]}>Back</Text>
                </TouchableOpacity>
            </View></>
>>>>>>> Stashed changes
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

export default Onboarding1;
