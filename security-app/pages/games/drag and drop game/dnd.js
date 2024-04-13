import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, Animated } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles, SUSPISCIOUS_LINKS } from './dnd.module';
import Dragable from './dragable'

// I'm like Odysseus stucking on Calypso island for 7 years

const DragnDrop = ({ navigation }) => {
    const [id, setID] = useState(1)
    const [used_ID, setUsed_ID] = useState([])
    const [dragging, setDragging] = useState(false)
    const random_num = ()=>{
      let loop = true;
      let idx = 0;
      while (loop){
        idx = Math.floor(Math.random()*SUSPISCIOUS_LINKS.length);
        if (!(idx in used_ID)){
          loop = false;
        };
      };
      setID(idx)
    }

    useEffect(()=>{
      random_num();
    }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {
          used_ID.length >= SUSPISCIOUS_LINKS.length? <Text style = {styles.title}> No more link</Text> :<Dragable LINK= {SUSPISCIOUS_LINKS[id]}/>
        }
      </View>
      <View style={styles.button} onTouchEnd={()=> random_num()}/>
    </View>
  );
};

export default DragnDrop;
