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

const SignUp = () => {
  const [show, setShow] = React.useState(false);
  const handleShowPassword = () => setShow(!show);
  return (
    <Box w="100%" flex={1} backgroundColor="#F6F5F5" px="8" pt="10px">
      <Center mt={10}>
        {/* <SendMe />  */}
        Logo isHere
      </Center>
      <Box mt={3}>
        <HStack>
          <Text fontWeight="extrabold" fontSize="bx" color="col.default">
            Sign
          </Text>
          <VStack>
            <Text
              pl="5px"
              fontWeight="extrabold"
              fontSize="bx"
              color="col.default"
            >
              Up
            </Text>
            <Divider borderRadius="4" thickness="5" bg="col.500" />
          </VStack>
        </HStack>
        <Text mt={4} fontSize="bs" color="col.greybold" lineHeight="19px">
          Confirm your details and create password
        </Text>
      </Box>

      <VStack space={4} mt={10} mb={12}>
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
            Mobile Number
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
            Email Address
          </Text>

          <Input
            type="email"
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
            Create Password
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

        <Box>
          <Text
            pl="2"
            fontWeight="semibold"
            fontSize="bs"
            lineHeight="19px"
            color="col.greylight"
          >
            Confirm Password
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
        Done & Confirm
      </Button>
    </Box>
  );
};

export default SignUp;
