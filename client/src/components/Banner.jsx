import {
  Flex,
  Text,
  VStack,
  Box,
  HStack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import tourImg1 from "../assets/tour-img01.jpg";
import heroImg1 from "../assets/hero-img01.jpg";
import heroImg2 from "../assets/hero-img02.jpg";
import Searchbar from "./Searchbar";

export default function Banner() {
  return (
    <Box position={"relative"} mb={4} borderRadius={"md"}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacingY={4}>
        <VStack spacing={4} align={"start"} justify={"center"} p={8}>
          <Flex
            spacing={2}
            fontWeight={"500"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box
              bg={"teal.300"}
              p={4}
              borderRadius={40}
              align={"center"}
              justify={"center"}
            >
              <Text fontSize={"2xl"}>Welcome to Bee Travel</Text>
            </Box>
          </Flex>
          <Text fontSize={"2xl"} fontWeight={"600"}>
            Traveling opens up a world of possibilities. Where will you go next?
          </Text>
          <Text fontSize={"lg"} color={"gray.500"}>
            Discover the best tours and travel packages with Bee Travel.
          </Text>
        </VStack>
        <HStack w={"100%"} spacing={4} align={"center"} justify={"center"}>
          <Image
            src={tourImg1}
            objectFit={"cover"}
            w={{
              base: "120px",
              md: "170px",
              lg: "150px",
            }}
            h={[280, 350]}
            borderRadius={20}
          />
          <Image
            src={heroImg1}
            objectFit={"cover"}
            w={{
              base: "120px",
              md: "170px",
              lg: "150px",
            }}
            h={[280, 350]}
            borderRadius={20}
            mt={10}
          />
          <Image
            src={heroImg2}
            objectFit={"cover"}
            w={{
              base: "120px",
              md: "170px",
              lg: "150px",
            }}
            h={[280, 350]}
            borderRadius={20}
            mt={20}
          />
        </HStack>
        <Searchbar />
      </SimpleGrid>
    </Box>
  );
}
