import React, { useState, useEffect } from 'react';
import {
  Alert,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';


import Geolocation from 'react-native-geolocation-service';
import MapView, { Circle } from 'react-native-maps';

const MapScreen = ({ navigation }) => {
  const INITIAL_STATE = {
    latitude: -15.7997,
    longitude: -47.8642,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
  };
  const [position, setPosition] = useState(INITIAL_STATE);
  let indicatorSize = 30;

  function findCoordinates() {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const currentPosition = {
          latitude,
          longitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        };
        setPosition(currentPosition);
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  }

  useEffect(() => {
    findCoordinates();
  }, []);

  function handlePokeMapStyle() {
    const { pokeMap } = navigation.state.params;
    if (pokeMap) {
      indicatorSize = 15;
      return { flex: 1 };
    }

    return { width: 334, height: 149 };
  }

  return (
    <MapView
      style={handlePokeMapStyle()}
      region={position}
    >
      <Circle
        center={position}
        radius={indicatorSize}
        strokeColor="#3FA7F3"
        fillColor="#3FA7F3"
      />
    </MapView>
  );
};

MapScreen.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.object.isRequired,
  }).isRequired,
};

export default withNavigation(MapScreen);
