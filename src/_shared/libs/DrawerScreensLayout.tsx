import React, { ReactChild, ReactNode } from "react";
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
  IconButton,
} from "native-base";
import NativeBaseIcon from "@src/components/NativeBaseIcon";

import { DashMenu } from "@src/../assets/IconComponents/DashMenu";

interface DrawerScreensLayoutprops {
  children: ReactNode;
  navigation: any;
  handleIsOnline?: () => void;
  headerText: string;
}

export const DrawerScreensLayout = ({
  children,
  navigation,
  handleIsOnline,
  headerText,
}: DrawerScreensLayoutprops) => {
  return (
    <Box flex={1} safeArea mx={3}>
      <VStack mb={6} space={1}>
        <IconButton
          icon={<DashMenu fill={"#596273"} />}
          onPress={() => navigation.toggleDrawer()}
        />
        <HStack>
          <Text
            fontWeight="bold"
            color="col.default"
            fontSize="27px"
            lineHeight="34px"
          >
            {headerText}
          </Text>
          <Spacer />
          <VStack>
            <Switch
              defaultIsChecked={false}
              offTrackColor="col.400"
              onTrackColor="col.800"
              onThumbColor="col.500"
              offThumbColor="col.white"
              onChange={handleIsOnline}
            />
            <Text fontSize="xs" lineHeight="15.06px" color="col.greylight">
              OFFLINE
            </Text>
          </VStack>
        </HStack>
        <Text>See all your orders here</Text>
      </VStack>
      <Text>NEW ORDER</Text>
      <Box>{children}</Box>
    </Box>
  );
};
