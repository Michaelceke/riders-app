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
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import { CloseSquare } from "@src/../assets/IconComponents/CloseSquare";

interface MapHeaderProps {
  onClose: Function;
}

const MapHeader: React.FC<MapHeaderProps> = ({ onClose }) => {
  const handleCloseModal = () => {
    onClose();
  };
  return (
    <Box
      bg="#fff"
      position="absolute"
      width="90%"
      top="5"
      height="130"
      p="11px"
    >
      <HStack>
        <Text
          fontWeight="bold"
          fontSize="xl"
          color="col.greybold"
          alignSelf={"center"}
        >
          Order 1
        </Text>
        <Spacer />
        <IconButton
          icon={<CloseSquare fill={"#596273"} />}
          onPress={handleCloseModal}
        />
      </HStack>
      <Center>
        <Text fontWeight="semibold" fontSize="lg" color="col.headtext">
          Ajayi Bunmi
        </Text>
        <HStack>
          <Icon as={EvilIcons} name="location" color="#8F92A1" />
          <Text
            alignSelf="center"
            fontWeight="semibold"
            fontSize="15px"
            color="col.greylight"
          >
            No 26, Alaakia Road Bodija
          </Text>
        </HStack>
      </Center>
    </Box>
  );
};

export default MapHeader;

// const styles = StyleSheet.create({
//   map: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
// });
