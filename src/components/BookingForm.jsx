import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

const horses = [
  { name: "Arabian Horse", value: "arabian" },
  { name: "Friesian Horse", value: "friesian" },
  { name: "Shire Horse", value: "shire" },
  { name: "Fjord Horse", value: "fjord" },
];

const timeSlots = [
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
  "11:00 PM",
];

const MotionBox = motion(Box);

const BookingForm = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    horseType: "",
    date: "",
    timeSlot: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = uuidv4();
    const bookingDetails = {
      ...formData,
      userId,
    };
    Cookies.set(`bookings`, JSON.stringify(bookingDetails), {
      expires: 7,
    });

    toast({
      title: "Booking Confirmed",
      description: "We've received your booking request.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      horseType: "",
      date: "",
      timeSlot: "",
    });
  };

  return (
    <MotionBox
      as="section"
      p={8}
      bg="gray.100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        bg="white"
        p={8}
        boxShadow="md"
        borderRadius="md"
        maxW="md"
        mx="auto"
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Select Horse Type</FormLabel>
              <Select
                name="horseType"
                placeholder="Please Select"
                value={formData.horseType}
                onChange={handleChange}
              >
                {horses.map((horse) => (
                  <option key={horse.value} value={horse.value}>
                    {horse.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Choose a Date</FormLabel>
              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Select Time Slot</FormLabel>
              <Select
                name="timeSlot"
                placeholder="Please Select"
                value={formData.timeSlot}
                onChange={handleChange}
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </Select>
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Book Now
            </Button>
          </Stack>
        </form>
      </Box>
    </MotionBox>
  );
};

export default BookingForm;
