import React, { Suspense } from "react";
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
  Drawer,
  Divider,
  Button,
} from "native-base";

import OrderCard from "./OrderCard";
interface BatchCardXProps {
  item: any;
}

const BatchCardX: React.FC<BatchCardXProps> = ({ item }) => {
  return (
    <Box w="352">
      <Box
        height="152px"
        mt="3"
        w="98%"
        borderRadius="20px"
        bg="#FBCCC2"
        py="17"
        px="29"
      >
        <VStack space={7}>
          <HStack>
            <Text> Batch 3</Text>
            <Spacer />
            <Text> 30s</Text>
          </HStack>
          <HStack space={10} alignContent="center">
            <HStack>
              <Icon alignSelf="center" />
              <Text alignSelf="center"> 3 orders</Text>
            </HStack>

            <Button
              w="60%"
              alignSelf="flex-end"
              h={"56px"}
              bgColor="col.500"
              borderRadius="12px"
            >
              Confirm Pickup
            </Button>
          </HStack>
        </VStack>

        <HStack>
          <Icon />
        </HStack>
      </Box>
      <Box w="94%" ml="1">
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <React.Fragment key={item}>
              <OrderCard />
            </React.Fragment>
          );
        })}
      </Box>
    </Box>
  );
};

export default BatchCardX;