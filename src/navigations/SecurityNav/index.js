import React from 'react';
import { createStackNavigator, } from '@react-navigation/stack';
import Login from '@modules/Security/Login'

const Stack = createStackNavigator();

const SecurityNav = (props) => {
    return(
    <Stack.Navigator screenOptions={{ headerShown: false, }}>
        <Stack.Screen name={'Login'} component={Login} />
    </Stack.Navigator>
    );
};

export default SecurityNav;