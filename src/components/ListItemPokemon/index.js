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

  const capitalizeFirstLetter = (pokemonName) => pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

  const { name, types, image } = pokemon;

  return (
    <Container style={{ backgroundColor: color }} onPress={handlePress}>
      <Logo source={{ uri: image }} />
      <PokeballLogo source={pokeball} />
      <DescriptionContainer>
        <ItemName>{capitalizeFirstLetter(name)}</ItemName>
        { types.map((type) => (
          <ItemType>
            <ItemTypeText>{type.description}</ItemTypeText>
          </ItemType>
        )) }
      </DescriptionContainer>
    </Container>

  );
};

ListItemPokemon.propTypes = {
  pokemon: PropTypes.isRequired,
  color: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(ListItemPokemon);
