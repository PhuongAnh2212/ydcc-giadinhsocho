import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import styles from '../flashcard.styles';

const FlashcardList = ({flashcard}) => {
    const [flip, setFlip] = useState(false)

  return (
    <View style={[styles.card, flip? styles.flipped:""]} role='tab' accessible={true} onTouchEnd={()=>{
        setFlip(!flip)}} >
    <View style={[styles.front]}>
        <Text>{flashcard.question}</Text>
    </View>
    <View style={[styles.back]}>
        <Text>{flashcard.answer}</Text>
    </View>

    </View>
);
};


export default FlashcardList;
