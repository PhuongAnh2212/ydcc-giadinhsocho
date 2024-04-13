// import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
// import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// Ajax is me frfr (Get urges after a minor inconvenience)

const Lesson = ({ navigation }) => {
  return (
    <View>
        <View style={styles.img_container}>
            <Image style={styles.img} source={require('../../assets/lesson.png')}/>
        </View>
        <View style={styles.img_container}>
            <Image style={[styles.img, {top:540}]} source={require('../../assets/gradient.png')}/>
        </View>
        <View style={styles.navigation}>
            <View style={[styles.button1, {backgroundColor:"#FECE00"}]} onTouchEnd={()=> {navigation.navigate('Flashcard')}}>
            <AntDesign name="book" size={24} color="white" />
                <Text style={[styles.text]}>Lesson</Text>
            </View>
            <View style={[styles.button1]}>
                <Entypo name="graduation-cap" size={24} color="white" />
                <Text style={[styles.text]}>Practice</Text>
            </View>

        </View>


    </View>
    
    
  );
};

styles = StyleSheet.create(
    {
        img:{
            position:'absolute',
            width:"100%",
            objectFit:'contain',
            top:-200
        },
        img_container:{
            // position:'absolute',
            top:0,
            alignContent:"flex-start",
            justifyContent:'flex-start',
        },
        container:{
            alignContent:"center",
            justifyContent:'center',
            backgroundColor:"#FFFFFF"
        },
        text: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff'
        },
        button1: {
            width: 180,
            height: 200,
            alignSelf: 'center',
            backgroundColor: '#0884FE',
            color: '#fffff',
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 8,
            alignItems: 'center', // Center text horizontally
            justifyContent: 'center',
          }, 
        navigation:{
            flexDirection:"row",
            gap:10,
            justifyContent:'center',
            top:640
        }
    }
)

export default Lesson;

