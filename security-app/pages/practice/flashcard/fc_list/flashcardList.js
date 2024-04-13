import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
// import style from ''

const FlashcardList = ({flashcard}) => {
    const [flip, setFlip] = useState(false)

  return (
    <View role='tab' accessible={true} onTouchEnd={()=>{
        setFlip(!flip)
    }}>
    <Text>
        {flip? flashcard.answer :flashcard.question}
    </Text>
    </View>
);
};


export default FlashcardList;
