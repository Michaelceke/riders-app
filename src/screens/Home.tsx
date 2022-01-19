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
} from "native-base";
import NativeBaseIcon from "@src/components/NativeBaseIcon";

//test imports auth screens
import Login from "./AuthScreens/Login";
import SignUp from "./AuthScreens/SignUp";
import Verification from "./AuthScreens/Verification";
import OrderDetail from "@src/_shared/libs/OrderDetail";
import OrderStartsArrived from "./Orders/OrderStartsArrived";
import OrderDelivered from "./Orders/OrderDelivered";
import MapScreen from "./MapScreens";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function Home() {
  return (
    <>
      {/* <Center
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: 'blueGray.50' }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">Welcome to NativeBase</Heading>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Code>App.tsx</Code>
            <Text>and save to reload.</Text>
          </HStack>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize="xl">
              Learn NativeBase
            </Text>
          </Link>
          <ToggleDarkMode />
        </VStack>
      </Center> */}
      {/* <Login /> */}
      {/* <Verification /> */}
      {/* <OrderDetail item={{}}/> */}
      {/* <OrderStartsArrived item={{}}/> */}
      {/* <OrderDelivered item={{}}/> */}
      <MapScreen />
    </>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
