import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default function Onboarding1 ({navigation}) {
    const handleButtonPress = () => {
        console.log('Button pressed!');
    };

    return (
    <><ImageBackground
            source={require('security-app/assets/onb1.png')}
            style={styles.background} /><View style={styles.container}>
                <Text style={styles.text}>Do you want to</Text>
                <Text style={[styles.text, {fontWeight: 'bold' }]}>receive surprise content?</Text>

                <TouchableOpacity style={styles.button1} onPress={(handleButtonPress) => { navigation.navigate('Onboarding2'); } }>
                    <Text style={[styles.buttonText1, { color: '#FFFFFF', fontWeight: 'bold' }]}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={(handleButtonPress) => { navigation.navigate('Onboarding'); } }>
                    <Text style={[styles.buttonText1, { color: '#E2698F', fontWeight: 'bold' }]}>Back</Text>
                </TouchableOpacity>
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
        textAlign: 'left',
        fontWeight: 'regular',
        color: '#fff'
    },
    button1: {
        position: 'absolute',
        width: 180,
        height: 70,
        bottom: 60,
        right: 15,
        alignSelf: 'center',
        backgroundColor: '#E2698F',
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
        height: 70,
        bottom: 60,
        left: 15,
        alignSelf: 'center',
        backgroundColor: '#F5B4C8',
        color: '#fffff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center',
      },
});
