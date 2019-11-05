import React from 'react';

import ListItemPokemon from '../../components/ListItemPokemon';

import {
  Container, Logo, Title, ListContainer,
} from './styles';

const Bulbasaur = require('../../assets/pokemons/bulbasaur.png');
const Ivysaur = require('../../assets/pokemons/ivysaur.png');
const Venusaur = require('../../assets/pokemons/venusaur.png');

const Charmander = require('../../assets/pokemons/charmander.png');
const Charmeleon = require('../../assets/pokemons/charmeleon.png');
const Charizard = require('../../assets/pokemons/charizard.png');

const Squirtle = require('../../assets/pokemons/squirtle.png');
const WarTortle = require('../../assets/pokemons/wartortle.png');
const Blastoise = require('../../assets/pokemons/blastoise.png');

const Pikachu = require('../../assets/pokemons/pikachu.png');


const pokeball = require('../../assets/pokeball.png');

const ListPokedex = () => (
  <Container>
    <Logo source={pokeball} />
    <Title>Pokedex</Title>
    <ListContainer>
      {/* bulbasaur */}
      <ListItemPokemon
        name="Bulbasaur"
        type1="Grass"
        type2="Poison"
        image={Bulbasaur}
        color="#46D7AB"
      />
      <ListItemPokemon
        name="Ivysaur"
        type1="Grass"
        type2="Poison"
        image={Ivysaur}
        color="#46D7AB"
      />
      <ListItemPokemon
        name="Venusaur"
        type1="Grass"
        type2="Poison"
        image={Venusaur}
        color="#46D7AB"
      />
      {/* charmander */}
      <ListItemPokemon
        name="Charmander"
        type1="Fire"
        image={Charmander}
        color="#FB6C6C"
      />

      <ListItemPokemon
        name="Charmeleon"
        type1="Fire"
        image={Charmeleon}
        color="#FB6C6C"
      />

      <ListItemPokemon
        name="Charizard"
        type1="Fire"
        image={Charizard}
        color="#FB6C6C"
      />

      {/* squirtle */}
      <ListItemPokemon
        name="Squirtle"
        type1="Water"
        image={Squirtle}
        color="#46C5D7"
      />

      <ListItemPokemon
        name="Wartortle"
        type1="Water"
        image={WarTortle}
        color="#46C5D7"
      />

      <ListItemPokemon
        name="Blastoise"
        type1="Water"
        image={Blastoise}
        color="#46C5D7"
      />

      <ListItemPokemon
        name="Pikachu"
        type1="Electric"
        image={Pikachu}
        color="#FFDC7D"
      />
    </ListContainer>
  </Container>
);

export default ListPokedex;
