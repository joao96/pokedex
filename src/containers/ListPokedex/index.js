import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { ActivityIndicator } from 'react-native';
import ListItemPokemon from '../../components/ListItemPokemon';
import FilterMenu from '../../components/FilterMenu';
import {
  Container, Logo, Title, ListContainer, LoadingContainer,
} from './styles';

import colors from '../../assets/pokemons/colors';

const pokeball = require('../../assets/pokeball.png');

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
      <Title>Pokedex</Title>
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

export default ListPokedex;
