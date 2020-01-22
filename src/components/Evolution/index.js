import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Logo, Title, EvolutionContainer, PokemonContainer, PokemonName,
} from './styles';


const Evolutions = ({ evolutions }) => {
  const [pokemons, setPokemons] = useState([]);

  const setEvolutions = async () => {
    const aux = await evolutions;
    setPokemons(aux);
  };

  const capitalize = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    setEvolutions();
  }, []);

  return (
    <Container>
      <Title>Evolution Chain</Title>
      <EvolutionContainer>
        {
        pokemons.length > 1 ? (
          pokemons.map((pokemon) => (
            <PokemonContainer key={pokemon.name}>
              <Logo source={{ uri: pokemon.image }} />
              <PokemonName>{capitalize(pokemon.name)}</PokemonName>
            </PokemonContainer>
          ))
        ) : (
          <Logo source={{ uri: pokemons.image }} />
        )
      }
      </EvolutionContainer>
    </Container>
  );
};

Evolutions.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  evolutions: PropTypes.object.isRequired,
};

export default Evolutions;
