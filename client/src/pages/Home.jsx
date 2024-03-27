import Banner from "../components/Banner";
import Container from "../components/Container";
import Testimonials from "../components/Testimonials";
import TourList from "../components/TourList";
import TravelDestination from "../components/TravelDestination";

const Home = () => {
  return (
    <Container>
      <Banner />
      <TravelDestination />
      <TourList title="Popular Tours" />
      <Testimonials />
    </Container>
  );
};

export default Home;
