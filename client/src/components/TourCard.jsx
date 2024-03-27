"use client";

import {
  Flex,
  Box,
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Icon,
  Button,
  AspectRatio,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";

function TourCard({ data }) {
  return (
    <Card>
      <CardHeader>
        <AspectRatio ratio={4 / 3}>
          <Image
            src={data.imageURL}
            alt={data.name}
            objectFit="cover"
            h={"100%"}
            w={"100%"}
          />
        </AspectRatio>
      </CardHeader>
      <CardBody py={0}>
        <Flex alignItems={"center"} gap={2}>
          <Icon as={IoLocation} color={"teal.300"} w={6} h={6} />
          <Box as="span" fontSize="sm" color="gray.500">
            {data.location}
          </Box>
        </Flex>
        <Flex justifyContent="space-between" mt={2}>
          <Box fontWeight="bold" fontSize="lg">
            {data.name}
          </Box>
          <Box as="span" fontSize="lg" fontWeight="bold">
            ${data.price}
          </Box>
        </Flex>
        <Flex alignItems="center" mt={2}>
          {[...Array(5)].map((_, index) => {
            const rating = data.rating - index;
            if (rating >= 1) {
              return <Icon key={index} as={BsStarFill} color="yellow.300" />;
            }
            if (rating >= 0.5) {
              return <Icon key={index} as={BsStarHalf} color="yellow.300" />;
            }
            return <Icon key={index} as={BsStar} color="yellow.300" />;
          })}
          <Box as="span" ml={2} color="gray.600">
            {data.numReviews} reviews
          </Box>
        </Flex>
      </CardBody>
      <CardFooter>
        <Button
          w="100%"
          colorScheme="teal"
          variant="solid"
          size="md"
          mt={2}
          mb={2}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}

export default TourCard;
