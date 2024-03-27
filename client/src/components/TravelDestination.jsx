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

const TravelDestination = () => {
  return (
    <SimpleGrid
      templateColumns={{
        sm: "1fr 1fr",
        md: "1fr 1fr 1fr",
        lg: "1fr 1fr 1fr 1fr",
      }}
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
              src="https://cf.bstatic.com/xdata/images/city/600x600/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o="
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              objectFit="cover"
              w={"100%"}
              h={"100%"}
            />
          </AspectRatio>

          <Stack mt="6" spacing="3">
            <Heading size="md">Hà Nội</Heading>

            <Text
              color="blue.600"
              fontWeight={"500"}
              fontSize={{ sm: "sm", md: "md", lg: "lg" }}
            >
              20 destinations
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
              src="https://cf.bstatic.com/xdata/images/city/600x600/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o="
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              objectFit="cover"
              w={"100%"}
              h={"100%"}
            />
          </AspectRatio>
          <Stack mt="6" spacing="3">
            <Heading size="md">Đà Nẵng</Heading>

            <Text
              color="blue.600"
              fontWeight={"500"}
              fontSize={{ sm: "sm", md: "md", lg: "lg" }}
            >
              30 destinations
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
              src="https://cf.bstatic.com/xdata/images/city/600x600/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o="
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              objectFit="cover"
              w={"100%"}
              h={"100%"}
            />
          </AspectRatio>
          <Stack mt="6" spacing="3">
            <Heading size="md">Hồ Chí Minh</Heading>

            <Text
              color="blue.600"
              fontWeight={"500"}
              fontSize={{ sm: "sm", md: "md", lg: "lg" }}
            >
              40 destinations
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
              src="https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o="
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              objectFit="cover"
              w={"100%"}
              h={"100%"}
            />
          </AspectRatio>
          <Stack mt="6" spacing="3">
            <Heading size="md">Đà Lạt</Heading>

            <Text
              color="blue.600"
              fontWeight={"500"}
              fontSize={{ sm: "sm", md: "md", lg: "lg" }}
            >
              50 destinations
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default TravelDestination;
