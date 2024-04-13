import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyTabs from '../tab/tab'
import DragnDrop from '../practice/drag and drop game/dnd';


const Stack = createNativeStackNavigator();


function Navigation() {
    return(
    <Stack.Navigator>
        <Stack.Screen name = "App" component={MyTabs} options={{headerShown:false, gestureEnabled:false}}/>
    </Stack.Navigator>
    
    )
}
    
    
export default Navigation