import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import FlashcardList from './fc_list/flashcardList'
import styles from './flashcard.styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// *Gets bug* Omg DnD moment (Roll nat 1 on a perception check)

const Flashcard = ({ navigation }) => {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARD)
    const [current_tab, setCurrent_tab]= useState(0)
  return (
    <View style={styles.page_container}> 

        <View style={styles.statusbar}>
            <MaterialCommunityIcons name="arrow-left" color={"#0F1113"} size={26} style = {styles.icon} onTouchEnd={()=>{
                navigation.navigate('App')
            }}/>
            <Text style = {[styles.explain, {fontSize:14, paddingBottom: 5}]}>Lesson</Text>
            <Text style = {[styles.lesson, {fontSize:18, paddingBottom: 20}]}>Fraudulent Scheme</Text>
            <Image style={[styles.img, {maxWidth:390}]} source={require("../../../assets/bars.png")} />
        </View>


        <FlashcardList flashcard = {flashcards[current_tab]} key = {flashcards[current_tab].id}/>


        <View style={styles.navigate}>
        <View style={[styles.selectButton,styles.back]} role='button' accessible={true} onTouchEnd={()=>{
            current_tab <= 0? setCurrent_tab(current_tab):setCurrent_tab(current_tab-1)}}>
            <Text style = {[styles.button_des, {
                color:"#e2698f"
            }]}> 
                Previous
            </Text>
            
        </View>
        <View style={[styles.selectButton,styles.next]} role='button' accessible={true} onTouchEnd={()=>{
            current_tab >= flashcards.length-1? navigation.navigate('Quiz'):setCurrent_tab(current_tab+1)}}>
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
        question: 'Be Cautious with Email Links',
        answer: 'Clicking on links in emails can lead to fake phishing websites or malicious sites set up by hackers.',
    },
    {
        id: 2,
        question: 'Be Careful with Email Attachments',
        answer: 'Malicious code and viruses can be hidden in email attachments. Do not download attachments immediately, always scan them for viruses first.',
    },
    {
        id: 3,
        question: 'Beware of Spam Messages',
        answer: 'Similar to spam emails, spam messages (sms spam) can be used to scam users. Exercise caution when receiving unexpected messages with offers or links.'
    }
]
export default Flashcard;
