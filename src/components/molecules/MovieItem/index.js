import React from 'react';
import { View, Text, } from 'react-native';
import { dateToStr, } from '@utils';

const MovieItem = ({ movie, }) => {

    return(
    <View style={{ marginVertical: 8, }}>
        <Text style={{ fontWeight: 'bold', }}>{movie.name}</Text>

        <Text>{dateToStr(movie.date)}</Text>

        <Text>{movie.desc}</Text>
    </View>
    );
};

export default MovieItem;