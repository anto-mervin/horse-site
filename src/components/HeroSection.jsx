import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

const HeroSection = () => {
  const naviagate = useNavigate();
  useEffect(() => {
    let userId = Cookies.get("userId");
    if (!userId) {
      userId = uuidv4();
      Cookies.set("userId", userId, { expires: 7 });
    }
  }, []);
  return (
    <Flex
      width={"100vw"}
      as="section"
      minH="70vh"
      display="flex"
      flexDir={{ base: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      bg="gray.100"
      p={8}
    >
      <Stack spacing={6} textAlign="left" maxW="lg" mx="auto" w={"100%"}>
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          color="blackAlpha.800"
        >
          Book Your Ride With Horse From Your Mobile.
        </Heading>
        <Text color="gray.700">
          Enjoy a seamless experience with our website. Choose your ride, select
          your schedule in just a few taps.
        </Text>
        <Button
          colorScheme="blue"
          size="sm"
          width={"150px"}
          h={"50px"}
          onClick={() => {
            naviagate("/booking-form");
          }}
        >
          Book Now
        </Button>
      </Stack>

      <Image
        src="https://i.ibb.co/mXBq9Sp/Horse-Mockup.png"
        alt="Horse through a mobile"
        mt={8}
        boxSize={"300px"}
        objectFit="cover"
      />
    </Flex>
  );
};

export default HeroSection;
