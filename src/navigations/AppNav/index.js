import React from 'react';
import { createStackNavigator, } from '@react-navigation/stack';
import Home from '@modules/Main/Home';
import ListOfMovies from '@modules/Main/ListOfMovies';

const Stack = createStackNavigator();

const AppNav = (props) => {
    return(
    <Stack.Navigator screenOptions={{ headerShown: false, }}>
        <Stack.Screen name={'Home'} component={Home} />

        <Stack.Screen name={'ListOfMovies'} component={ListOfMovies} />
    </Stack.Navigator>
    );
};

export default AppNav;