import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import {
  Container, Logo, ItemName, ItemType, ItemTypeText, DescriptionContainer, PokeballLogo, Pokeball,
} from './styles';

const pokeballLogo = require('../../assets/pokeball.png');
const pokeball = require('../../assets/captured.png');


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
      <PokeballLogo source={pokeballLogo} />
      <DescriptionContainer>
        <ItemName>{capitalize(name)}</ItemName>
        { types.map((type) => (
          <ItemType>
            <ItemTypeText>{capitalize(type.description)}</ItemTypeText>
          </ItemType>
        )) }
      </DescriptionContainer>
      {pokemon.captured ? <Pokeball source={pokeball} /> : null}
    </Container>

  );
};

ListItemPokemon.propTypes = {
  pokemon: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(ListItemPokemon);
