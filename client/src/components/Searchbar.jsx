import {
  Flex,
  Box,
  Input,
  FormLabel,
  FormControl,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { IoLocation, IoPeople } from "react-icons/io5";
import { SearchIcon } from "@chakra-ui/icons";

const Searchbar = () => {
  return (
    <Box borderRadius={"25px"} boxShadow={"base"} p={4}>
      <Flex
        as={"form"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
      >
        <FormControl display={"flex"} alignItems={"center"} gap={3}>
          <Icon as={IoLocation} color={"teal.300"} w={6} h={6} />
          <Box flexGrow={1}>
            <FormLabel>Location</FormLabel>
            <Input
              name="location"
              type={"text"}
              placeholder="Where are you going?"
            />
          </Box>
        </FormControl>
        <FormControl display={"flex"} alignItems={"center"} gap={3}>
          <Icon as={IoPeople} color={"teal.300"} w={6} h={6} />
          <Box flexGrow={1}>
            <FormLabel>People</FormLabel>
            <Input
              name="people"
              type={"number"}
              placeholder="How many people?"
            />
          </Box>
        </FormControl>
        <IconButton
          alignSelf={"flex-end"}
          w={{
            base: "30%",
            md: "auto",
          }}
          type={"submit"}
          bg={"teal.300"}
          color={"white"}
          aria-label={"Search"}
          icon={<SearchIcon />}
        />
      </Flex>
    </Box>
  );
};

export default Searchbar;
