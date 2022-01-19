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
import Home from "@src/screens/Home";
import DrawerContent from "@src/_shared/libs/DrawerContent";
import { Text } from "native-base";
const Drawer = createDrawerNavigator();
const Home2 = () => {
  return <Text>Heklooo</Text>;
};
const RootNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    screenOptions={{}}
  >
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="In Progress" component={Home2} />
    <Drawer.Screen name="Order History" component={Home2} />
    <Drawer.Screen name="Rider" component={Home2} />
  </Drawer.Navigator>
);

export default RootNavigator;

// {/*drawerContent={props=><DrawerContent {...props} />} screenOptions={{ }}*/}
