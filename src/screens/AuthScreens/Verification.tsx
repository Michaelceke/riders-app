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
} from "native-base";

import SendMe from "../../../assets/sendmelogo.svg";

const Verification = () => {
  return (
    <Box w="100%" flex={1} backgroundColor="#F6F5F5" px="8" pt="60px">
      <Center mt={12}>
        {/* <SendMe />  */}
        Logo isHere
      </Center>
      <Box mt={16}>
        <HStack>
          <Text fontWeight="extrabold" fontSize="bx" color="col.default">
            Verifica
          </Text>
          <VStack>
            <Text fontWeight="extrabold" fontSize="bx" color="col.default">
              tion
            </Text>
            <Divider borderRadius="4" thickness="5" bg="col.500" />
          </VStack>
        </HStack>
        <Text
          mt={4}
          fontWeight={400}
          fontSize="bs"
          color="col.greybold"
          lineHeight="19px"
        >
          Enter verifcation code sent to you by the fulfillment center agent
        </Text>
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
            Enter Code
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
        Verify Code
      </Button>
    </Box>
  );
};

export default Verification;
