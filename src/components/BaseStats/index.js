import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import reactotron from 'reactotron-react-native';
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

  useEffect(() => {
    reactotron.log(baseStats);
  }, []);

  return (
    <Container>
      <StatsContainer>
        { baseStats.map((el) => (
          <SingleStat>
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
        <InfoText>The effectiveness of each type on Charmander.</InfoText>
      </GeneralContainer>
    </Container>
  );
};

BaseStats.propTypes = {
  baseStats: PropTypes.isRequired,
};

export default BaseStats;
