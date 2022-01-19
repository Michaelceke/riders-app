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
  Divider,
  ScrollView,
  Checkbox,
} from "native-base";
import { Linking, Platform } from "react-native";

import { Entypo, SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import OrderDetail from "../../../_shared/libs/OrderDetail";

interface OrderDeliveredProps {
  item: any;
}

const OrderDelivered: React.FC<OrderDeliveredProps> = ({ item }) => {
  const [groupValues, setGroupValues] = React.useState([]);
  const [bg, setBg] = React.useState("#E8E8E8");

  return (
    <ScrollView flex={1} width="100%" mt="60px">
      <VStack px="40px">
        <OrderDetail item={{}} />
      </VStack>
      <Divider
        borderStyle="dashed"
        height="0"
        borderWidth="1"
        bgColor="col.white"
        borderColor="col.broken-border"
        my="12px"
      />
      <VStack px="40px" space={2}>
        <Text color="col.headtext" fontSize="15px" lineHeight="19px">
          SELECT PAYMENT METHOD
        </Text>
        <Text color="col.navy" fontSize="13px" lineHeight="16px">
          kindly confirm method of payment used by customer
        </Text>
        <Checkbox.Group
          onChange={setGroupValues}
          //   onChange={(state) => {
          //     if (state) {
          //       setBg("#FF1B03");
          //     } else {
          //       setBg("#FF1B03");
          //     }
          //   }}
          value={groupValues}
          accessibilityLabel="choose payment method"
        >
          <Checkbox
            value="one"
            my={4}
            _text={{
              color: "col.headtext",
              fontWeight: "semibold",
              fontSize: "15px",
              lineHeight: "19px",
            }}
          >
            Cash
          </Checkbox>
          <Checkbox
            value="two"
            _text={{
              color: "col.headtext",
              fontWeight: "semibold",
              fontSize: "15px",
              lineHeight: "19px",
            }}
          >
            Transfer
          </Checkbox>
        </Checkbox.Group>
        <VStack mt={4} space={6}>
          <Text color="col.900" fontSize="15px" lineHeight="16px">
            BANK DETAILS
          </Text>
          <HStack>
            <Text
              color="col.900"
              fontWeight="semibold"
              fontSize="15px"
              lineHeight="19px"
            >
              Bank Name:{"  "}
            </Text>
            <Text
              color="col.900"
              fontWeight="semibold"
              fontSize="15px"
              lineHeight="19px"
            >
              First Bank
            </Text>
          </HStack>
          <HStack>
            <Text
              color="col.900"
              fontWeight="semibold"
              fontSize="15px"
              lineHeight="19px"
            >
              Account Holder's Name:{"  "}{" "}
            </Text>
            <Text
              color="col.900"
              fontWeight="semibold"
              fontSize="15px"
              lineHeight="19px"
            >
              Sendme
            </Text>
          </HStack>
          <HStack>
            <Text
              color="col.900"
              fontWeight="semibold"
              fontSize="15px"
              lineHeight="19px"
            >
              Account Number:{"  "}{" "}
            </Text>
            <Text
              color="col.900"
              fontWeight="semibold"
              fontSize="15px"
              lineHeight="19px"
            >
              0901283930
            </Text>
          </HStack>
        </VStack>
        <Button
          borderRadius="12"
          height="56px"
          my="40px"
          bg="col.500"
          _text={{ color: "col.white", fontWeight: "semibold", fontSize: "lg" }}
        >
          I Have Arrived
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default OrderDelivered;
