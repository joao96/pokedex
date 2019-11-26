import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import { ActivityIndicator } from 'react-native';
import reactotron from 'reactotron-react-native';
import ListPokemons from '../../components/ListPokemons';

import {
  Container, LoadingContainer,
} from './style';
import { UserContext } from '../..';


const CapturedPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { state: userState } = React.useContext(UserContext);

  const fetchCaptures = async () => {
    const response = await axios.get(`https://floating-escarpment-78741.herokuapp.com/api/v1/users/${userState.user.id}`);
    setPokemons(response.data.pokemons);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCaptures();
  }, []);

  if (isLoading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#46D7AB" />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <ListPokemons
        pokemons={pokemons}
        title="Captured Pokemons"
      />
    </Container>
  );
};

CapturedPokemons.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.func.isRequired,
  }).isRequired,
};


export default CapturedPokemons;
