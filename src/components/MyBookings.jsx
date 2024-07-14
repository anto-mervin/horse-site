import React, { useEffect, useState } from "react";
import { Box, Text, Stack, Heading, Divider } from "@chakra-ui/react";
import Cookies from "js-cookie";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const userId = Cookies.get("userId");
    if (userId) {
      const allCookies = Cookies.get();
      const userBookings = Object.keys(allCookies)
        .filter((key) => key.startsWith(`bookings`))
        .map((key) => JSON.parse(allCookies[key]));
      setBookings(userBookings);
      console.log(bookings);
    }
  }, []);

  return (
    <Box p={8}>
      <Heading as="h2" size="lg" mb={4}>
        My Bookings
      </Heading>
      <Divider mb={4} />
      <Stack spacing={4}>
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <Box key={index} p={4} borderWidth={1} borderRadius="md">
              <Text>
                <strong>Name:</strong> {booking.name}
              </Text>
              <Text>
                <strong>Email:</strong> {booking.email}
              </Text>
              <Text>
                <strong>Phone:</strong> {booking.phone}
              </Text>
              <Text>
                <strong>Horse Type:</strong> {booking.horseType}
              </Text>
              <Text>
                <strong>Date:</strong> {booking.date}
              </Text>
              <Text>
                <strong>Time Slot:</strong> {booking.timeSlot}
              </Text>
            </Box>
          ))
        ) : (
          <Text>No bookings found.</Text>
        )}
      </Stack>
    </Box>
  );
};

export default MyBookings;
