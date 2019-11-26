import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import {
  Container, Logo, ItemName, ItemType, ItemTypeText, DescriptionContainer, PokeballLogo,
} from './styles';

const pokeball = require('../../assets/pokeball.png');


const ListItemPokemon = ({
  pokemon, color, navigation,
}) => {
  const handlePress = () => {
    navigation.navigate('DetailPokemon', { id: pokemon.id });
  };

  const capitalize = (pokemonName) => pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

  const { name, types, image } = pokemon;

  return (
    <Container style={{ backgroundColor: color }} onPress={handlePress}>
      <Logo source={{ uri: image }} />
      <PokeballLogo source={pokeball} />
      <DescriptionContainer>
        <ItemName>{capitalize(name)}</ItemName>
        { types.map((type) => (
          <ItemType key={type.description}>
            <ItemTypeText>{capitalize(type.description)}</ItemTypeText>
          </ItemType>
        )) }
      </DescriptionContainer>
    </Container>

  );
};


ListItemPokemon.propTypes = {
  color: PropTypes.string.isRequired,
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    evolutions: PropTypes.arrayOf.isRequired,
    types: PropTypes.arrayOf.isRequired,
    stats: PropTypes.arrayOf.isRequired,
    moves: PropTypes.arrayOf.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(ListItemPokemon);
