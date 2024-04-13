import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from '../onboarding/onboarding';
import Onboarding1 from '../onboarding/onboarding1';
import Onboarding2 from '../onboarding/onboarding2';
import Login from '../loginnregist/login';
import Regist from '../loginnregist/regist'
import MyTabs from '../tab/tab'
import DragnDrop from '../practice/drag and drop game/dnd';
import Community from '../community/community';

const Stack = createNativeStackNavigator();


function Navigation() {
    return(
    <Stack.Navigator initialRouteName='Onboarding'>
        <Stack.Screen name = 'Onboarding' component={Onboarding} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = 'Onboarding1' component={Onboarding1} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = 'Onboarding2' component={Onboarding2} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = 'App' component={MyTabs} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = "Login" component={Login} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = "Regist" component={Regist} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = "Community" component={Community} options={{headerShown:false, gestureEnabled:false}}/>

    </Stack.Navigator>
    
    )
}
    
    
export default Navigation