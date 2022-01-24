import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import {
  Box,
  Center,
  Text,
  Icon,
  HStack,
  Button,
  IconButton,
  Spacer,
} from "native-base";
import { StyleSheet, Dimensions } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const MapFooter = () => {
  return (
    <Box
      bg="#fff"
      position="absolute"
      width="90%"
      bottom="50"
      height="130"
      p="11px"
    >
      <Center>
        <Text fontWeight="semibold" fontSize="lg" color="col.headtext">
          Rider(You)
        </Text>
        <HStack>
          <Icon as={EvilIcons} name="location" color="#8F92A1" />
          <Text
            alignSelf="center"
            fontWeight="semibold"
            fontSize="15px"
            color="col.greylight"
          >
            Agbowo Shopping Complex Agbowo UI
          </Text>
        </HStack>
        <Button
          borderRadius="12"
          height="56px"
          mb="17px"
          w="100%"
          bg="col.500"
          _text={{
            color: "col.white",
            fontWeight: "semibold",
            fontSize: "lg",
          }}
        >
          Start Trip o
        </Button>
      </Center>
    </Box>
  );
};

export default MapFooter;

// const styles = StyleSheet.create({
//   map: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
// });
