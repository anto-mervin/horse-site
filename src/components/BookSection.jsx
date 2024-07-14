import React from "react";
import { Box, Heading, Text, SimpleGrid, Image, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const horses = [
  {
    name: "Arabian Horse",
    price: "$3/hr",
    image: "https://i.ibb.co/NyBc3qT/arab.jpg",
    isNew: true,
  },
  {
    name: "Friesian Horse",
    price: "$2/hr",
    image: "https://i.ibb.co/8Kshz7P/friesian.jpg",
  },
  {
    name: "Shire Horse",
    price: "$6/hr",
    image: "https://i.ibb.co/4ssSdhM/sh.jpg",
  },
  {
    name: "Fjord Horse",
    price: "$4/hr",
    image: "https://i.ibb.co/mtjW6QS/fjord.jpg",
  },
];

const MotionBox = motion(Box);
const BookSection = () => {
  const naviagate = useNavigate();
  return (
    <Box as="section" px={8} py={4} bg="gray.100">
      <Stack spacing={6} textAlign="center" maxW="lg" mx="auto" mb={8}>
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          color="blackAlpha.800"
        >
          Book Your Ride
        </Heading>
        <Text color="gray.700">
          Experience the thrill of horse riding with ease! Book your ride now
          and enjoy scenic trails, professional guides, and unforgettable
          memories. Perfect for all skill levels. Reserve your spot today!
        </Text>
      </Stack>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
        {horses.map((horse, index) => (
          <MotionBox
            key={index}
            bg="white"
            boxShadow="md"
            borderRadius="md"
            overflow="hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => {
              naviagate("/booking-form");
            }}
          >
            <Image
              src={horse.image}
              alt={horse.name}
              width={"100%"}
              height={"200px"}
              objectFit="cover"
            />
            <Box p={4}>
              <Text fontWeight="bold">{horse.name}</Text>
              <Text>{horse.price}</Text>
              {horse.isNew && (
                <Text fontSize="sm" color="blue.500" mt={2}>
                  New
                </Text>
              )}
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default BookSection;
