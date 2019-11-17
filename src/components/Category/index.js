import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import {
  CategoryItem, CategoryText, Logo,
} from './styles';

const pokeball = require('../../assets/pokeball.png');

const Category = ({
  text, color, component, navigation,
}) => (
  <CategoryItem
    style={{ backgroundColor: color }}
    onPress={() => (component ? navigation.navigate(component) : null)}
  >
    <CategoryText>{text}</CategoryText>
    <Logo source={pokeball} />
  </CategoryItem>
);

Category.defaultProps = {
  component: null,
};

Category.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  component: PropTypes.string,
};

export default withNavigation(Category);
