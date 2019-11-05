import Reactotron from 'reactotron-react-native';

Reactotron
  .configure()
  .useReactNative()
  .connect();


console.log = Reactotron.log; // eslint-disable-line no-console
