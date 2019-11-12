import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';

import reactotron from 'reactotron-react-native';
import {
  Container, Name, DataContainer, NameSequenceContainer, SequenceNumber,
  TypeContainer, Type, TypeText, Logo, PokeBallLogo, DottedLogo,
  InfoContainer, TabContainer, Tab, TabText,
} from './styles';

import About from '../About';
import BaseStats from '../../components/BaseStats';

import colors from '../../assets/pokemons/colors';

const pokeball = require('../../assets/pokeball.png');
const dotted = require('../../assets/dotted.png');

const DetailPokemon = ({ navigation }) => {
  const [tabs, setTabs] = useState([true, false, false, false]);
  const [pokemon, setPokemon] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const {
    id,
  } = navigation.state.params;

  const fetchPokemon = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/1/');
    setPokemon(response.data);
    setIsLoading(false);
  };

  useEffect(async () => {
    await fetchPokemon();
  }, []);

  function tabTextStyle(index) {
    if (!tabs[index]) {
      return { opacity: 0.3, borderBottomWidth: 0 };
    }

    return { opacity: 1, borderBottomWidth: 2 };
  }

  const returnPokemonColor = (types) => {
    let color = 'transparent';
    types.forEach((type) => { color = colors[type.description]; });
    return color;
  };

  const returnPokemonNumber = (id) => {
    if ((id / 10) >= 10) {
      return `#${id}`;
    }
    if ((id / 10) > 1) {
      return `#0${id}`;
    }
    return `#00${id}`;
  };

  const capitalizeFirstLetter = (pokemonName) => pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

  const handleTabPress = (active) => {
    const array = [false, false, false, false];
    array[active] = true;
    setTabs(array);
    setActiveTab(active);
  };

  const handleActiveTab = () => {
    switch (activeTab) {
      case 0:
        return <About />;
      case 1:
        return <BaseStats />;
      case 2:
        return <About />;
      case 3:
        return <BaseStats />;
      default:
        return <About />;
    }
  };

  if (isLoading) {
    return (
      <Container contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#46D7AB" />
      </Container>
    );
  }
  return (
    <Container style={{ backgroundColor: '#A98FF3' }}>
      <DataContainer>
        <NameSequenceContainer>
          <Name>
            {capitalizeFirstLetter(pokemon.name)}
          </Name>
          <SequenceNumber>
            {returnPokemonNumber(id)}
          </SequenceNumber>
        </NameSequenceContainer>
        <TypeContainer>
          { pokemon.types.map((type) => (
            <Type>
              <TypeText>{type.description}</TypeText>
            </Type>
          )) }
        </TypeContainer>
      </DataContainer>
      <InfoContainer>
        <TabContainer>
          <Tab onPress={() => { handleTabPress(0); }}>
            <TabText style={tabTextStyle(0)}>
            About
            </TabText>
          </Tab>
          <Tab onPress={() => { handleTabPress(1); }}>
            <TabText style={tabTextStyle(1)}>
            Base Stats
            </TabText>
          </Tab>
          <Tab onPress={() => { handleTabPress(2); }}>
            <TabText style={tabTextStyle(2)}>
            Evolution
            </TabText>
          </Tab>
          <Tab onPress={() => { handleTabPress(3); }}>
            <TabText style={tabTextStyle(3)}>
            Moves
            </TabText>
          </Tab>
        </TabContainer>
        {handleActiveTab()}
      </InfoContainer>
      <Logo source={{ uri: pokemon.sprites.front_default }} />
      <PokeBallLogo source={pokeball} />
      <DottedLogo source={dotted} />
    </Container>
  );
};

DetailPokemon.propTypes = {
  id: PropTypes.isRequired,
  navigation: PropTypes.shape({
    state: PropTypes.func.isRequired,
  }).isRequired,
};


export default DetailPokemon;
