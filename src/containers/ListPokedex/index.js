import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import { ActivityIndicator } from 'react-native';
import ListPokemons from '../../components/ListPokemons';

import {
  Container, LoadingContainer,
} from './styles';


const ListPokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemon = async () => {
    const response = await axios.get('https://floating-escarpment-78741.herokuapp.com/api/v1/pokemons');
    setPokemons(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemon();
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
        title="Pokedex"
      />
    </Container>
  );
};

ListPokedex.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.object.isRequired,
  }).isRequired,
};


export default ListPokedex;
