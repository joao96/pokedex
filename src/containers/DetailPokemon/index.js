import React from 'react';
import PropTypes from 'prop-types';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { View, StyleSheet, Dimensions } from 'react-native';

import {
  Container, Name, DataContainer, TypeContainer, Type, TypeText, Logo, InfoContainer,
} from './styles';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />
);

const FourthRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />
);


class DetailPokemon extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'about', title: 'About' },
      { key: 'baseStats', title: 'Base Stats' },
      { key: 'evolution', title: 'Evolution' },
      { key: 'moves', title: 'Moves' },
    ],
  };

  render() {
    const { navigation } = this.props;
    const {
      name, type1, type2, image, color,
    } = navigation.state.params;

    return (
      <Container style={{ backgroundColor: color }}>
        <DataContainer>
          <Name>
            {name}
          </Name>
          <TypeContainer>
            <Type>
              <TypeText>{type1}</TypeText>
            </Type>
            {type2 ? (
              <Type>
                <TypeText>{type2}</TypeText>
              </Type>
            ) : null}
          </TypeContainer>
        </DataContainer>
        <InfoContainer>
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              about: FirstRoute,
              baseStats: SecondRoute,
              evolution: ThirdRoute,
              moves: FourthRoute,
            })}
            onIndexChange={(index) => this.setState({ index })}
            style={{ borderTopRightRadius: 15, borderTopLeftRadius: 15 }}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: '#6C79DB' }}
                style={{ backgroundColor: '#ffffff' }}
                labelStyle={{ color: '#000', fontSize: 10 }}
              />
            )}
          />
        </InfoContainer>
        <Logo source={image} />
      </Container>
    );
  }
}

DetailPokemon.defaultProps = {
  type2: null,
};

DetailPokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type1: PropTypes.string.isRequired,
  type2: PropTypes.string,
  image: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    state: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default DetailPokemon;
