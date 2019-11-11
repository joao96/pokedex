import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Alert,
} from 'react-native';

import Geolocation from 'react-native-geolocation-service';
import MapView, { Circle } from 'react-native-maps';

const styles = StyleSheet.create({
  map: {
    width: 334,
    height: 149,
  },
});

const MapScreen = () => {
  const INITIAL_STATE = {
    latitude: -15.7997,
    longitude: -47.8642,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
  };
  const [position, setPosition] = useState(INITIAL_STATE);


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

  return (
    <MapView
      style={styles.map}
      region={position}
    >
      <Circle
        center={position}
        radius={30}
        strokeColor="#3FA7F3"
        fillColor="#3FA7F3"
      />
    </MapView>
  );
};


export default MapScreen;
