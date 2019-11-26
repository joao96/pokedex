import React, { useState, useEffect } from 'react';

import {
  Container, Logo, TopContainer, Title, CategoriesContainer,
  TitleNews, NewsContainer, SearchBarContainer,
  SearchBarInput, NewsBody, NewsTitle, NewsImage, NewsTitleContainer,
  ButtonViewAll, TitleViewAll, NewsHeader,
} from './styles';

import Category from '../Category';

const pokeball = require('../../assets/pokeball.png');

const text = 'What Pokemon\nare you looking for?';

const HomeScreen = () => {
  const [value, onChangeText] = useState();
  const [news, setNews] = useState([]);
  const [elementsType] = useState(['move', 'ability', 'item']);

  async function fetchPokemonNews() {
    // eslint-disable-next-line
    const response = await fetch('http://newsapi.org/v2/everything?q=Pokemon&sortBy=popularity&from=2019-11-04&to=2019-11-04&apiKey=4678cbab4c894c8584eb00facd140e40');
    const data = await response.json();
    setNews(data.articles);
  }

  useEffect(() => {
    fetchPokemonNews();
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
