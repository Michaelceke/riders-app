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
  Link,
} from "native-base";
import { Entypo, SimpleLineIcons, AntDesign } from "@expo/vector-icons";

interface OrderDetailProps {
  item: any;
}

const OrderDetail: React.FC<OrderDetailProps> = ({ item }) => {
  const [isDelivered] = React.useState(true);
  return (
    <VStack width="100%">
      <HStack>
        <HStack space={4}>
          <Icon />
          <Text
            fontWeight="bold"
            fontSize="xl"
            color="col.greybold"
            lineHeight="25px"
          >
            Order 1
          </Text>
        </HStack>
        <Spacer />
        <Badge
          borderRadius="18.3546px"
          alignSelf="center"
          py="4px"
          px="10px"
          bg={
            isDelivered
              ? "rgba(255, 227, 205, 0.58)"
              : "rgba(255, 227, 205, 0.58)"
          }
          _text={{
            color: isDelivered ? "col_badge.200" : "col_badge.300",
            fontSize: "xs",
            lineHeight: "16.34px",
          }}
        >
          {isDelivered ? "Arrived" : "In Progress"}
        </Badge>
      </HStack>
      <VStack space={6} mt='8'>
        <Box
          _text={{
            fontSize: "md",
            color: "col.headtext",
            lineHeight: "19px",
          }}
        >
          DETAILS
        </Box>
        <HStack>
          <Text w="40%" fontSize="sm" lineHeight="16px" color="col.navy">
            Name
          </Text>
          <Text
            fontSize="md"
            lineHeight="19px"
            color="col.headtext"
            fontWeight="semibold"
          >
            Ajayi Bunmi
          </Text>
        </HStack>

        <HStack>
          <Text w="40%" fontSize="sm" lineHeight="16px" color="col.navy">
            Address
          </Text>
          <Box>
            <Text
              fontSize="md"
              lineHeight="19px"
              color="col.headtext"
              fontWeight="semibold"
            >
              No 26, Alaakia Road Bodija
            </Text>
            <HStack mt={2}>
              <Icon />
              <Link href="https://nativebase.io" _text={{ fontSize: "15px", color: "col.500" }}>
                View on map
              </Link>
            </HStack>
          </Box>
        </HStack>

        <HStack>
          <Text w="40%" fontSize="sm" lineHeight="16px" color="col.navy">
            Order Items
          </Text>
          <VStack space={4}>
            <VStack space={2}>
              <Text
                fontSize="md"
                lineHeight="19px"
                color="col.headtext"
                fontWeight="semibold"
              >
                Boneless Beef
              </Text>
              <HStack space={4}>
                <Text fontSize="md" lineHeight="16px" color="col.navy">
                  2pieces
                </Text>
                <Text fontSize="md" lineHeight="16px" color="col.navy">
                  2kg
                </Text>
              </HStack>
            </VStack>

            <VStack space={2}>
              <Text
                fontSize="md"
                lineHeight="19px"
                color="col.headtext"
                fontWeight="semibold"
              >
                Ponmo
              </Text>
              <HStack space={4}>
                <Text fontSize="md" lineHeight="16px" color="col.navy">
                  2pieces
                </Text>
                <Text fontSize="md" lineHeight="16px" color="col.navy">
                  1kg
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </HStack>
        <HStack>
          <Text w="40%" fontSize="sm" lineHeight="16px" color="col.navy">
            Total Price
          </Text>
          <Text
            fontSize="md"
            lineHeight="19px"
            color="col.headtext"
            fontWeight="semibold"
          >
            #10,000
          </Text>
        </HStack>
        <HStack>
          <Text w="40%" fontSize="sm" lineHeight="16px" color="col.navy">
            Payment Status
          </Text>
          <Text
            fontSize="md"
            lineHeight="19px"
            color="col.headtext"
            fontWeight="semibold"
          >
            Paid
          </Text>
        </HStack>
        <HStack>
          <Text w="40%" fontSize="sm" lineHeight="16px" color="col.navy">
            Payment Mode
          </Text>
          <Text
            fontSize="md"
            lineHeight="19px"
            color="col.headtext"
            fontWeight="semibold"
          >
            Cash
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default OrderDetail;
