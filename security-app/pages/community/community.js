import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const Community = ({ navigation }) => {

    return (
      <View>
        <Text onPress={(handleButtonPress) => { navigation.navigate('App'); } }
         style={{fontSize: 100}}>
          Community</Text>
      </View>
    );
  };

export default Community