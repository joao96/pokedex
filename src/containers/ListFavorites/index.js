import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator } from 'react-native';
import ListItemPokemon from '../../components/ListItemPokemon';
import FilterMenu from '../../components/FilterMenu';
import {
  Container, Logo, Title, ListContainer, LoadingContainer,
} from './styles';

import colors from '../../assets/pokemons/colors';

const pokeball = require('../../assets/pokeball.png');

const ListFavorites = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorites, setIsFavorites] = useState(false);

  const { favorites, addPokemon } = navigation.state.params;

  const fetchPokemon = async () => {
    const response = await axios.get('https://floating-escarpment-78741.herokuapp.com/api/v1/pokemons');
    setPokemons(response.data);
    setIsLoading(false);
  };

  const fetchMyPokemons = async () => {
    const myFavoritesStorage = await AsyncStorage.getItem('favorites');
    let myFavoritesIds = [];
    if (myFavoritesStorage) {
      myFavoritesIds = JSON.parse(myFavoritesStorage);
    }
    if (addPokemon) {
      myFavoritesIds.push(addPokemon);
      await AsyncStorage.setItem('favorites', JSON.stringify(myFavoritesIds));
    }

    const myFavorites = [];
    pokemons.forEach((pokemon) => {
      if (myFavoritesIds.includes(pokemon.id)) {
        myFavorites.push(pokemon);
      }
    });
    if (favorites) {
      setPokemons(myFavorites);
      setIsFavorites(true);
    }
  };

  useEffect(() => {
    fetchPokemon();
    fetchMyPokemons();
  }, []);

  const returnPokemonColor = (types) => {
    let color = 'transparent';
    types.forEach((type) => { color = colors[type.description]; });
    return color;
  };

  if (isLoading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#46D7AB" />
      </LoadingContainer>
    );
  }


  return (
    <Container>
      <Logo source={pokeball} />
      { isFavorites ? <Title>Favorites</Title> : <Title>Pokedex</Title> }
      <ListContainer>
        {
          pokemons.map((pokemon) => (
            <ListItemPokemon
              key={pokemon.id}
              pokemon={pokemon}
              color={returnPokemonColor(pokemon.types)}
            />
          ))
        }
      </ListContainer>
      <FilterMenu />
    </Container>
  );
};

ListFavorites.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.func.isRequired,
  }).isRequired,
};


export default ListFavorites;
