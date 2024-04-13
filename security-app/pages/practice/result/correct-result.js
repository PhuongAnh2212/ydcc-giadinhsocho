import React from 'react';
import { StyleSheet, View,ImageBackground, Text, Image, TouchableOpacity } from 'react-native';


const Result = ({ navigation }) => {
  const goToHome = () => {
    // Navigate to another screen (e.g., Details screen)
    navigation.navigate('App');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
            source={RESULT[0].image}
            style={styles.backgroundQuiz} />
      
      <TouchableOpacity style={styles.button1} onPress={(goToHome)}>
            <Text style={[{ color: '#fff', fontWeight: 'bold', fontSize:20 }]}>Back to home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={(goToHome)}>
            <Text style={[{ color: '#fff', fontWeight: 'bold', fontSize:20 }]}>Next lesson</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    backgroundQuiz: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center', 
        width:420,
        height: 900,
    
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F7FCFF',
        gap:100
    },
    button1: {
        position: 'absolute',
        width: 180,
        height: 70,
        bottom: 60,
        left:20,
        alignSelf: 'center',
        backgroundColor: '#FECE00',
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
});

export const RESULT = [
    {
        id: 1,
        status: true,
        image: require('../../../assets/quiz-answer/quiz-1.png')
    },
    {
        id: 2,
        status: false,
        image: require('../../../assets/quiz-answer/quiz-2.png')
    },
    {
        id: 3,
        status: false,
        image: require('../../../assets/quiz-answer/quiz-3.png')
    }
]
export default Result;
