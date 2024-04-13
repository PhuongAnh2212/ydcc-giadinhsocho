import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default function Onboarding({navigation}) {
    const handleButtonPress = () => {
        console.log('Button pressed!');
    };

    return (
    <><ImageBackground
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
            )
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
    button1: {
        position: 'absolute',
        width: 300,
        height: 70,
        bottom: 60,
        alignSelf: 'center',
        backgroundColor: '#E2698F',
        color: '#fffff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center',
      },
    buttonmain: {
        position: 'absolute',
        width: 180,
        height: 250,
        bottom: 500,
        left: 16,
        alignSelf: 'center',
        backgroundColor: '#00A652',
        color: '#fffff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center',
    },

    });
