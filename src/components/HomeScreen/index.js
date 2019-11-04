import React from 'react';


import { Logo, Container, Title } from './styles';

const pokeball = require('../../assets/pokeball.png');

const text = 'What Pokemon\nare you looking for?';

const HomeScreen = () => (
  <Container>
    <Logo source={pokeball} />
    <Title>{text}</Title>
  </Container>
);

export default HomeScreen;
