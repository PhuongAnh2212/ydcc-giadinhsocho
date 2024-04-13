// Import necessary dependencies from React and React Native
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
// Define your functional component
export default function Onboarding2 ({navigation}) {
    const handleButtonPress = () => {
        console.log('Button pressed!');
    };    return (
    <>
    <ImageBackground
          source={require('../../assets/OBBG/OB3.png')}
          style={styles.background} /><View style={styles.container}>
            
            <Text style={[styles.text, {fontSize: 18}]}>Any disabilities that would help us</Text>
            <Text style={[styles.text, {fontWeight: 'bold' }]}>assist you better?</Text>
            <TouchableOpacity style={styles.buttonmain1} onPress={(handleButtonPress) => { navigation.navigate('App'); } }>
                {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
                <Image  //ảnh ava người dùng
                    style={styles.icon}
                    source={require('../../assets/demographic-icon/old.png')}
                />
                    <Text style={[styles.buttonmainText, { color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, top:10}]}>Middle-age</Text>
                </TouchableOpacity>

            <TouchableOpacity style={styles.buttonmain2} onPress={(handleButtonPress) => { navigation.navigate('App'); } }>
                {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
                    <Image  //ảnh ava người dùng
                        style={styles.icon}
                        source={require('../../assets/demographic-icon/young.png')}
                    />
                    <Text style={[styles.buttonmainText, { color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, top:10}]}>Young adult</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonmain3} onPress={(handleButtonPress) => { navigation.navigate('App'); } }>
                    {/* <Ionicons name="settings-helper" size={32} color="white" /> */}
                    <Text style={[styles.buttonmainText, { color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, top:10}]}>Others</Text>
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
    text: {
        bottom: 550,
        fontSize: 24,
        textAlign: 'left',
        fontWeight: 'regular',
        color: '#fff'
    },
    buttonmain1: {
        position: 'absolute',
        width: 170,
        height: 230,
        bottom: 450,
        left: 30,
        alignSelf: 'center',
        backgroundColor: '#8974E9',
        color: '#fffff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center',
    },
    
    
    buttonmain2: {
        position: 'absolute',
        width: 170,
        height: 230,
        bottom: 450,
        left: 215,
        alignSelf: 'center',
        backgroundColor: '#F27D2D',
        color: '#fffff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center',
    },
    buttonmain3: {
        position: 'absolute',
        width: 170,
        height: 230,
        bottom: 200,
        left: 120,
        alignSelf: 'center',
        backgroundColor: '#A6D934',
        color: '#fffff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center',

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
