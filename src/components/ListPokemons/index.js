import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import ListItemPokemon from '../ListItemPokemon';
import FilterMenu from '../FilterMenu';
import {
  Container, Logo, Title, ListContainer, NotificationContainer, NotificationText,
} from './styles';


import colors from '../../assets/pokemons/colors';

const pokeball = require('../../assets/pokeball.png');

const ListPokemons = ({ pokemons, title, notification }) => {
  const returnPokemonColor = (types) => {
    let color = 'transparent';
    types.forEach((type) => { color = colors[type.description]; });
    return color;
  };

  const handleNotification = () => {
    if (notification) {
      return (
        <NotificationContainer>
          <NotificationText>{notification}</NotificationText>
          <Icon name="check-circle" size={20} color="#6C79DB" />
        </NotificationContainer>
      );
    }
    return null;
  };


  return (
    <Container>
      <Logo source={pokeball} />
      <Title>{title}</Title>
      {handleNotification()}
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

ListPokemons.defaultProps = {
  notification: '',
};

ListPokemons.propTypes = {
  notification: PropTypes.string,
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    evolutions: PropTypes.arrayOf.isRequired,
    types: PropTypes.arrayOf.isRequired,
    stats: PropTypes.arrayOf.isRequired,
    moves: PropTypes.arrayOf.isRequired,
  })).isRequired,
  title: PropTypes.string.isRequired,
};

export default ListPokemons;
