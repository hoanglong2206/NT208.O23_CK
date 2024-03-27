import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  Box,
  Image,
} from "@chakra-ui/react";

export default function Banner() {
  return (
    <Box
      position={"relative"}
      mb={4}
      borderRadius={"md"}
      bgGradient={"linear(to-r, blue.200, teal.500)"}
    >
      <Flex mx={"auto"} alignItems={"center"} justifyContent={"space-evenly"}>
        <Stack spacing={4} align={"center"} justify={"center"} p={8}>
          <VStack spacing={2} fontWeight={"500"}>
            <Text fontSize={"4xl"}>Welcome to Bee Travel</Text>
            <Text fontSize={"lg"}>The best place to find your next book</Text>
            <Text fontSize={"xl"}>GET 50% OFF</Text>
          </VStack>
          <Button
            colorScheme={"teal"}
            bg={"blue.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "blue.500",
            }}
          >
            Get started
          </Button>
        </Stack>
        <Stack>
          <Image
            src="https://q-xx.bstatic.com/xdata/images/xphoto/300x300/316543397.png?k=c42a7cb04035fb44ee49b1f539e6b2bfb745955a8fe8df2db662c938077cd021&o="
            alt="banner"
            objectFit="cover"
            width="100%"
            height="100%"
            borderRadius={"md"}
          />
        </Stack>
      </Flex>
    </Box>
  );
}
