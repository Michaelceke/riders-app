import React from "react";
import {
  Text,
  Box,
  VStack,
  HStack,
  Divider,
  Button,
  Center,
  Input,
  IconButton,
} from "native-base";

import SendMe from "../../../assets/sendmelogo.svg";
import { Ionicons } from "@expo/vector-icons";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleShowPassword = () => setShow(!show);

  return (
    <Box w="100%" flex={1} backgroundColor="#F6F5F5" px="8" pt="60px">
      <Center mt={12}>
        {/* <SendMe />  */}
        Logo isHere
      </Center>
      <Box mt={16}>
        <HStack>
          <Text fontWeight="extrabold" fontSize="bx" color="col.default">
            Reset passw
          </Text>
          <VStack>
            <Text fontWeight="extrabold" fontSize="bx" color="col.default">
              ord
            </Text>
            <Divider borderRadius="4" thickness="5" bg="col.500" />
          </VStack>
        </HStack>
      </Box>

      <VStack space={10} mt={12} mb={24}>
        <Box>
          <Text
            pl="2"
            fontWeight="semibold"
            fontSize="bs"
            lineHeight="19px"
            color="col.greylight"
          >
            Create New password
          </Text>

          <Input
            type={show ? "text" : "password"}
            variant="underlined"
            h={8}
            px="2"
            fontSize="lg"
            fontWeight="semibold"
            lineHeight="23px"
            color="col.default"
            InputRightElement={
              <IconButton
                size="xs"
                rounded="none"
                w="1/6"
                h="full"
                _icon={{
                  as: Ionicons,
                  name: show ? "eye-outline" : "ios-eye-off-outline",
                  color: "#8f92A1",
                  size: "sm",
                }}
                onPress={handleShowPassword}
              />
            }
          />
        </Box>

        <Box>
          <Text
            pl="2"
            fontWeight="semibold"
            fontSize="bs"
            lineHeight="19px"
            color="col.greylight"
          >
            Confirm New Password
          </Text>

          <Input
            type={show ? "text" : "password"}
            variant="underlined"
            h={8}
            px="2"
            fontSize="lg"
            fontWeight="semibold"
            lineHeight="23px"
            color="col.default"
            InputRightElement={
              <IconButton
                size="xs"
                rounded="none"
                w="1/6"
                h="full"
                _icon={{
                  as: Ionicons,
                  name: show ? "eye-outline" : "ios-eye-off-outline",
                  color: "#8f92A1",
                  size: "sm",
                }}
                onPress={handleShowPassword}
              />
            }
          />
        </Box>
      </VStack>
      <Button
        bgColor={"col.500"}
        height="56px"
        borderRadius="12px"
        _text={{
          fontWeight: "semibold",
          fontSize: "lg",
          lineHeight: "22.59px",
        }}
      >
        Reset Password
      </Button>
    </Box>
  );
};

export default Login;
