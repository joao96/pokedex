import React from 'react';
import PropTypes from 'prop-types';


import {
  Container, CategoryItem, CategoryText, Logo,
} from './styles';

const pokeball = require('../../assets/pokeball.png');

const Category = ({ text, color }) => (
  <Container>
    <CategoryItem style={{ backgroundColor: color }}>
      <CategoryText>{text}</CategoryText>
      <Logo source={pokeball} />
    </CategoryItem>
  </Container>
);

Category.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Category;
