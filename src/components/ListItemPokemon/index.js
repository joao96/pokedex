import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Logo, ItemName, ItemType, ItemTypeText, DescriptionContainer, PokeballLogo,
} from './styles';

const pokeball = require('../../assets/pokeball.png');


const ListItemPokemon = ({
  name, type1, type2, image, color,
}) => (
  <Container style={{ backgroundColor: color }}>
    <Logo source={image} />
    <PokeballLogo source={pokeball} />
    <DescriptionContainer>
      <ItemName>{name}</ItemName>
      <ItemType>
        <ItemTypeText>{type1}</ItemTypeText>
      </ItemType>
      {type2 ? (
        <ItemType>
          <ItemTypeText>{type2}</ItemTypeText>
        </ItemType>
      ) : null}
    </DescriptionContainer>
  </Container>
);

ListItemPokemon.defaultProps = {
  type2: null,
};

ListItemPokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type1: PropTypes.string.isRequired,
  type2: PropTypes.string,
  image: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default ListItemPokemon;
