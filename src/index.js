import React, { useReducer } from 'react';
import { StatusBar } from 'react-native';
// eslint-disable-next-line import/no-cycle
import Routes from './routes';

export const UserContext = React.createContext();

const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

if (__DEV__) {
  import('../ReactotronConfig');
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <StatusBar barStyle="light-content" backgroundColor="#E5E5E5" />
        <Routes />
      </UserContext.Provider>
    </>
  );
};

export default App;
