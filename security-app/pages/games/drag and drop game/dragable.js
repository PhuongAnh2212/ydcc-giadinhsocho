import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Button, Animated } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles, SUSPISCIOUS_LINKS } from './dnd.module';

// I'm like Odysseus stucking on Calypso island for 7 years

const Dragable = ({ LINK }) => {
    const position = useRef(new Animated.ValueXY()).current
  return (
    <Animated.View style={styles.container}>
      <View style={styles.card}>
      <Text style={styles.title}>{LINK.link}</Text>
      </View>
    </Animated.View>
  );
};

export default Dragable;
