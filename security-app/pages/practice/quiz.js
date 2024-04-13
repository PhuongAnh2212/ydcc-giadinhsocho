import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image,  ImageBackground } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../practice/flashcard/flashcard.styles';

// *Gets bug* Omg DnD moment (Roll nat 1 on a perception check)

const Quiz = ({ navigation }) => {
    const [quiz, setFlashcards] = useState(SAMPLE_QUIZ)
    const [current_tab, setCurrent_tab]= useState(0)
  return (
    <View style={styles.page_container}> 
        {/* key = {answer[current_tab].id} */}
        <View style={styles.statusbar}>
            <MaterialCommunityIcons name="arrow-left" color={"#0F1113"} size={26} style = {styles.icon} onTouchEnd={()=>{
                navigation.navigate('App')
            }}/>
            <Text style = {[styles.explain, {fontSize:14, paddingBottom: 5}]}>Lesson</Text>
            <Text style = {[styles.lesson, {fontSize:18, paddingBottom: 20}]}>Fraudulent Scheme</Text>
            <Image style={[styles.img, {maxWidth:390}]} source={require("../../assets/bars.png")} />
        </View>

        <ImageBackground
            source={SAMPLE_QUIZ[current_tab].image}
            style={styles.backgroundQuiz} />
        
        <TouchableOpacity style={styles.quizButton1} onPress={(handleButtonPress) => { navigation.navigate('Onboarding1'); } }>
            <Text style={[styles.quizText]}>
                {SAMPLE_QUIZ[current_tab].answer[0]}
            </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.quizButton2} onPress={(handleButtonPress) => { navigation.navigate('Onboarding1'); } }>
            <Text style={[styles.quizText]}>
                {SAMPLE_QUIZ[current_tab].answer[1]}
            </Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.quizButton3} onPress={(handleButtonPress) => { navigation.navigate('Onboarding1'); } }>
            <Text style={[styles.quizText]}>
                {SAMPLE_QUIZ[current_tab].answer[2]}
            </Text>
        </TouchableOpacity>

        <View style={styles.navigate}>
        <View style={[styles.selectButton,styles.back]} role='button' accessible={true} onTouchEnd={()=>{
            current_tab <= 0? setCurrent_tab(current_tab):setCurrent_tab(current_tab-1)}}>
            <Text style = {[styles.button_des, {
                color:"#E2698F"
            }]}> 
                Back
            </Text>
            
        </View>
        <View style={[styles.selectButton,styles.next]} role='button' accessible={true} onTouchEnd={()=>{
            current_tab >= quiz.length-1? setCurrent_tab(current_tab):setCurrent_tab(current_tab+1)}}>
        <Text style={[styles.button_des, {
                color:"#FFFFFF"
            }]}> 
            Next
        </Text>
        </View>

    </View>

    </View>
    
  );
};


//Data
export const SAMPLE_QUIZ = [
    {
        id: 1,
        question: 'Be Cautious with Email Links',
        answer: ['meo1','meo2','meo3'],
        image: require('../../assets/quiz-answer/quiz.png')
    },
    {
        id: 2,
        question: 'Hỏi đi 2',
        answer: ['ang1','ang2','ang3'],
        image: require('../../assets/quiz-answer/quiz.png')
    },
    {
        id: 3,
        question: 'Hỏi đi 3',
        answer: ['aaa','aaaa','aaaaa'],
        image: require('../../assets/quiz-answer/quiz.png')
    }
]
export default Quiz;

