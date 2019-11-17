import React, { useState } from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';

const MenuFilter = () => {
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
              icon: 'heart', color: '#6C79DB', label: 'Favourite Pokemon', onPress: () => console.log('Pressed favourite'),
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


export default MenuFilter;
