import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, StatsContainer, StatsText,
  StatsLine, StatsValue, SingleStat, GeneralContainer,
  SectionText, InfoText, StatsBlankLine,
} from './styles';


const BaseStats = ({ baseStats }) => {
  const lineColorPercentage = (value) => ({
    backgroundColor: value >= 50 ? '#4BC07A' : '#FB6C6C',
    width: value > 100 ? 200 : value * 2,
  });

  const capitalize = (pokemonName) => pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

  return (
    <Container>
      <StatsContainer>
        { baseStats.map((el) => (
          <SingleStat key={el.name}>
            <StatsText>{capitalize(el.name)}</StatsText>
            <StatsValue>{el.value}</StatsValue>
            <StatsBlankLine>
              <StatsLine style={lineColorPercentage(el.value)} />
            </StatsBlankLine>
          </SingleStat>
        ))}
      </StatsContainer>

      <GeneralContainer>
        <SectionText>Type defenses</SectionText>
        <InfoText>The effectiveness of each type on this Pokemon.</InfoText>
      </GeneralContainer>
    </Container>
  );
};

BaseStats.propTypes = {
  baseStats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    pokemon_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

export default BaseStats;
