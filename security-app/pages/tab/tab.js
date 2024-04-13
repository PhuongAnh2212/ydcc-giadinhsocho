import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Homepage from '../home/home';
import Leaderboard from '../leaderboard/leaderboard';
import Flashcard from '../practice/flashcard/flashcard';

import DragnDrop from '../practice/drag and drop game/dnd';

import Login from '../loginnregist/login';
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator >
            <Tab.Screen name="Homepage" component={Homepage}/>
            <Tab.Screen name = "Practice" component={Flashcard} options={{headerShown:false, gestureEnabled:false}}/>
            <Tab.Screen name="Leaderboard" component={Leaderboard} options={{headerShown:false}}/>
      </Tab.Navigator>
    )
}


export default MyTabs