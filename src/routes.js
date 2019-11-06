import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './components/HomeScreen';
import ListPokedex from './containers/ListPokedex';
import DetailPokemon from './containers/DetailPokemon';

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
    DetailPokemon: {
      screen: DetailPokemon,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <Icon name="arrow-back" size={28} color="#ffffff" onPress={() => navigation.navigate('ListPokedex')} />,
        headerRight: <Icon name="favorite-border" size={28} color="#ffffff" />,

        headerStyle,
        headerTransparent: true,
      }),

    },
  },
  {
    initialRouteName: 'HomeScreen',
  },
));


export default Routes;
