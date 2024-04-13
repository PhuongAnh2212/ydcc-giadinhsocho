import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import FlashcardList from './fc_list/flashcardList'
import styles from './flashcard.styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// *Gets bug* Omg DnD moment (Roll nat 1 on a perception check)

const Flashcard = ({ navigation }) => {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARD)
    const [current_tab, setCurrent_tab]= useState(0)
  return (
    <View style={styles.page_container}> 
        <View style={styles.statusbar}>
            <Text style = {[styles.explain, {fontSize:20}]}>Lesson</Text>
            <Text style = {styles.lesson}>Fraudulent Scheme</Text>
            <Image style={[styles.img, {maxWidth:390}]} source={require("../../../assets/bars.png")} />
        </View>


        <FlashcardList flashcard = {flashcards[current_tab]} key = {flashcards[current_tab].id}/>


        <View style={styles.navigate}>
        <View style={[styles.selectButton,styles.back]} role='button' accessible={true} onTouchEnd={()=>{
            current_tab <= 0? setCurrent_tab(current_tab):setCurrent_tab(current_tab-1)}}>
            <Text style = {[styles.button_des, {
                color:"#FF7F1E"
            }]}> 
                Back
            </Text>
            
        </View>
        <View style={[styles.selectButton,styles.next]} role='button' accessible={true} onTouchEnd={()=>{
            current_tab >= flashcards.length-1? setCurrent_tab(current_tab):setCurrent_tab(current_tab+1)}}>
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
export const SAMPLE_FLASHCARD = [
    {
        id: 1,
        question: 'Hỏi đi',
        answer: 'dap an',
    },
    {
        id: 2,
        question: 'Hỏi đi 2',
        answer: 'dap an 2',
    },
    {
        id: 3,
        question: 'Hỏi đi 3',
        answer: 'dap an 3',
    }
]
export default Flashcard;
