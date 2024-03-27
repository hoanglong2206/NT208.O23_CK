import { Stack, SimpleGrid, Heading } from "@chakra-ui/react";
import TourCard from "./TourCard";
import tourImg2 from "../assets/tour-img02.jpg";
import tourImg3 from "../assets/tour-img03.jpg";

const data = [
  {
    imageURL: tourImg2,
    name: "Wayfarer Classic",
    price: 129.99,
    rating: 4.2,
    location: "San Francisco, CA",
    numReviews: 34,
  },
  {
    imageURL: tourImg3,
    name: "Polarized Classic",
    price: 229.99,
    rating: 4.8,
    location: "Beverly Hills, CA",
    numReviews: 89,
  },
];

const TourList = ({ title }) => {
  return (
    <Stack spacing={8} py={8}>
      <Heading size="lg">{title}</Heading>
      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 4 }}
        spacing={4}
        justifyContent="center"
      >
        {data.map((tour, index) => (
          <TourCard key={index} data={tour} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default TourList;
