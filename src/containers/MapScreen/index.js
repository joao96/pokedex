import React, { useState, useEffect } from 'react';
import {
  Alert,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';


import Geolocation from '@react-native-community/geolocation';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { CapturePokemonButton, CaptureText } from './styles';

const MapScreen = ({ navigation }) => {
  const [isClose, setIsClose] = useState(false);

  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  const MARKER_POSITION = {
    latitude: 0,
    longitude: 0,
  };

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      (pos) => {
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );

    if (Math.abs(position.longitude - MARKER_POSITION.longitude) > 0.00001) {
      setIsClose(true);
    } else {
      setIsClose(false);
    }

    return () => Geolocation.clearWatch(watchId);
  }, [position]);

  const getMapRegion = () => ({
    latitude: position.latitude,
    longitude: position.longitude,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
  });

  const handlePokeMapStyle = () => {
    const { pokeMap } = navigation.state.params;
    if (pokeMap) {
      return { flex: 1 };
    }

    return { width: 334, height: 149 };
  };


  return (
    <MapView
      followsUserLocation
      showsUserLocation
      style={handlePokeMapStyle()}
      provider={PROVIDER_GOOGLE}
      region={getMapRegion()}
    >
      <Marker
        coordinate={{
          latitude: position.latitude + 0.000020,
          longitude: position.longitude + 0.000020,
        }}
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      />
      {
        isClose && (
        <CapturePokemonButton>
          <CaptureText> Capture Pokemon </CaptureText>
        </CapturePokemonButton>
        )
      }
    </MapView>

  );
};

MapScreen.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(MapScreen);
