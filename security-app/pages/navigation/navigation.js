import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyTabs from '../tab/tab'
import Login from '../loginnregist/login';
import Regist from '../loginnregist/regist';
import DragnDrop from '../practice/drag and drop game/dnd';


const Stack = createNativeStackNavigator();


function Navigation() {
    return(
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name = "Login" component={Login} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = "Regist" component={Regist} options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen name = "App" component={MyTabs} options={{headerShown:false, gestureEnabled:false}}/>
    </Stack.Navigator>
    
    )
}
    
    
export default Navigation