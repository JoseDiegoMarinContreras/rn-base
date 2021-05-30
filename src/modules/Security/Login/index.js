import React, { useContext, } from 'react';
import { View, Text, Button, } from 'react-native';
import AppContext from '@context';
import globalStyles from '@styles/global';

const Login = (props) => {
    const { signIn, } = useContext(AppContext);

    return(
    <View style={globalStyles.mainView}>
        <Text style={globalStyles.marginVertical}>
            Login screen <Text style={globalStyles.boldText}>(@modules/Security/Login)</Text>
        </Text>

        <Button title={'Login'} onPress={() => signIn()} />
    </View>
    );
};

export default Login;