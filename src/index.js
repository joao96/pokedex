import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

if (__DEV__) {
  import('../ReactotronConfig');
}

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#E5E5E5" />
    <Routes />
  </>
);

export default App;
