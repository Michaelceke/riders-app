import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  Box,
  Button,
  Spacer,
  Icon,
} from "native-base";
import NativeBaseIcon from "@src/components/NativeBaseIcon";
import { DrawerScreensLayout } from "@src/_shared/libs/DrawerScreensLayout";
import { DashMenu } from "@src/../assets/IconComponents/DashMenu";
import { Offline } from "@src/../assets/IconComponents/Offline";

//test imports auth screens
import Login from "./AuthScreens/Login";
import SignUp from "./AuthScreens/SignUp";
import Verification from "./AuthScreens/Verification";
import OrderDetail from "@src/_shared/libs/OrderDetail";
import OrderStartsArrived from "./Orders/OrderStartsArrived";
import OrderDelivered from "./Orders/OrderDelivered";
import MapScreen from "./Orders/MapScreens";
import BatchCardX from "@src/_shared/libs/BatchCardX";
import OrderCard from "@src/_shared/libs/OrderCard";
import BatchCardXList from "@src/_shared/libs/BatchCardXList";

export default function BatchOrdersScreen({ navigation }) {
  const [isOnline, setIsOnline] = React.useState(false);
  // const navigator=()=>{
  //   navigation.toggleDrawer()
  // }
  const handleIsOnline = () => {
    setIsOnline(!isOnline);
  };

  return (
    <DrawerScreensLayout
      navigation={navigation}
      handleIsOnline={handleIsOnline}
      headerText="Orders"
    >
      {isOnline ? (
        <BatchCardXList />
      ) : (
        <Center mt="200px" alignItems="center">
          <Offline fill="#000000" />
          <Text>{isOnline.toString()}</Text>
        </Center>
      )}
    </DrawerScreensLayout>
  );
}
