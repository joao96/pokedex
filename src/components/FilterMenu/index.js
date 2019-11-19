import React, { useState } from 'react';
import { withNavigation } from 'react-navigation';
import { FAB, Portal, Provider } from 'react-native-paper';
import PropTypes from 'prop-types';

const MenuFilter = ({ navigation }) => {
  const [open, setOpen] = useState(false);

  const fabColor = () => ({ backgroundColor: '#6C79DB' });

  const handleNavigation = () => {
    navigation.navigate('ListPokedex', { favorites: true });
  };

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
              icon: 'heart', color: '#6C79DB', label: 'Favourite Pokemon', onPress: () => handleNavigation(),
            },
            {
              icon: 'pokemon-go', color: '#6C79DB', label: 'All Type', onPress: () => console.log('Pressed all type'),
            },
            {
              icon: 'magnify', color: '#6C79DB', label: 'Search', onPress: () => console.log('Pressed search'),
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
