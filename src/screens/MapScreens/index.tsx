import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { Box } from "native-base";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Bicycle } from "../../../assets/IconComponents/Bicycle";

interface IGeolocation {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export default function MapScreen() {
  const [mapRegion, setmapRegion] = React.useState<IGeolocation>({
    latitude: 6.498939,
    longitude: 3.347795,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <Box flex={1} bgColor="#fff" alignItems="center" justifyContent="center">
      <MapView
        style={{ alignSelf: "stretch", height: "100%" }}
        region={mapRegion}
        onRegionChange={(region) => {
          setmapRegion({
            ...mapRegion,
            latitude: region.latitude,
            longitude: region.longitude,
          });
        }}
        onRegionChangeComplete={(region) => {
          setmapRegion({
            ...mapRegion,
            latitude: region.latitude,
            longitude: region.longitude,
          });
        }}
      >
        <Marker
          coordinate={mapRegion}
          title="Marker"
          description="test description"
        >
          <Bicycle fill={"#FF0000"} />
        </Marker>
      </MapView>
      <Text>hello world</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
