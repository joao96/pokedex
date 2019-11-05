import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './components/HomeScreen';
import ListPokedex from './containers/ListPokedex';

const navigationOptions = { // remove bottom line and shadow from header
  headerStyle: {
    elevation: 0, // android
    shadowOpacity: 0, // ios
  },
  headerTransparent: true,
};

const Routes = createAppContainer(createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions,
    },
    ListPokedex: {
      screen: ListPokedex,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <Icon name="arrow-back" size={28} color="#303943" onPress={() => navigation.navigate('HomeScreen')} />,
        headerRight: <Icon name="menu" size={28} color="#303943" />,

        headerStyle: {
          marginHorizontal: 28,
          marginTop: 50,
          elevation: 0, // android
          shadowOpacity: 0, // ios
        },
        headerTransparent: true,
      }),
    },
  },
  {
    initialRouteName: 'HomeScreen',
  },
));


export default Routes;
