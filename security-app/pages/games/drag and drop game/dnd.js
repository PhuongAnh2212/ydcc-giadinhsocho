import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, Animated, ImageBackground } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles } from './dnd.module';
import Dragable from './dragable'

// I'm like Odysseus stucking on Calypso island for 7 years

const DragnDrop = ({ navigation }) => {
    const [id, setID] = useState(1)
    const [isActive, setisActive] = useState(1)
    const [used_ID, setUsed_ID] = useState([])
    const [dragging, setDragging] = useState(false)
    const random_num = ()=>{
      let loop = true;
      let idx = 0;
      while (loop){
        idx = Math.floor(Math.random()*SUSPISCIOUS_LINKS.length);
        console.log(used_ID)
        if (!((idx+1) in used_ID)){
          loop = false;
        };
      };
      setisActive(idx)
      
    }

    useEffect(()=>{
      random_num();
    }, [used_ID]);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="arrow-left" color={"#0F1113"} size={26} style = {{
          left:20, 
          position: 'absolute',
          top: 30}} 
          onTouchEnd={()=>{
                navigation.goBack()
            }}/>
      
      <View>
        {
          SUSPISCIOUS_LINKS.map((links)=> <Dragable isActive = {isActive} ID= {links} used_ID = {used_ID} setUsed_ID = {setUsed_ID}
          onSorted = {()=>random_num()}/>)
        }
        {
          used_ID.length >= SUSPISCIOUS_LINKS.length? <Text style = {styles.title}> Out of line </Text>: <Text > </Text>
        }
      </View>
      <View style={styles.button} onTouchEnd={()=> {random_num()}}>
      </View>
      <ImageBackground
          source={require('../../../assets/trash.png')}
          style={styles.buttonBackground}
          imageStyle={styles.imageStyle}
        />
    </View>
  );
};
const SUSPISCIOUS_LINKS =[
  { id :1,
    link: "https://www.youtube.com/watch?v=BhszM7II9p8&list=PL4qXOeFNdhK8WOVHgyET1-cLqpPRtAvOn&index=57&ab_channel=SIX",
    is_sus: "true"
  },
  { id: 2,
    link: "https://github.com/natsun08",
    is_sus: "false"
  },
  { id:3,
    link: "https://docs.expo.dev/router/installation/",
    is_sus: "false"
  },
  { id:4,
    link: "https://x.com/mini_cini98/status/1778557743047008354?s=46",
    is_sus: "true"
  }
]


export default DragnDrop;
