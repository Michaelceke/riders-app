import React from "react";
import {
  Text,
  Flex,
  Box,
  VStack,
  HStack,
  Icon,
  Badge,
  Spacer,
  Button,
  Center,
} from "native-base";
import { Linking, Platform } from "react-native";

import { Entypo, SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import OrderDetail from "../../../_shared/libs/OrderDetail";

interface OrderStartsArrivedProps {
  item: any;
}

const OrderStartsArrived: React.FC<OrderStartsArrivedProps> = ({ item }) => {
  const makeCall = () => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = "tel:${08080219726}";
    } else {
      phoneNumber = "telprompt:${08080219726}";
    }

    Linking.openURL(phoneNumber);
  };
  return (
    <VStack flex={1} width="100%" px="40px" mt="60px">
      <OrderDetail item={{}} />
      <VStack space={6}>
        <Button
          borderRadius="12"
          height="56px"
          mt="60px"
          bg="col.500"
          _text={{color:'col.white',fontWeight:'semibold', fontSize:'lg'}}
        >
          I Have Arrived
        </Button>
        <Center>
          <HStack>
            <Icon />
            <Text underline onPress={makeCall}>
              Call Customer
            </Text>
          </HStack>
        </Center>
      </VStack>
    </VStack>
  );
};

export default OrderStartsArrived;
