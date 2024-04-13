import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Button, Animated, PanResponder } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles, SUSPISCIOUS_LINKS  } from './dnd.module';

// I'm like Odysseus stucking on Calypso island for 7 years

const Dragable = ({ ID, isActive, setisActive ,onSorted, used_ID, setUsed_ID, pts, setPts}) => {
    const position = useRef(new Animated.ValueXY()).current
    const opacity = useRef(new Animated.Value(1)).current
    const [dragging, setDragging] = useState(false)
    const [sus, setsus] = useState(false)
    const [sorted, setSorted] = useState(false)
    const isSortedCorrectly = (gesture) =>{
        if (gesture.moveY > 800){
            setSorted(true)
            return true;
        }
        if (gesture.moveX > 200){
            setSorted(true)
            return true
        }
        return false;
    }
    useEffect(()=>{
        if(isActive<= SUSPISCIOUS_LINKS.length)
        console.log(used_ID)
        setPts(pts+1)
        used_ID.add(isActive-1)
    },[isActive])
    const panResponder = useRef(PanResponder.create(
        {
            onStartShouldSetPanResponder:()=> true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant:()=>{
                setDragging(true)
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    {
                        dx:position.x,
                        dy:position.y,
                    },
                ],
                {useNativeDriver: false}
            ),
            onPanResponderRelease:(e, gesture) => {
                if (isSortedCorrectly(gesture)){
                    Animated.timing(opacity, {
                        toValue:0,
                        duration:0,
                    useNativeDriver: false
                    }).start();
                setDragging (false);
                }
                else {Animated.spring(position, {
                    toValue:{
                        x: 0,
                        y: 0
                    },
                    friction: 5,
                    useNativeDriver: false
                },
                ).start();
                setDragging (false);
            }
        }
}
)).current

    if (isActive != ID.id){
        return null
    }

  return (
    <Animated.View style={[styles.card, {
        transform:position.getTranslateTransform(),
        opacity:dragging? 0.8:opacity,
    }]
    }
    {...panResponder.panHandlers}>
      <Text style={styles.title}>{ID.link}</Text>
    </Animated.View>
  );
};

export default Dragable;
