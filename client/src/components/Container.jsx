import { Box } from "@chakra-ui/react";

const Container = ({ children }) => {
  return (
    <Box
      width="full"
      maxWidth="1920px"
      mx="auto"
      px={{ base: "20px", md: "40px", xl: "80px" }}
      pt="10px"
      pb="40px"
    >
      {children}
    </Box>
  );
};

export default Container;
