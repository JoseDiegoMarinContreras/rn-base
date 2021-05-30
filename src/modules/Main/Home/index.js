import React, { useContext, } from 'react';
import { View, Text, Image, } from 'react-native';
import { NavigationContext, } from '@react-navigation/native';
import AppContext from '@context';
import Button from '@components/atoms/Button';
import globalStyles from '@styles/global';

const Home = (props) => {
    const navigation = useContext(NavigationContext);
    const { signOut, } = useContext(AppContext);

    return(
    <View style={globalStyles.mainView}>
        <Image style={{ marginVertical: 8, width: 250, height: 250, alignSelf: 'center' }} source={require('@assets/images/logo.png')} />

        <Text style={{ marginBottom: 8, }}>
            Home screen <Text style={{ fontWeight: 'bold', }}>(@modules/Main/Home)</Text>
        </Text>

        <Button title={'List of movies'}  onPress={() => navigation.push('ListOfMovies')} />

        <View style={{ marginVertical: 8, }} />

        <Button title={'Logout'} type={'secondary'} onPress={() => signOut()} />
    </View>
    );
};

export default Home;