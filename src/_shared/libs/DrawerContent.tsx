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
  Drawer,
  Divider,
} from "native-base";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { SvgXml } from "react-native-svg";
import { OrdersBag } from "@src/../assets/IconComponents/OrdersBag";
import { Bicycle } from "@src/../assets/IconComponents/Bicycle";
import { Profile } from "@src/../assets/IconComponents/Profile";
import { Clock } from "@src/../assets/IconComponents/Clock";
import Sendme1 from "@src/../assets/SVG/sendme1.svg";
import { xml } from "@src/../assets/IconComponents/sendme";

import { NavigationContainer } from "@react-navigation/native";

const DrawerContent = (props) => {
  return (
    <Box flex={1}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label={({ color }) => {
            const focused =
              props.state.index ===
              props.state.routes.findIndex((e) => e.name === "Home");
            const textAndIconColor = focused ? "#FF1B03" : "#8F92A1";

            return (
              <HStack space={4}>
                <HStack>
                  <Box w="10px">
                    {focused && (
                      <Divider
                        bg={"#FF1B03"}
                        thickness="5px"
                        height={"30px"}
                        width={"4px"}
                        borderRadius="3px"
                        mr="6px"
                      />
                    )}
                  </Box>
                  <OrdersBag fill={textAndIconColor} />
                </HStack>
                <Text
                  alignSelf="center"
                  color={textAndIconColor}
                  fontWeight="semibold"
                  fontSize="18px"
                  lineHeight="23px"
                >
                  Orders
                </Text>
              </HStack>
            );
          }}
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        />

        <DrawerItem
          label={({ color }) => {
            const focused =
              props.state.index ===
              props.state.routes.findIndex((e) => e.name === "In Progress");
            const textAndIconColor = focused ? "#FF1B03" : "#8F92A1";

            return (
              <HStack space={4}>
                <HStack>
                  <Box w="10px">
                    {focused && (
                      <Divider
                        bg={"#FF1B03"}
                        thickness="5px"
                        height={"30px"}
                        width={"4px"}
                        borderRadius="3px"
                        mr="6px"
                      />
                    )}
                  </Box>
                  <Bicycle fill={textAndIconColor} />
                </HStack>
                <Text
                  alignSelf="center"
                  color={textAndIconColor}
                  fontWeight="semibold"
                  fontSize="18px"
                  lineHeight="23px"
                >
                  In Progress
                </Text>
              </HStack>
            );
          }}
          onPress={() => {
            props.navigation.navigate("In Progress");
          }}
          labelStyle={{ color: "#FF0000" }}
        />

        <DrawerItem
          label={({ color }) => {
            const focused =
              props.state.index ===
              props.state.routes.findIndex((e) => e.name === "Order History");
            const textAndIconColor = focused ? "#FF1B03" : "#8F92A1";

            return (
              <HStack space={4}>
                <HStack>
                  <Box w="10px">
                    {focused && (
                      <Divider
                        bg={"#FF1B03"}
                        thickness="5px"
                        height={"30px"}
                        width={"4px"}
                        borderRadius="3px"
                        mr="6px"
                      />
                    )}
                  </Box>
                  <Clock fill={textAndIconColor} />
                </HStack>
                <Text
                  alignSelf="center"
                  color={textAndIconColor}
                  fontWeight="semibold"
                  fontSize="18px"
                  lineHeight="23px"
                >
                  Order History
                </Text>
              </HStack>
            );
          }}
          onPress={() => {
            props.navigation.navigate("Order History");
          }}
          labelStyle={{ color: "#FF0000" }}
        />

        <DrawerItem
          label={({ color }) => {
            const focused =
              props.state.index ===
              props.state.routes.findIndex((e) => e.name === "Rider");

            const textAndIconColor = focused ? "#FF1B03" : "#8F92A1";

            return (
              <HStack space={4}>
                <HStack>
                  <Box w="10px">
                    {focused && (
                      <Divider
                        bg={"#FF1B03"}
                        thickness="5px"
                        height={"30px"}
                        width={"4px"}
                        borderRadius="3px"
                        mr="6px"
                      />
                    )}
                  </Box>
                  <Profile fill={textAndIconColor} />
                </HStack>
                <Text
                  alignSelf="center"
                  color={textAndIconColor}
                  fontWeight="semibold"
                  fontSize="18px"
                  lineHeight="23px"
                >
                  Rider
                </Text>
              </HStack>
            );
          }}
          onPress={() => {
            props.navigation.navigate("Rider");
          }}
          labelStyle={{ color: "#000000" }}
        />
      </DrawerContentScrollView>
      <HStack mb="10px" ml="30px">
        <Text>Sign Out</Text>
      </HStack>
    </Box>
  );
};

export default DrawerContent;

// <DrawerItem
//           icon={({ focused }) => {
//             let stateColor;
//             stateColor = focused ? "#FFFF00" : "#FFFFFF";
//             return (
//               <HStack>
//                 <Divider
//                   bg={stateColor}
//                   thickness="5px"
//                   height={"30px"}
//                   width={"4px"}
//                   borderRadius="3px"
//                   mr="8px"
//                 />
//                 <OrdersBag fill={stateColor} />
//               </HStack>
//             );
//           }}
//           label="Home3"
//           onPress={() => {
//             props.navigation.navigate("Home3");
//           }}
//           labelStyle={{ color: "blue"}}
//         />
