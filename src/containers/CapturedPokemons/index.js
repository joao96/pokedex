import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ListPokemons from '../../components/ListPokemons';

import {
  Container, LoadingContainer,
} from './style';


const CapturedPokemons = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCaptures = async () => {
    const response = JSON.parse(await AsyncStorage.getItem('pokemons'));
    const { captured } = navigation.state.params;
    const pokemonsFiltered = response.filter((pokemon) => pokemon.captured === captured);

    setPokemons(pokemonsFiltered);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCaptures();
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
        title={navigation.state.params.captured ? `Captured Pokemons - ${pokemons.length}/151` : `Missing Pokemons - ${pokemons.length}/151`}
      />
    </Container>
  );
};

CapturedPokemons.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.func.isRequired,
  }).isRequired,
};


export default CapturedPokemons;
