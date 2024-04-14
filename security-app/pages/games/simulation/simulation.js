import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image, ImageBackground } from 'react-native';

// Ajax is me frfr (Get urges after a minor inconvenience)

const Simulation = ({ navigation }) => {
    const [sim, setFlashcards] = useState(SIMULATION)
    const [current_tab, setCurrent_tab]= useState(0)
  return (

    <View style={{
        // width:'100%'
    }}
    >
        <ImageBackground
            style={styles.image} 
            source={SIMULATION[current_tab].image} 
            
        />
        <Text 
            onPress={() => {
                current_tab >= SIMULATION.length-1?
                navigation.navigate("App"):setCurrent_tab(current_tab+1)}}
            style={{fontSize:100,
                    opacity:100}}
            >
                {current_tab}
        </Text>
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
    },
    {
        id: 5,
        image: require('../../../assets/sim/congratulations.png')
    }
]

export default Simulation;
