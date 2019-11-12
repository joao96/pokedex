import React from 'react';


import {
  Container, StatsContainer, StatsText,
  StatsLine, StatsValue, SingleStat, GeneralContainer,
  SectionText, InfoText, StatsBlankLine,
} from './styles';

const BaseStats = () => {
  const lineColorPercentage = (value, isTotal) => {
    if (!isTotal) {
      if (value < 50) {
        return { backgroundColor: '#FB6C6C', width: value * 2 };
      }
      return { backgroundColor: '#4BC07A', width: value * 2 };
    }
    if (value < 300) {
      return { backgroundColor: '#FB6C6C', width: value * 2 };
    }
    return { backgroundColor: '#4BC07A', width: (value / 2) - 50 };
  };

  return (
    <Container>
      <StatsContainer>
        <SingleStat>
          <StatsText>HP</StatsText>
          <StatsValue>45</StatsValue>
          <StatsBlankLine>
            <StatsLine style={lineColorPercentage(45, false)} />
          </StatsBlankLine>
        </SingleStat>
        <SingleStat>
          <StatsText>Attack</StatsText>
          <StatsValue>60</StatsValue>
          <StatsBlankLine>
            <StatsLine style={lineColorPercentage(60, false)} />
          </StatsBlankLine>
        </SingleStat>
        <SingleStat>
          <StatsText>Defense</StatsText>
          <StatsValue>48</StatsValue>
          <StatsBlankLine>
            <StatsLine style={lineColorPercentage(48, false)} />
          </StatsBlankLine>
        </SingleStat>
        <SingleStat>
          <StatsText>Sp. Atk</StatsText>
          <StatsValue>65</StatsValue>
          <StatsBlankLine>
            <StatsLine style={lineColorPercentage(65, false)} />
          </StatsBlankLine>
        </SingleStat>
        <SingleStat>
          <StatsText>Sp. Def</StatsText>
          <StatsValue>65</StatsValue>
          <StatsBlankLine>
            <StatsLine style={lineColorPercentage(65, false)} />
          </StatsBlankLine>
        </SingleStat>
        <SingleStat>
          <StatsText>Speed</StatsText>
          <StatsValue>45</StatsValue>
          <StatsBlankLine>
            <StatsLine style={lineColorPercentage(45, false)} />
          </StatsBlankLine>
        </SingleStat>
        <SingleStat>
          <StatsText>Total</StatsText>
          <StatsValue>317</StatsValue>
          <StatsBlankLine>
            <StatsLine style={lineColorPercentage(317, true)} />
          </StatsBlankLine>
        </SingleStat>
      </StatsContainer>

      <GeneralContainer>
        <SectionText>Type defenses</SectionText>
        <InfoText>The effectiveness of each type on Charmander.</InfoText>
      </GeneralContainer>
    </Container>
  );
};

export default BaseStats;
