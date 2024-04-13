import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image, ImageBackground } from 'react-native';

// Ajax is me frfr (Get urges after a minor inconvenience)

const Simulation = ({ navigation }) => {
    const [sim, setFlashcards] = useState(SIMULATION)
    const [current_tab, setCurrent_tab]= useState(0)
  
  const goToNextPage = () => {
    // Navigate to another screen (e.g., Details screen)
    setCurrent_tab(current_tab+1);
  };
  return (
    <View onPress={(
        current_tab >= SIMULATION.length?
        navigation.navigate("Onboarding"):setCurrent_tab(current_tab+1))}>
        <ImageBackground 
            style={styles.image} 
            source={SIMULATION[0].image}
            />
    </View>
    
    
  );
};

styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center', 
        width:420,
        height: 900
    }
})

//Data
export const SIMULATION = [
    {
        id: 1,
        image: require('../../../assets/sim/sim.png')
    },
    {
        id: 2,
        image: require('../../../assets/sim/sim1.png')
    },
    {
        id: 3,
        image: require('../../../assets/sim/sim2.png')
    },
    {
        id: 4,
        image: require('../../../assets/sim/sim3.png')
    }
]

export default Simulation;
