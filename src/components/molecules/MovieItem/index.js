import React from 'react';
import { View, Text, } from 'react-native';
import { dateToStr, } from '@utils';
import styles from './style';

const MovieItem = ({ movie, }) => {

    return(
    <View style={styles.mainView}>
        <Text style={styles.movieName}>{movie.name}</Text>

        <Text>{dateToStr(movie.date)}</Text>

        <Text>{movie.desc}</Text>
    </View>
    );
};

export default MovieItem;