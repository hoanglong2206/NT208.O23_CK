import { Stack } from "@chakra-ui/react";

const Container = ({ children }) => {
  return (
    <Stack
      width="full"
      maxWidth="1920px"
      mx="auto"
      px={{ base: "20px", md: "40px", xl: "80px" }}
      pt="10px"
      pb="40px"
      spacing={8}
    >
      {children}
    </Stack>
  );
};

export default Container;
