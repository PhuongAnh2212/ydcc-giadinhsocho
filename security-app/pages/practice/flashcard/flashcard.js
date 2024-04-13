import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import FlashcardList from './fc_list/flashcardList'

// *Gets bug* Omg DnD moment (Roll nat 1 on a perception check)


const Flashcard = ({ navigation }) => {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARD)
  return (
    <View style={styles.container}>

        {flashcards.map(flashcard => {
                return <FlashcardList flashcard = {flashcard} key = {flashcard.id}/>
            })}
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black'
  },
});

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
