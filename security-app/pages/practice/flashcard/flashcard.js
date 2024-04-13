import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import FlashcardList from './fc_list/flashcardList'
import styles from './flashcard.styles';

// *Gets bug* Omg DnD moment (Roll nat 1 on a perception check)


const Flashcard = ({ navigation }) => {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARD)
  return (
    <View style={styles.page_container}> 

        {flashcards.map(flashcard => {
                return <FlashcardList flashcard = {flashcard} key = {flashcard.id}
                />
            })}
        <View role='button' accessible={true}    >
        <Text> 
            flip
        </Text>
        
    </View>

    <View role='button' accessible={true}>
        <Text> 
            next
        </Text>
        
    </View>

    </View>
    
  );
};


//Data
const SAMPLE_FLASHCARD = [
    {
        id: 1,
        question: 'Hỏi đi',
        answer: 'dap an'
    },
    {
        id: 2,
        question: 'Hỏi đi 2 ',
        answer: 'dap an 2'
    },
    {
        id: 3,
        question: 'Hỏi đi 3',
        answer: 'dap an 3'
    }
]

export default Flashcard;
