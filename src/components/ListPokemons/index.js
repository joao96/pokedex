import React from 'react';
import PropTypes from 'prop-types';

import ListItemPokemon from '../ListItemPokemon';
import FilterMenu from '../FilterMenu';
import {
  Container, Logo, Title, ListContainer,
} from './styles';

import colors from '../../assets/pokemons/colors';

const pokeball = require('../../assets/pokeball.png');

const ListPokemons = ({ pokemons, title }) => {
  const returnPokemonColor = (types) => {
    let color = 'transparent';
    types.forEach((type) => { color = colors[type.description]; });
    return color;
  };

  return (
    <Container>
      <Logo source={pokeball} />
      <Title>{title}</Title>
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

ListPokemons.propTypes = {
  pokemons: PropTypes.arrayOf.isRequired,
  title: PropTypes.string.isRequired,
};

export default ListPokemons;
