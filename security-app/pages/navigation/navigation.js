import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from '../onboarding/onboarding';
import Onboarding1 from '../onboarding/onboarding1';
import Onboarding2 from '../onboarding/onboarding2';
import Login from '../loginnregist/login';
import Regist from '../loginnregist/regist'
import MyTabs from '../tab/tab'
import Flashcard from '../practice/flashcard/flashcard';
import Lesson from '../practice/lesson';
import Quiz from '../practice/quiz';
import Result from '../practice/result/correct-result';
import WrongResult1 from '../practice/result/wrong-answer1';
import WrongResult2 from '../practice/result/wrong-answer2';
import Commnunity from '../community/community';
import Leaderboard from '../leaderboard/leaderboard';
import GameMenu from '../games/menu/game-menu';
import DragnDrop from '../games/drag and drop game/dnd';
import Simulation from '../games/simulation/simulation';

const Stack = createNativeStackNavigator();


function Navigation() {
    return(
    <Stack.Navigator initialRouteName='Onboarding'>
        <Stack.Screen name = 'Onboarding' component={Onboarding} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = 'Onboarding1' component={Onboarding1} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = 'Onboarding2' component={Onboarding2} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = 'Flashcard' component={Flashcard} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = 'Lesson' component={Lesson} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = 'App' component={MyTabs} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = "Login" component={Login} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = "Regist" component={Regist} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = "Quiz" component={Quiz} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = "Result" component={Result} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = "WrongResult1" component={WrongResult1} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = "WrongResult2" component={WrongResult2} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = "Leaderboard" component={Leaderboard} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = "Community" component={Commnunity} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = "GameMenu" component={GameMenu} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = "DragnDrop" component={DragnDrop} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = "Simulation" component={Simulation} options={{headerShown:false, gestureEnabled:false}}/>

    </Stack.Navigator>
    
    )
}
    
    
export default Navigation