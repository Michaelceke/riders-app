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
import Home from "@src/screens/Home";
import DrawerContent from "@src/_shared/libs/DrawerContent";
import { Text, Box, VStack, Icon, Spacer, Button, HStack } from "native-base";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
import Login from "../screens/AuthScreens/Login";
import ForgotPassword from "../screens/AuthScreens/ForgotPassword";

const Home2 = () => {
  return <Text>Hellooo mikel</Text>;
};

const DrawerNavigatorRoot = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="In Progress" component={Home2} />
        <Drawer.Screen name="Order History" component={Home2} />
        <Drawer.Screen name="Rider" component={Home2} />
      </>
    </Drawer.Navigator>
  );
};

const RootNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

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
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ animationEnabled: true }}
          />
          <Stack.Screen
            name="Forgot Password"
            component={ForgotPassword}
            options={{ animationEnabled: true }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
