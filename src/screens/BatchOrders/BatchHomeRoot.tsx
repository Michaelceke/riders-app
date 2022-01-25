import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, Box, VStack, Icon, Spacer, Button, HStack } from "native-base";
import BatchOrdersScreen from "./BatchOrdersScreen";
import MapScreen from "./MapScreens";

const Stack = createStackNavigator();

const BatchHomeRoot = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeScreen"
        component={BatchOrdersScreen}
        options={{ animationEnabled: true }}
      />
      <Stack.Screen
        name="view map"
        component={MapScreen}
        options={{ animationEnabled: true }}
      />
    </Stack.Navigator>
  );
};

export default BatchHomeRoot;
