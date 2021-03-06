import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container, Name, DataContainer, NameSequenceContainer, SequenceNumber,
  TypeContainer, Type, TypeText, Logo, PokeBallLogo, DottedLogo,
  InfoContainer, TabContainer, Tab, TabText, LoadingContainer,
} from './styles';

// eslint-disable-next-line import/no-cycle
import About from '../About';
import BaseStats from '../../components/BaseStats';
import Evolutions from '../../components/Evolution';

import colors from '../../assets/pokemons/colors';

const pokeball = require('../../assets/pokeball.png');
const dotted = require('../../assets/dotted.png');

const api = 'https://floating-escarpment-78741.herokuapp.com/api/v1/pokemons/';

const DetailPokemon = ({ navigation }) => {
  const [tabs, setTabs] = useState([true, false, false, false]);
  const [pokemon, setPokemon] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [evolutions, setEvolutions] = useState([]);

  const {
    id,
  } = navigation.state.params;


  const fetchEvolution = async (pokemon, aux) => {
    aux.push(pokemon);
    if (pokemon.evolutions.length > 0) {
      const response = await axios.get(`${api}${pokemon.evolutions[0].id}`);
      return fetchEvolution(response.data, aux);
    }
    return aux;
  };

  const fetchPokemon = async () => {
    const response = await axios.get(`${api}${id}/`);
    setPokemon(response.data);
    setIsLoading(false);
    if (response.data.evolutions.length > 0) {
      setEvolutions(fetchEvolution(response.data, []));
    } else {
      setEvolutions(response.data);
    }
  };

  const isFavorite = async () => {
    const Storage = JSON.parse(await AsyncStorage.getItem('favorites'));
    if (Storage) {
      if (Storage.includes(id)) {
        navigation.setParams({ isListed: true });
      } else {
        navigation.setParams({ isListed: false });
      }
    } else {
      navigation.setParams({ isListed: false });
    }
  };

  useEffect(() => {
    fetchPokemon();
    isFavorite();
  }, [id]);

  const tabTextStyle = (index) => {
    if (!tabs[index]) {
      return { opacity: 0.3, borderBottomWidth: 0 };
    }

    return { opacity: 1, borderBottomWidth: 2 };
  };

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

  const capitalize = (pokemonName) => pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

  const handleTabPress = (active) => {
    const array = [false, false, false, false];
    array[active] = true;
    setTabs(array);
    setActiveTab(active);
  };

  const handleActiveTab = () => {
    switch (activeTab) {
      case 0:
        return (
          <About
            pokemon={pokemon}
            height={pokemon.height}
            weight={pokemon.weight}
            baseExp={pokemon.base_experience}
          />
        );
      case 1:
        return <BaseStats baseStats={pokemon.stats} />;
      case 2:
        return <Evolutions evolutions={evolutions} />;
      case 3:
        return <About />;
      default:
        return <About />;
    }
  };

  if (isLoading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#46D7AB" />
      </LoadingContainer>
    );
  }

  return (
    <Container style={{ backgroundColor: returnPokemonColor(pokemon.types) }}>
      <DataContainer>
        <NameSequenceContainer>
          <Name>
            {capitalize(pokemon.name)}
          </Name>
          <SequenceNumber>
            {returnPokemonNumber(id)}
          </SequenceNumber>
        </NameSequenceContainer>
        <TypeContainer>
          { pokemon.types.map((type) => (
            <Type key={type.description}>
              <TypeText>{capitalize(type.description)}</TypeText>
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
          {/* <Tab onPress={() => { handleTabPress(3); }}>
            <TabText style={tabTextStyle(3)}>
            Moves
            </TabText>
          </Tab> */}
        </TabContainer>
        {handleActiveTab()}
      </InfoContainer>
      <Logo source={{ uri: pokemon.image }} />
      <PokeBallLogo source={pokeball} />
      <DottedLogo source={dotted} />
    </Container>
  );
};

DetailPokemon.navigationOptions = ({ navigation }) => {
  const { id } = navigation.state.params;
  const isListed = navigation.getParam('isListed');
  const handleRightIcon = () => {
    if (isListed) {
      return (
        <Icon
          name="favorite"
          size={28}
          color="#ffffff"
          onPress={() => navigation.navigate('ListFavorites', { id, action: 'DELETE_POKEMON' })}
        />
      );
    }
    return (
      <Icon
        name="favorite-border"
        size={28}
        color="#ffffff"
        onPress={() => navigation.navigate('ListFavorites', { id, action: 'ADD_POKEMON' })}
      />
    );
  };

  return {
    headerLeft: <Icon name="arrow-back" size={28} color="#ffffff" onPress={() => navigation.pop(1)} />,
    headerRight: handleRightIcon(),
    headerStyle: {
      marginHorizontal: 28,
      marginTop: 50,
      elevation: 0, // android
      shadowOpacity: 0,
    },
    headerTransparent: true,
  };
};

DetailPokemon.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.object.isRequired,
    setParams: PropTypes.func.isRequired,
  }).isRequired,
};

export default DetailPokemon;
