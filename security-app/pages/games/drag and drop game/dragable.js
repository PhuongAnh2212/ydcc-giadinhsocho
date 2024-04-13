import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Button, Animated, PanResponder } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles, SUSPISCIOUS_LINKS  } from './dnd.module';

// I'm like Odysseus stucking on Calypso island for 7 years

const Dragable = ({ ID }) => {
    const position = useRef(new Animated.ValueXY()).current
    const opacity = useRef(new Animated.Value(1)).current
    const [dragging, setDragging] = useState(false)
    const [sus, setsus] = useState(false)
    const [sorted, setSorted] = useState(false)
    const isSortedCorrectly = (sus, gesture) =>{
        console.log(sus)
        if ((gesture.moveY > 700)){
            return true
        }
        return false;
    }
    useEffect(()=>{
        console.log(SUSPISCIOUS_LINKS[ID])
        console.log(sus)
        console.log(SUSPISCIOUS_LINKS[ID].is_sus == "true")
        setsus(SUSPISCIOUS_LINKS[ID].is_sus == "true")
        console.log(sus)
    }, [ID])

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
                if (isSortedCorrectly(sus.valueOf(), gesture)){
                    Animated.timing(opacity, {
                        toValue:0,
                        duration:100,
                    useNativeDriver: false
                    }).start(()=> {
                        setSorted(true)
                    })
                }
                else{Animated.spring(position, {
                    toValue:{
                        x: 0,
                        y: 0
                    },
                    friction: 5,
                    useNativeDriver: false
                },
                ).start();
}
                setDragging (false);
            }
        }
    )).current

  return (
    <Animated.View style={[styles.card, {
        transform:position.getTranslateTransform(),
        opacity:dragging? 0.8:opacity

    }]}
    {...panResponder.panHandlers}>
      <Text style={styles.title}>{SUSPISCIOUS_LINKS[ID].link}</Text>
    </Animated.View>
  );
};

export default Dragable;
