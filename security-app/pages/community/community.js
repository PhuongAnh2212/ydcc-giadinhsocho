import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const Commnunity = ({ navigation }) => {

    return (
      <View>
        <Text onPress={(handleButtonPress) => { navigation.navigate('App'); } }
         style={{fontSize: 100}}>
          Community</Text>
        <Text style = {{fontSize: 100}} 
        onPress={(handleButtonPress) => { navigation.navigate('App'); } }>
            Back
        </Text>
      </View>
    );
  };

export default Commnunity