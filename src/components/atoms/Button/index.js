import React, { useMemo, } from 'react';
import ReactNative from 'react-native';

const Button = ({ title, type='primary', onPress, }) => {
    const color = useMemo(() => {
        switch(type){
            case 'primary':
                return '#2196F3';
            case 'secondary':
                return 'grey';
            default:
                return '#2196F3';
        }
    }, [type]);

    return(
    <ReactNative.Button title={title} color={color} onPress={onPress} />
    );
};

export default Button;