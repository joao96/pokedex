import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Foundation';
import {
  Container, Description,
  BodyInfoContainer, InfoText,
  InfoData, Row, Column, SectionText,
  GeneralContainer,
} from './styles';


const text = 'Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun\'s\n rays, the seed grows progressively larger.';

const styles = StyleSheet.create({
  map: {
    height: 150,
    width: 330,
  },
});

const About = () => (
  <Container>
    <Description>{text}</Description>
    <BodyInfoContainer>
      <Row>
        <Column>
          <InfoText>Height</InfoText>
        </Column>
        <Column>
          <InfoText>Weight</InfoText>
        </Column>
      </Row>
      <Row>
        <Column>
          <InfoData>2’3.6” (0.70 cm)</InfoData>
        </Column>
        <Column>
          <InfoData>15.2 lbs (6.9 kg)</InfoData>
        </Column>
      </Row>
    </BodyInfoContainer>

    <SectionText>
        Breeding
    </SectionText>
    <GeneralContainer>
      <Row>
        <Column>
          <InfoText>Gender</InfoText>
        </Column>
        <Column>
          <InfoData><Icon name="male-symbol" size={15} color="#6C79DB" />87.5%</InfoData>
        </Column>
        <Column>
          <InfoData><Icon name="female-symbol" size={15} color="#F0729F" /> 12.5%</InfoData>
        </Column>
      </Row>
      <Row>
        <Column>
          <InfoText>Egg Groups</InfoText>
        </Column>
        <Column>
          <InfoData>Monster</InfoData>
        </Column>
        <Column />
      </Row>
      <Row>
        <Column>
          <InfoText>Egg Cycle</InfoText>
        </Column>
        <Column>
          <InfoData>Grass</InfoData>
        </Column>
        <Column />
      </Row>
    </GeneralContainer>

    <SectionText>
      Location
    </SectionText>

    <GeneralContainer>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -15.7797200,
          longitude: -47.9297200,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </GeneralContainer>

    <SectionText>
      Training
    </SectionText>

    <GeneralContainer>
      <Row>
        <Column>
          <InfoText>Base EXP</InfoText>
        </Column>
        <Column>
          <InfoData>64</InfoData>
        </Column>
      </Row>
    </GeneralContainer>

  </Container>

);


export default About;