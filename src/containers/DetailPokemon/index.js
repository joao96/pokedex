import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Name, DataContainer,
  TypeContainer, Type, TypeText, Logo,
  InfoContainer, TabContainer, Tab, TabText,
} from './styles';

import About from '../About';

const DetailPokemon = ({ navigation }) => {
  const [tabs, setTabs] = useState([true, false, false, false]);

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
        break;
      case 1:
        setTabs([false, true, false, false]);
        break;
      case 2:
        setTabs([false, false, true, false]);
        break;
      case 3:
        setTabs([false, false, false, true]);
        break;
      default:
        setTabs([true, false, false, false]);
    }
  };


  return (
    <Container style={{ backgroundColor: color }}>
      <DataContainer>
        <Name>
          {name}
        </Name>
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
        <About />
      </InfoContainer>
      <Logo source={image} />
    </Container>
  );
};

DetailPokemon.defaultProps = {
  type2: null,
};

DetailPokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type1: PropTypes.string.isRequired,
  type2: PropTypes.string,
  image: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    state: PropTypes.func.isRequired,
  }).isRequired,
};


export default DetailPokemon;
