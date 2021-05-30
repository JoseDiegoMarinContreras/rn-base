import React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import AppNavigation from '@navigations';

const App = (props) => {

    return(
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    );
};

export default App;