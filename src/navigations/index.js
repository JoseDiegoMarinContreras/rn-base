import React, {useReducer, useMemo,} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SecurityNav from '@navigations/SecurityNav';
import AppNav from '@navigations/AppNav';
import AppContext from '@context';

const Stack = createStackNavigator();
const navOptions = { headerShown: false, };

const AppNavigation = (props) => {
    const [state, dispatch] = useReducer((prevState, action) => {
        switch (action.type){
            case "SIGN_IN":
                console.log('True');
                return { isLogin: true, };
            case "SIGN_OUT":
                console.log('False');
                return { isLogin: false, };
            default:
                prevState;
        }
    }, {
        isLogin: false,
    });

    const authContext = useMemo(() => ({
        signIn: () => dispatch({ type: 'SIGN_IN', }),
        signOut: () => dispatch({ type: 'SIGN_OUT', }),
    }), []);

    return(
    <AppContext.Provider value={authContext}>
        <Stack.Navigator screenOptions={navOptions}>
            {
                state.isLogin?
                    <Stack.Screen name={'AppNav'} component={AppNav} />
                :
                    <Stack.Screen name={'SecurityNav'} component={SecurityNav} />
            }
        </Stack.Navigator>
    </AppContext.Provider>
    );
};

export default AppNavigation;