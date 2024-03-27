"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Icon,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { CgBee } from "react-icons/cg";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg="gray.50" color="gray.700">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Flex
              color={"teal.300"}
              as={"a"}
              alignItems={"center"}
              cursor={"pointer"}
              href="#"
            >
              <Icon as={CgBee} w={10} h={10} mr="10px" />
              <Text as="b" fontSize={"20px"}>
                Bee Travel
              </Text>
            </Flex>
            <Text fontSize={"sm"}>
              © 2022 Chakra Templates. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <IconButton
                isRound={true}
                variant="ghost"
                colorScheme="teal"
                aria-label="Done"
                fontSize="20px"
                icon={<FaInstagram />}
              />
              <IconButton
                isRound={true}
                variant="ghost"
                colorScheme="teal"
                aria-label="Done"
                fontSize="20px"
                icon={<FaYoutube />}
              />
              <IconButton
                isRound={true}
                variant="ghost"
                colorScheme="teal"
                aria-label="Done"
                fontSize="20px"
                icon={<FaTwitter />}
              />
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={"#"}>
              About us
            </Box>
            <Box as="a" href={"#"}>
              Blog
            </Box>
            <Box as="a" href={"#"}>
              Contact us
            </Box>
            <Box as="a" href={"#"}>
              Pricing
            </Box>
            <Box as="a" href={"#"}>
              Testimonials
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={"#"}>
              Help Center
            </Box>
            <Box as="a" href={"#"}>
              Terms of Service
            </Box>
            <Box as="a" href={"#"}>
              Legal
            </Box>
            <Box as="a" href={"#"}>
              Privacy Policy
            </Box>
            <Box as="a" href={"#"}>
              Satus
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg="blackAlpha.100"
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg="teal.400"
                color="white"
                _hover={{
                  bg: "teal.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
