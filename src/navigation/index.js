import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Landing from '../features/onboarding/landing/Landing.screen'
const Stack = createNativeStackNavigator();

const rootContainer = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Landing" component={Landing} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default rootContainer;
