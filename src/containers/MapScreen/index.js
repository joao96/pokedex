import React, { useState, useEffect } from 'react';
import {
  Alert,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import randomLocation from 'random-location';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-community/async-storage';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import axios from 'axios';
import { CapturePokemonButton, CaptureText, Container } from './styles';
// eslint-disable-next-line import/no-cycle
import { UserContext } from '../..';

const api = 'https://floating-escarpment-78741.herokuapp.com/api/v1/captures/';

const MapScreen = ({ navigation }) => {
  const [isClose, setIsClose] = useState(false);
  const [pokemon, setPokemon] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  const { state: userState } = React.useContext(UserContext);

  const checkIsClose = (locations, pos) => {
    locations.forEach((location) => {
      if (Math.abs(pos.longitude - location.longitude) > 0.00001
        && Math.abs(pos.latitude - location.latitude) > 0.00001) {
        setIsClose(true);
      } else {
        setIsClose(false);
      }
    });
  };

  const generateMarkers = async (id, pos) => {
    const R = 100; // meters
    const points = [];
    for (let i = 0; i < 3; i += 1) {
      points.push(randomLocation.randomCirclePoint(pos, R));
    }
    setMarkers(points);
    checkIsClose(points, pos);
    await AsyncStorage.setItem(id, JSON.stringify(points));
  };

  const fetchPokemonLocation = async (id, pos) => {
    const location = JSON.parse(await AsyncStorage.getItem(id));
    if (location) {
      setMarkers(location);
      checkIsClose(location, pos);
    } else {
      generateMarkers(id, pos);
    }
  };


  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      (pos) => {
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });

        const { pokemon } = navigation.state.params;

        if (pokemon) {
          setPokemon(pokemon);
          fetchPokemonLocation(pokemon.id.toString(), pos.coords);
        }
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 3000 },
    );

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

  const capturePokemon = async () => {
    const response = await axios.post(`${api}`, { user_id: userState.user.id, pokemon_id: pokemon.id });
    let storagePokemons = JSON.parse(await AsyncStorage.getItem('pokemons'));

    storagePokemons = storagePokemons.map((el) => {
      const newPokemon = el;
      if (pokemon.id === el.id) {
        newPokemon.captured = true;
      }
      return newPokemon;
    });

    await AsyncStorage.setItem('pokemons', JSON.stringify(storagePokemons));

    if (response.data) {
      navigation.navigate('CapturedPokemons', { captured: true });
      generateMarkers(pokemon.id.toString(), position);
    }
  };

  return (
    <Container>
      <MapView
        followsUserLocation
        showsUserLocation
        style={handlePokeMapStyle()}
        provider={PROVIDER_GOOGLE}
        region={getMapRegion()}
      >
        {pokemon
          ? ( // fazer um map em markers para rendereizar
            markers.map((marker) => (
              <Marker
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                image={pokemon.image}
                key={marker.latitude}
              />
            ))
          ) : null }
      </MapView>
      {
        pokemon && isClose && (
        <CapturePokemonButton onPress={() => capturePokemon()}>
          <CaptureText> Capture Pokemon </CaptureText>
        </CapturePokemonButton>
        )
      }
    </Container>

  );
};

MapScreen.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(MapScreen);
