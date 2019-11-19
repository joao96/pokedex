import React, { useEffect, useState } from 'react';

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator } from 'react-native';
import ListPokemons from '../../components/ListPokemons';

import {
  Container, LoadingContainer,
} from './styles';

const ListFavorites = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMyPokemons = async () => {
    const response = await axios.get('https://floating-escarpment-78741.herokuapp.com/api/v1/pokemons');

    const myFavoritesStorage = await AsyncStorage.getItem('favorites');
    let myFavoritesIds = [];
    if (myFavoritesStorage) {
      myFavoritesIds = JSON.parse(myFavoritesStorage);
    }

    const myFavorites = [];
    response.data.forEach((pokemon) => {
      if (myFavoritesIds.includes(pokemon.id)) {
        myFavorites.push(pokemon);
      }
    });
    setPokemons(myFavorites);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMyPokemons();
  }, []);

  if (isLoading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#46D7AB" />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <ListPokemons
        pokemons={pokemons}
        title="Favorites"
      />
    </Container>
  );
};

export default ListFavorites;
