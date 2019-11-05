import React from 'react';

import {
  Container, Logo, TopContainer, Title, CategoriesContainer, Row, Column, TitleNews, NewsContainer,
} from './styles';

import Category from '../Category';

const pokeball = require('../../assets/pokeball.png');

const text = 'What Pokemon\nare you looking for?';

const HomeScreen = () => (
  <Container>
    <TopContainer>
      <Logo source={pokeball} />
      <Title>{text}</Title>
      {/* searchBar */}
      <CategoriesContainer>
        <Row>
          <Column>
            <Category text="Pokedex" color="#46D7AB" />
          </Column>
          <Column>
            <Category text="Moves" color="#FA6555" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Category text="Abilities" color="#429BED" />
          </Column>
          <Column>
            <Category text="Items" color="#FFCE4B" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Category text="Locations" color="#7C538C" />
          </Column>
          <Column>
            <Category text="Type Charts" color="#B1736C" />
          </Column>
        </Row>
      </CategoriesContainer>
    </TopContainer>

    <NewsContainer>
      <TitleNews>Pokémon News</TitleNews>
    </NewsContainer>
  </Container>
);

export default HomeScreen;
