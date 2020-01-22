import React, { useState } from 'react';
import { withNavigation } from 'react-navigation';
import { FAB, Portal, Provider } from 'react-native-paper';
import PropTypes from 'prop-types';

const MenuFilter = ({ navigation }) => {
  const [open, setOpen] = useState(false);

  const fabColor = () => ({ backgroundColor: '#6C79DB' });

  return (
    <Provider>
      <Portal>
        <FAB.Group
          fabStyle={fabColor()}
          color="white"
          open={open}
          icon={open ? 'close' : 'menu'}
          actions={[
            {
              icon: 'heart', color: '#6C79DB', label: 'Favorite Pokemons', onPress: () => navigation.navigate('ListFavorites'),
            },
            {
              icon: 'pokemon-go', color: '#6C79DB', label: 'Captured Pokemons', onPress: () => navigation.navigate('CapturedPokemons', { captured: true }),
            },
            {
              icon: 'magnify', color: '#6C79DB', label: 'Missing Pokemons', onPress: () => navigation.navigate('CapturedPokemons', { captured: false }),
            },
          ]}
          onStateChange={({ open }) => setOpen(open)}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

MenuFilter.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(MenuFilter);
