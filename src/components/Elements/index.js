import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Pluralize from 'pluralize';
import axios from 'axios';

import { ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';
import reactotron from 'reactotron-react-native';
import {
  ListElementContainer, Container, LoadingContainer, Title, ButtonsContainer, Button,
  ElementContainer, DescriptionContainer, ElementName, PokeballLogo, InfoText, Blank,
} from './styles';

const pokeball = require('../../assets/pokeball.png');

const Elements = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [type] = useState(navigation.state.params.type);

  const fetchData = async (paginate) => {
    if (paginate === 'next') {
      setOffset(offset + 20);
    } else {
      setOffset(offset - 20);
    }
    const response = await axios.get(`https://pokeapi.co/api/v2/${type}/?offset=${offset}&limit=20`);
    reactotron.log(response);
    setData(response.data.results);
    setCount(response.data.count);
    setIsLoading(false);
  };

  const capitalize = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    fetchData('next');
  }, []);

  const elementColor = () => {
    switch (type) {
      case 'move':
        return { backgroundColor: '#FA6555' };
      case 'item':
        return { backgroundColor: '#FFCE4B' };
      default:
        return { backgroundColor: '#429BED' };
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
    <Container>
      <PokeballLogo source={pokeball} />
      <Title>{Pluralize(`${capitalize(type)}`)}</Title>
      <ListElementContainer>
        {
          data.map((el) => (
            <ElementContainer style={elementColor()} key={el.name}>
              {/* <Logo source={{ uri: image }} /> */}
              <DescriptionContainer>
                <ElementName>{capitalize(el.name.replace(/[^a-zA-Z0-9]/g, ' '))}</ElementName>
                {/* { item.attributes.map((attribute) => (
                  <ItemAttr>
                    <ItemAttrText>{capitalize(attribute.name)}</ItemAttrText>
                  </ItemAttr>
                )) } */}
              </DescriptionContainer>
            </ElementContainer>
          ))
        }
      </ListElementContainer>
      <ButtonsContainer>
        { offset > 20
          ? (
            <Button onPress={() => fetchData('previous')}>
              <InfoText>PREVIOUS</InfoText>
            </Button>
          )
          : <Blank />}
        <InfoText>Page {((offset - 20) / 20) + 1} of {Math.floor(count / 20) + 1}</InfoText>
        { offset < count
          ? (
            <Button onPress={() => fetchData('next')} title="Next">
              <InfoText>NEXT</InfoText>
            </Button>
          )
          : <Blank />}
      </ButtonsContainer>
    </Container>
  );
};

Elements.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.object.isRequired,
  }).isRequired,
};


export default withNavigation(Elements);
