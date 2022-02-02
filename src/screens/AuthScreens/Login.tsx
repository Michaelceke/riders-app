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
  Link,
} from "native-base";

import SendMe from "../../../assets/sendmelogo.svg";
import { Ionicons } from "@expo/vector-icons";

interface LoginProps {
  loginHand: () => void;
}

const Login = React.memo(({ navigation, loginHand }: LoginProps) => {
  const [show, setShow] = React.useState(false);
  const handleShowPassword = () => setShow(!show);

  return (
    <Box w="100%" flex={1} backgroundColor="#F6F5F5" px="8" pt="60px">
      <Center mt={12}>
        {/* <SendMe />  */}
        Logo isHere
      </Center>
      <Box mt={16} px="5px">
        <HStack>
          <Text fontWeight="extrabold" fontSize="bx" color="col.default">
            Log
          </Text>
          <VStack>
            <Text
              pl="5px"
              fontWeight="extrabold"
              fontSize="bx"
              color="col.default"
            >
              In
            </Text>
            <Divider borderRadius="4" thickness="5" bg="col.500" />
          </VStack>
        </HStack>
      </Box>

      <VStack space={10} mt={12} mb={8}>
        <Box>
          <Text
            pl="2"
            fontWeight="semibold"
            fontSize="bs"
            lineHeight="19px"
            color="col.greylight"
          >
            Full Name
          </Text>
          <Input
            type="text"
            variant="underlined"
            h={10}
            px="2"
            fontSize="lg"
            fontWeight="semibold"
            lineHeight="23px"
            color="col.default"
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
            Password
          </Text>

          <Input
            type={show ? "text" : "password"}
            variant="underlined"
            h={10}
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

      <Link
        mb="5px"
        _text={{
          color: "col.headtext",
          fontSize: "xs",
          fontWeight: "medium",
          lineHeight: "15.06px",
        }}
        onPress={() => navigation.navigate("Forgot Password")}
      >
        Forgot Password?
      </Link>
      <Link
        mb="70px"
        _text={{
          color: "col.headtext",
          fontSize: "xs",
          fontWeight: "medium",
          lineHeight: "15.06px",
        }}
        onPress={() => navigation.navigate("SignUp")}
      >
        SignUp?
      </Link>
      <Button
        bgColor={"col.500"}
        height="56px"
        borderRadius="12px"
        _text={{
          fontWeight: "semibold",
          fontSize: "lg",
          lineHeight: "22.59px",
        }}
        onPress={() => loginHand()}
      >
        Log In
      </Button>
    </Box>
  );
});

export default Login;
