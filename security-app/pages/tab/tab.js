import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Homepage from '../home/home';
import Leaderboard from '../leaderboard/leaderboard';
import DragnDrop from '../practice/drag and drop game/dnd';
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator >
            <Tab.Screen name="Homepage" component={Homepage}/>
            <Tab.Screen name = "Practice" component={DragnDrop} options={{headerShown:false, gestureEnabled:false}}/>
            <Tab.Screen name="Leaderboard" component={Leaderboard} options={{headerShown:false}}/>
      </Tab.Navigator>
    )
}


export default MyTabs