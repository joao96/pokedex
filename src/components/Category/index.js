import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import {
  CategoryItem, CategoryText, Logo,
} from './styles';

const pokeball = require('../../assets/pokeball.png');

const Category = ({
  text, color, component, navigation, type,
}) => (
  <CategoryItem
    style={{ backgroundColor: color }}
    onPress={() => (component ? navigation.navigate(component, { type }) : null)}
  >
    <CategoryText>{text}</CategoryText>
    <Logo source={pokeball} />
  </CategoryItem>
);

Category.defaultProps = {
  component: null,
  type: '',
};

Category.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  component: PropTypes.string,
};

export default withNavigation(Category);
