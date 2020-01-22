import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// eslint-disable-next-line import/no-cycle
import { UserContext } from '../..';
import ListPokemons from '../../components/ListPokemons';


import {
  Container, LoadingContainer,
} from './styles';


const ListPokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { state: userState } = React.useContext(UserContext);

  const fetchPokemon = async () => {
    const response = await axios.get('https://floating-escarpment-78741.herokuapp.com/api/v1/pokemons');
    const responseCaptured = await axios.get(`https://floating-escarpment-78741.herokuapp.com/api/v1/users/${userState.user.id}`);
    const newPokemons = [];

    response.data.forEach((pokemon) => {
      const auxPokemon = pokemon;
      auxPokemon.captured = false;
      newPokemons.push(auxPokemon);
      responseCaptured.data.pokemons.forEach((capPokemon) => {
        if (pokemon.id === capPokemon.id) {
          newPokemons[newPokemons.length - 1].captured = true;
        }
      });
    });
    setPokemons(newPokemons);
    setIsLoading(false);
    await AsyncStorage.setItem('pokemons', JSON.stringify(newPokemons));
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
