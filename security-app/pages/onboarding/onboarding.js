// Import necessary dependencies from React and React Native
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

// Define your functional component
const Onboarding = () => {
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
                <Text style={styles.text}>Hi there, you are...</Text>
                <TouchableOpacity style={styles.button1} onPress={(handleButtonPress) => { navigation.navigate('Onboarding1'); } }> 
                        <Text style={[styles.buttonText1, { color: '#FFFFFF', fontWeight: 'bold', fontSize:20 }]}>Next</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.buttonmain} onPress={(handleButtonPress) => { navigation.navigate('Onboarding1'); } }>
                    <Text style={[styles.buttonmainText, { color: '#FFFFFF', fontWeight: 'bold'}]}>Middle-age</Text>
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

export default Onboarding;
