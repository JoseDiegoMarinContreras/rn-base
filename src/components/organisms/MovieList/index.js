import React, { useState, useEffect, } from 'react';
import { ScrollView, } from 'react-native';
import MovieItem from '@components/molecules/MovieItem'
import { get, } from '@services/movies'
import styles from './style';

const MovieList = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(get());
    },[]);

    return(
    <ScrollView style={styles.mainView}>
        {
            movies.map((movie, index) => <MovieItem key={index} movie={movie} />)
        }
    </ScrollView>
    );
};

export default MovieList;