import React from 'react';


import {
  Container, StatsContainer, StatsText,
  StatsLine, StatsValue, SingleStat, GeneralContainer,
  SectionText, InfoText,
} from './styles';

const BaseStats = () => (
  <Container>
    <StatsContainer>
      <SingleStat>
        <StatsText>HP</StatsText>
        <StatsValue>45</StatsValue>
        <StatsLine />
      </SingleStat>
      <SingleStat>
        <StatsText>Attack</StatsText>
        <StatsValue>60</StatsValue>
        <StatsLine />
      </SingleStat>
      <SingleStat>
        <StatsText>Defense</StatsText>
        <StatsValue>48</StatsValue>
        <StatsLine />
      </SingleStat>
      <SingleStat>
        <StatsText>Sp. Atk</StatsText>
        <StatsValue>65</StatsValue>
        <StatsLine />
      </SingleStat>
      <SingleStat>
        <StatsText>Sp. Def</StatsText>
        <StatsValue>65</StatsValue>
        <StatsLine />
      </SingleStat>
      <SingleStat>
        <StatsText>Speed</StatsText>
        <StatsValue>45</StatsValue>
        <StatsLine />
      </SingleStat>
      <SingleStat>
        <StatsText>Total</StatsText>
        <StatsValue>317</StatsValue>
        <StatsLine />
      </SingleStat>
    </StatsContainer>

    <GeneralContainer>
      <SectionText>Type defenses</SectionText>
      <InfoText>The effectiveness of each type on Charmander.</InfoText>
    </GeneralContainer>
  </Container>
);

export default BaseStats;
