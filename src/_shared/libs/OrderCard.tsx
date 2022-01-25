import React from "react";
import {
  Text,
  Flex,
  Box,
  HStack,
  Spacer,
  Checkbox,
  Icon,
  Divider,
  VStack,
  IconButton,
  useDisclose,
  Badge,
  Link,
} from "native-base";
import { OrderDataType } from "@src/_shared/dummyData/orderData";
import { RouteMarker } from "@src/../assets/IconComponents/RouteMarker";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

interface OrderCardProps {
  type: "redflags" | "neworders";
  item: OrderDataType;
}

const OrderCard = ({ type, item }: OrderCardProps) => {
  const navigation = useNavigation();
  return (
    <Box
      w="100%"
      bg={"#FFFFFF"}
      height="152px"
      mt="3"
      borderRadius="10px"
      borderWidth={"0"}
      borderColor={"#FFFFFF"}
    >
      <Flex direction="row" px={4} py={1} alignItems="center">
        <Text> Order 8</Text>

        <HStack space={3}>
          {type === "redflags" && <Badge>Delayed</Badge>}
          <IconButton icon={<AntDesign name="right" color="#596273" />} />
        </HStack>
      </Flex>
      <Divider />

      <HStack space={1}>
        <Box pl={2} alignSelf="center">
          <Icon as={<RouteMarker fill="#FF0000" />} />
        </Box>
        <VStack py={2} space={4} w="80%">
          <VStack>
            <HStack>
              <Text
                fontWeight="400"
                fontSize="sm"
                color="col.navy"
                lineHeight="15px"
              >
                Address
              </Text>
              <Spacer />
              <Link
                mr="4px"
                lineHeight="15px"
                onPress={() => navigation.navigate("view map")}
              >
                View in map
              </Link>
            </HStack>

            <Text
              color="col.headtext"
              fontWeight="semibold"
              fontSize="sm"
              lineHeight="18px"
            >
              No 26, Alaakia Road,Bodija
            </Text>
          </VStack>
          <VStack>
            <Text
              fontWeight="400"
              fontSize="sm"
              color="col.navy"
              lineHeight="15px"
            >
              Delivery Time
            </Text>
            <Text
              color="col.headtext"
              fontWeight="semibold"
              fontSize="sm"
              lineHeight="18px"
            >
              4.33pm
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default OrderCard;
