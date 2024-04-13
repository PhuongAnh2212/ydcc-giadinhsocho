import React from 'react';
import { StyleSheet, View,ImageBackground, Text, Image, TouchableOpacity } from 'react-native';


const WrongResult1 = ({ navigation }) => {
  const goToHome = () => {
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <ImageBackground
            source={RESULT[1].image}
            style={styles.backgroundQuiz} />
      
      <TouchableOpacity style={styles.button1} onPress={(goToHome)}>
            <Text style={[{ color: '#fff', fontWeight: 'bold', fontSize:20 }]}>Retry</Text>
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
        width: 300,
        height: 70,
        bottom: 60,
        left:55,
        alignSelf: 'center',
        backgroundColor: '#FECE00',
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
export default WrongResult1;
