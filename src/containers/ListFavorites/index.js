import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator } from 'react-native';
import ListPokemons from '../../components/ListPokemons';

import {
  Container, LoadingContainer,
} from './styles';

const ListFavorites = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState('');

  const fetchMyPokemons = async () => {
    const storagePokemons = JSON.parse(await AsyncStorage.getItem('pokemons'));
    const myFavoritesStorage = await AsyncStorage.getItem('favorites');
    let myFavoritesIds = [];
    if (myFavoritesStorage) {
      myFavoritesIds = JSON.parse(myFavoritesStorage);
    }
    const myFavorites = [];
    storagePokemons.forEach((pokemon) => {
      if (myFavoritesIds.includes(pokemon.id)) {
        myFavorites.push(pokemon);
      }
    });
    setPokemons(myFavorites);
    setIsLoading(false);
  };

  const addFavorite = async (id) => {
    const myFavoritesStorage = await AsyncStorage.getItem('favorites');
    let myFavoritesIds = [];
    if (myFavoritesStorage) {
      myFavoritesIds = JSON.parse(myFavoritesStorage);
    }
    if (!myFavoritesIds.includes(id)) {
      myFavoritesIds.push(id);
      await AsyncStorage.setItem('favorites', JSON.stringify(myFavoritesIds));
      fetchMyPokemons();
      return true;
    }
    return false;
  };

  const deleteFavorite = async (id) => {
    const myFavoritesStorage = await AsyncStorage.getItem('favorites');
    const myFavoritesIds = JSON.parse(myFavoritesStorage);
    if (myFavoritesIds.includes(id)) {
      myFavoritesIds.splice(myFavoritesIds.findIndex((el) => el === id), 1);
      await AsyncStorage.setItem('favorites', JSON.stringify(myFavoritesIds));
      return true;
    }
    return false;
  };

  const handleFavoriteAction = async () => {
    const { id, action } = navigation.state.params;
    setNotification('');
    switch (action) {
      case 'ADD_POKEMON':
        if (await addFavorite(id)) {
          setNotification('A Pokemon has been added!');
        }
        break;
      case 'DELETE_POKEMON':
        if (await deleteFavorite(id)) {
          setNotification('A Pokemon has been removed!');
        }
        break;
      default:
        setNotification('');
    }
  };

  useEffect(() => {
    fetchMyPokemons();
    if (navigation.state.params) {
      handleFavoriteAction();
    }
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
        notification={notification}
        pokemons={pokemons}
        title="Favorites"
      />
    </Container>
  );
};

ListFavorites.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.object.isRequired,
  }).isRequired,
};

export default ListFavorites;
