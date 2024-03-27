import {
  Stack,
  Heading,
  Card,
  CardBody,
  SimpleGrid,
  Text,
  Image,
  AspectRatio,
} from "@chakra-ui/react";

const CardCategories = () => {
  return (
    <SimpleGrid
      templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
      spacing={8}
    >
      <Card>
        <CardBody>
          <AspectRatio
            ratio={4 / 3}
            transition={"0.2s"}
            cursor={"pointer"}
            _hover={{
              opacity: "0.9",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              objectFit="cover"
              w={"100%"}
              h={"100%"}
            />
          </AspectRatio>

          <Stack mt="6" spacing="3">
            <Heading size="md">Hotels</Heading>

            <Text color="blue.600" fontSize="2xl">
              120 hotels
            </Text>
          </Stack>
        </CardBody>
      </Card>
      <Card cursor={"pointer"}>
        <CardBody>
          <AspectRatio
            ratio={4 / 3}
            transition={"0.2s"}
            cursor={"pointer"}
            _hover={{
              opacity: "0.9",
            }}
          >
            <Image
              src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              objectFit="cover"
              w={"100%"}
              h={"100%"}
            />
          </AspectRatio>
          <Stack mt="6" spacing="3">
            <Heading size="md">Hotels</Heading>

            <Text color="blue.600" fontSize="2xl">
              120 hotels
            </Text>
          </Stack>
        </CardBody>
      </Card>
      <Card cursor={"pointer"}>
        <CardBody>
          <AspectRatio
            ratio={4 / 3}
            transition={"0.2s"}
            cursor={"pointer"}
            _hover={{
              opacity: "0.9",
            }}
          >
            <Image
              src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              objectFit="cover"
              w={"100%"}
              h={"100%"}
            />
          </AspectRatio>
          <Stack mt="6" spacing="3">
            <Heading size="md">Hotels</Heading>

            <Text color="blue.600" fontSize="2xl">
              120 hotels
            </Text>
          </Stack>
        </CardBody>
      </Card>
      <Card cursor={"pointer"}>
        <CardBody>
          <AspectRatio
            ratio={4 / 3}
            transition={"0.2s"}
            cursor={"pointer"}
            _hover={{
              opacity: "0.9",
            }}
          >
            <Image
              src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              objectFit="cover"
              w={"100%"}
              h={"100%"}
            />
          </AspectRatio>
          <Stack mt="6" spacing="3">
            <Heading size="md">Hotels</Heading>

            <Text color="blue.600" fontSize="2xl">
              120 hotels
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default CardCategories;
