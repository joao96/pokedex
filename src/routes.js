import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './components/HomeScreen';

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
  },
  {
    initialRouteName: 'HomeScreen',
  },
));


export default Routes;
