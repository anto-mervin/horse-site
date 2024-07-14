import React from "react";
import {
  Box,
  Flex,
  Link,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="blue.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Flex alignItems="center">
          <RouterLink to="/">
            <Link
              px={2}
              py={1}
              rounded="md"
              _hover={{ textDecoration: "none", bg: "blue.400" }}
              color="white"
            >
              Horse Ride
            </Link>
          </RouterLink>
        </Flex>
        <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
          <RouterLink to="/booking-form">
            <Link
              px={2}
              py={1}
              rounded="md"
              _hover={{ textDecoration: "none", bg: "blue.400" }}
              color="white"
            >
              Booking Form
            </Link>
          </RouterLink>
          <RouterLink to="/my-bookings">
            <Link
              px={2}
              py={1}
              rounded="md"
              _hover={{ textDecoration: "none", bg: "blue.400" }}
              color="white"
            >
              My Bookings
            </Link>
          </RouterLink>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <RouterLink to="/">
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none", bg: "blue.400" }}
                color="white"
                onClick={onClose}
              >
                Home
              </Link>
            </RouterLink>

            <RouterLink to="/booking-form">
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none", bg: "blue.400" }}
                color="white"
                onClick={onClose}
              >
                Booking Form
              </Link>
            </RouterLink>
            <RouterLink to="/my-bookings">
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none", bg: "blue.400" }}
                color="white"
                onClick={onClose}
              >
                My Bookings
              </Link>
            </RouterLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
