import * as React from 'react';
import MapView from 'react-native-maps';
import {Box} from 'native-base'
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function MapScreen() {
  return (
    <Box flex={1} bgColor="#fff" alignItems='center' justifyContent='center' >
      <MapView style={styles.map} />
    </Box>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});