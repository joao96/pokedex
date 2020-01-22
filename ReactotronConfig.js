import Reactotron from 'reactotron-react-native';

Reactotron
  .configure({ host: '192.168.0.188', port: 9090, name: 'Pokedex' })
  .useReactNative()
  .connect();


console.log = Reactotron.log; // eslint-disable-line no-console
