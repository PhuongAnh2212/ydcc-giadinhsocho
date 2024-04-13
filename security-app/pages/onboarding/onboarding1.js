// Import necessary dependencies from React and React Native
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

// Define your functional component
function Onboarding1 ({navigation}) {
    const handleButtonPress = () => {
        console.log('Button pressed!');
    };

    return (
    <><ImageBackground
            source={require('../../assets/OBBG/OB2.png')}
            style={styles.background} /><View style={styles.container}>
                <Text style={styles.text}>Do you want to</Text>
                <LottieView
                    style={styles.animation}
                    source={require('../../assets/ob.json')}
                    autoPlay
                    loop
                />
                <Text style={[styles.text, {fontWeight: 'bold' }]}>receive surprise content?</Text>

                <TouchableOpacity style={styles.button1} onPress={(handleButtonPress) => { navigation.navigate('Onboarding2'); } }>
                    <Text style={[styles.buttonText1, { color: '#FFFFFF', fontWeight: 'bold', fontSize:20 }]}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={(handleButtonPress) => { navigation.navigate('Onboarding'); } }>
                    <Text style={[styles.buttonText1, { color: '#FFFFFF', fontWeight: 'bold', fontSize:20 }]}>No</Text>
                </TouchableOpacity>
            </View></>

  );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center', 
        width:420,
        height: 900
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0950F4',
    },
    animation: {
        right: 30,
        bottom: 200,
        width: '100%',
      },
    text: {
        bottom: 550,
        fontSize: 24,
        textAlign: 'left',
        fontWeight: 'regular',
        color: '#fff'
    },
    button1: {
        position: 'absolute',
        width: 180,
        height: 180,
        bottom: 60,
        right: 15,
        alignSelf: 'center',
        backgroundColor: '#00CF66',
        color: '#fffff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center',
      },
      button2: {
        position: 'absolute',
        width: 180,
        height: 180,
        bottom: 60,
        left: 15,
        alignSelf: 'center',
        backgroundColor: '#FF7373',
        color: '#fffff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center',
      },
    });

export default Onboarding1;
