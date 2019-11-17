import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { ActivityIndicator } from 'react-native';
import reactotron from 'reactotron-react-native';
import {
  ListItemContainer, Container, LoadingContainer, Title, ButtonsContainer, Button,
  ItemContainer, DescriptionContainer, ItemName, PokeballLogo, InfoText, Blank,
} from './styles';

const pokeball = require('../../assets/pokeball.png');

const Items = () => {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  const fetchItems = async (type) => {
    if (type === 'next') {
      setOffset(offset + 20);
    } else {
      setOffset(offset - 20);
    }
    const response = await axios.get(`https://pokeapi.co/api/v2/item/?offset=${offset}&limit=20`);
    reactotron.log(response);
    setItems(response.data.results);
    setCount(response.data.count);
    setIsLoading(false);
  };

  const capitalize = (itemName) => itemName.charAt(0).toUpperCase() + itemName.slice(1);

  useEffect(() => {
    fetchItems('next');
  }, []);

  const ItemColor = () => ({ backgroundColor: '#FFCE4B' });


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
      <Title>Items</Title>
      <ListItemContainer>
        {
          items.map((item) => (
            <ItemContainer style={ItemColor()}>
              {/* <Logo source={{ uri: image }} /> */}
              <DescriptionContainer>
                <ItemName>{capitalize(item.name.replace(/[^a-zA-Z0-9]/g, ' '))}</ItemName>
                {/* { item.attributes.map((attribute) => (
                  <ItemAttr>
                    <ItemAttrText>{capitalize(attribute.name)}</ItemAttrText>
                  </ItemAttr>
                )) } */}
              </DescriptionContainer>
            </ItemContainer>
          ))
        }
      </ListItemContainer>
      <ButtonsContainer>
        { offset > 20
          ? (
            <Button onPress={() => fetchItems('previous')}>
              <InfoText>PREVIOUS</InfoText>
            </Button>
          )
          : <Blank />}
        <InfoText>Page {((offset - 20) / 20) + 1} of {Math.floor(count / 20) + 1}</InfoText>
        { offset < count
          ? (
            <Button onPress={() => fetchItems('next')} title="Next">
              <InfoText>NEXT</InfoText>
            </Button>
          )
          : <Blank />}
      </ButtonsContainer>
    </Container>
  );
};

export default Items;
