import React from 'react';

import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './components/HomeScreen';
import Elements from './components/Elements';
import ListPokedex from './containers/ListPokedex';
import ListFavorites from './containers/ListFavorites';
import DetailPokemon from './containers/DetailPokemon';
import MapScreen from './containers/MapScreen';

const headerStyle = { // remove bottom line and shadow from header
  marginHorizontal: 28,
  marginTop: 50,
  elevation: 0, // android
  shadowOpacity: 0, // ios
};

const Routes = createAppContainer(createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerStyle: {
          elevation: 0, // android
          shadowOpacity: 0, // ios
        },
        headerTransparent: true,
      }),
    },
    ListPokedex: {
      screen: ListPokedex,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <Icon name="arrow-back" size={28} color="#303943" onPress={() => navigation.navigate('HomeScreen')} />,
        headerRight: <Icon name="menu" size={28} color="#303943" />,
        headerStyle,
        headerTransparent: true,
      }),
    },
    ListFavorites: {
      screen: ListFavorites,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <Icon name="arrow-back" size={28} color="#303943" onPress={() => navigation.pop(1)} />,
        headerRight: <Icon name="menu" size={28} color="#303943" />,
        headerStyle,
        headerTransparent: true,
      }),
    },
    Elements: {
      screen: Elements,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <Icon name="arrow-back" size={28} color="#303943" onPress={() => navigation.navigate('HomeScreen')} />,
        headerRight: <Icon name="menu" size={28} color="#303943" />,
        headerStyle,
        headerTransparent: true,
      }),
    },
    DetailPokemon: {
      screen: DetailPokemon,
    },
    MapScreen: {
      screen: MapScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <Icon name="arrow-back" size={28} color="#303943" onPress={() => navigation.navigate('DetailPokemon')} />,
        title: 'PokeMap',
        headerTitleStyle: {
          fontFamily: 'ABeeZee-Regular',
          alignSelf: 'center',
          textAlign: 'center',
          flex: 1,
        },
        headerRight: (<View />),
      }),

    },
  },
  {
    initialRouteName: 'HomeScreen',
  },
));


export default Routes;
