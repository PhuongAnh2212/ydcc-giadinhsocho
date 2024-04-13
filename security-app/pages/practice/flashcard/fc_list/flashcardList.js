import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import styles from '../flashcard.styles';

const FlashcardList = ({flashcard}) => {
    const [flip, setFlip] = useState(false)
    let imgSrc = null
    for (fl in SAMPLE_FLASHCARD){

    }
    if(flashcard.img!="" ){
    imgSrc = SAMPLE_FLASHCARD.img

    }

  return (
    <View style= {styles.qna}>
    <View style={flip? styles.flipped:styles.card} role='tab' accessible={true} onTouchEnd={()=>setFlip(!flip)}>
        {
          !flip? <Text style = {styles.question}>
          {flashcard.question}
          </Text>:<Image style={styles.img} source={SAMPLE_FLASHCARD[flashcard.id].img}/>
        }
    </View>
    <View style={styles.answer} role='tab' accessible={true}>
        <Text style = {styles.explain}>
        {flip? flashcard.answer:" "}
        </Text>
    </View>
    </View>
);
};

const SAMPLE_FLASHCARD = {
  1:{
      img: require('../../../../assets/pfp/ciumam.jpg')
  },
  2:{
      img: require('../../../../assets/pfp/coc.jpg')
  },
  3:{
      img: require('../../../../assets/pfp/dua.jpg')
  }
}


export default FlashcardList;
