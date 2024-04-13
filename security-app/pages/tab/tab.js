import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Homepage from '../home/home';
import Leaderboard from '../leaderboard/leaderboard';
import Flashcard from '../practice/flashcard/flashcard';
import Setting from '../settings/settings';
import Lesson from '../practice/lesson';
import DragnDrop from '../games/drag and drop game/dnd';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator initialRouteName='Homepage'>
            <Tab.Screen name="Homepage" component={Lesson} 
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home-variant" color={color} size={26} />
                ),
                tabBarShowLabel: false, 
            }}/>
            <Tab.Screen name = "Practice" component={Homepage} 
              options={{headerShown:false, gestureEnabled:false,
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="gamepad-variant-outline" color={color} size={26} />
              ),
              tabBarShowLabel: false
            }}/> 
            <Tab.Screen name="Leaderboard" component={Leaderboard} 
            options={{headerShown:false,
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-group-outline" color={color} size={26} />
              ),
              tabBarShowLabel: false}}/>
            <Tab.Screen name="Setting" component={Homepage} 
          options={{headerShown:false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="saw-blade" color={color} size={26} />
            ),
            tabBarShowLabel: false}}/>

      </Tab.Navigator>
    )
}


export default MyTabs