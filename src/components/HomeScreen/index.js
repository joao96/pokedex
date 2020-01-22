import React, { useState, useEffect, useContext } from 'react';

import DeviceInfo from 'react-native-device-info';

import axios from 'axios';

import {
  Container, Logo, TopContainer, Title, CategoriesContainer,
  TitleNews, NewsContainer, SearchBarContainer,
  SearchBarInput, NewsBody, NewsTitle, NewsImage, NewsTitleContainer,
  ButtonViewAll, TitleViewAll, NewsHeader,
} from './styles';

import Category from '../Category';

// eslint-disable-next-line import/no-cycle
import { UserContext } from '../..';

const pokeball = require('../../assets/pokeball.png');

const text = 'What Pokemon\nare you looking for?';

const HomeScreen = () => {
  const [value, onChangeText] = useState();
  const [news, setNews] = useState([]);
  const [elementsType] = useState(['move', 'ability', 'item']);
  const { dispatch } = useContext(UserContext);

  // eslint-disable-next-line no-unused-vars
  async function fetchPokemonNews() {
    // eslint-disable-next-line
    const response = await fetch('https://newsapi.org/v2/everything?q=pokemon&from=2019-11-10&sortBy=publishedAt&apiKey=4678cbab4c894c8584eb00facd140e40');
    const data = await response.json();
    setNews(data.articles);
  }

  async function createUser() {
    const api = 'https://floating-escarpment-78741.herokuapp.com/api/v1/users/';

    const response = await axios.post(`${api}`, { account_id: DeviceInfo.getUniqueId() });
    if (response.data) {
      dispatch({
        type: 'LOGIN',
        payload: response.data,
      });
    }
  }

  useEffect(() => {
    fetchPokemonNews();
    createUser();
  }, []);

  return (
    <Container>
      <TopContainer>
        <Logo source={pokeball} />
        <Title>{text}</Title>
        <SearchBarContainer>
          <SearchBarInput placeholder="Search Pokemon, Move, Ability etc" value={value} onChangeText={(text) => onChangeText(text)} />
        </SearchBarContainer>
        <CategoriesContainer>
          <Category text="Pokedex" color="#46D7AB" component="ListPokedex" />
          <Category text="Moves" color="#FA6555" component="Elements" type={elementsType[0]} />
          <Category text="Abilities" color="#429BED" component="Elements" type={elementsType[1]} />
          <Category text="Items" color="#FFCE4B" component="Elements" type={elementsType[2]} />
          <Category text="Locations" color="#7C538C" />
          <Category text="Type Charts" color="#B1736C" />
        </CategoriesContainer>
      </TopContainer>
      <NewsContainer>
        <NewsHeader>
          <TitleNews>Pokémon News</TitleNews>
          <ButtonViewAll>
            <TitleViewAll>
              View All
            </TitleViewAll>
          </ButtonViewAll>
        </NewsHeader>
        { news.map((notice) => (
          <NewsBody key={notice.content}>
            <NewsTitleContainer>
              <NewsTitle>
                {`${notice.title.substring(0, 50)}...`}
              </NewsTitle>
            </NewsTitleContainer>
            <NewsImage source={{ uri: `${notice.urlToImage}` }} />
          </NewsBody>
        )) }
      </NewsContainer>
    </Container>
  );
};

export default HomeScreen;
