import React, { useContext, } from 'react';
import { View, Text, Button, } from 'react-native';
import { NavigationContext, } from '@react-navigation/native';
import AppContext from '@context';
import globalStyles from '@styles/global';
import style from './style';

const Login = (props) => {
    //const navigation = useContext(NavigationContext);
    const { signIn, } = useContext(AppContext);

    return(
    <View style={globalStyles.mainView}>
        <Text style={style.title}>
            Login screen <Text style={globalStyles.boldText}>(@modules/Security/Login)</Text>
        </Text>

        <Button title={'Login'} onPress={() => signIn()} />
    </View>
    );
};

export default Login;