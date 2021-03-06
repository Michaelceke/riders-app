// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from '@src/screens/Home';

// const Stack = createStackNavigator();

// const RootNavigator = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="Home" component={Home} />
//   </Stack.Navigator>
// );

// export default RootNavigator;

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import BatchHomeRoot from "./BatchOrders/BatchHomeRoot";
import DrawerContent from "@src/_shared/libs/DrawerContent";
import { Text, Box, VStack, Icon, Spacer, Button, HStack } from "native-base";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
import Login from "../screens/AuthScreens/Login";
import ForgotPassword from "../screens/AuthScreens/ForgotPassword";
import ResetPassword from "../screens/AuthScreens/ResetPassword";
import SignUp from "../screens/AuthScreens/SignUp";
import Verification from "../screens/AuthScreens/Verification";

const Home2 = () => {
  return <Text>Hellooo mikel</Text>;
};

const DrawerNavigatorRoot = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <>
        <Drawer.Screen name="BatchHomeRoot" component={BatchHomeRoot} />
        <Drawer.Screen name="In Progress" component={Home2} />
        <Drawer.Screen name="Order History" component={Home2} />
        <Drawer.Screen name="Rider" component={Home2} />
      </>
    </Drawer.Navigator>
  );
};

const RootNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="DrawerNavigatorRoot"
            component={DrawerNavigatorRoot}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" options={{ animationEnabled: true }}>
            {(props) => <Login {...props} loginHand={loginHandler} />}
          </Stack.Screen>
          <Stack.Screen
            name="Forgot Password"
            component={ForgotPassword}
            options={{ animationEnabled: true }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ animationEnabled: true }}
          />
          <Stack.Screen
            name="Reset Password"
            component={ResetPassword}
            options={{ animationEnabled: true }}
          />
          <Stack.Screen
            name="Verification"
            component={Verification}
            options={{ animationEnabled: true }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
