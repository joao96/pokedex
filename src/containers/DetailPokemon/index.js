import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Name, DataContainer, NameSequenceContainer, SequenceNumber,
  TypeContainer, Type, TypeText, Logo, PokeBallLogo, DottedLogo,
  InfoContainer, TabContainer, Tab, TabText,
} from './styles';

import About from '../About';
import BaseStats from '../../components/BaseStats';

const pokeball = require('../../assets/pokeball.png');
const dotted = require('../../assets/dotted.png');

const DetailPokemon = ({ navigation }) => {
  const [tabs, setTabs] = useState([true, false, false, false]);
  const [activeTab, setActiveTab] = useState(0);

  const {
    name, type1, type2, image, color,
  } = navigation.state.params;

  function tabTextStyle(index) {
    if (!tabs[index]) {
      return { opacity: 0.3, borderBottomWidth: 0 };
    }

    return { opacity: 1, borderBottomWidth: 2 };
  }

  const handleTabPress = (active) => {
    switch (active) {
      case 0:
        setTabs([true, false, false, false]);
        setActiveTab(0);
        break;
      case 1:
        setTabs([false, true, false, false]);
        setActiveTab(1);
        break;
      case 2:
        setTabs([false, false, true, false]);
        setActiveTab(2);
        break;
      case 3:
        setTabs([false, false, false, true]);
        setActiveTab(3);
        break;
      default:
        setTabs([true, false, false, false]);
        setActiveTab(0);
    }
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


  return (
    <Container style={{ backgroundColor: color }}>
      <DataContainer>
        <NameSequenceContainer>
          <Name>
            {name}
          </Name>
          <SequenceNumber>
            #001
          </SequenceNumber>
        </NameSequenceContainer>
        <TypeContainer>
          <Type>
            <TypeText>{type1}</TypeText>
          </Type>
          {type2 ? (
            <Type>
              <TypeText>{type2}</TypeText>
            </Type>
          ) : null}
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
      <Logo source={image} />
      <PokeBallLogo source={pokeball} />
      <DottedLogo source={dotted} />
    </Container>
  );
};

DetailPokemon.defaultProps = {
  name: 'Bulbasaur',
  type1: 'Grass',
  type2: null,
  image: null,
  color: null,
};

DetailPokemon.propTypes = {
  name: PropTypes.string,
  type1: PropTypes.string,
  type2: PropTypes.string,
  image: PropTypes.number,
  color: PropTypes.string,
  navigation: PropTypes.shape({
    state: PropTypes.func.isRequired,
  }).isRequired,
};


export default DetailPokemon;
