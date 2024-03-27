import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirm-password"),
    });
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg="gray.50">
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up for an account
          </Heading>
        </Stack>
        <Box
          onSubmit={handleSubmit}
          as="form"
          rounded={"lg"}
          bg="white"
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input name="firstName" type="text" />
              </FormControl>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input name="lastName" type="text" />
              </FormControl>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input name="email" type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement pr={1}>
                  <Button
                    h="1.75rem"
                    size="sm"
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="confirm-password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  name="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                />
                <InputRightElement pr={1}>
                  <Button
                    h="1.75rem"
                    size="sm"
                    variant={"ghost"}
                    onClick={() =>
                      setShowConfirmPassword(
                        (showConfirmPassword) => !showConfirmPassword
                      )
                    }
                  >
                    {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                type="submit"
                size="lg"
                bg={"teal.400"}
                color={"white"}
                _hover={{
                  bg: "teal.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Text
              align={"center"}
              display={"flex"}
              justifyContent={"center"}
              gap={2}
            >
              Already have an account?
              <Text
                cursor={"pointer"}
                color={"teal.400"}
                as={"b"}
                _hover={{ color: "teal.500" }}
                onClick={() => navigate("/login")}
              >
                Sign in
              </Text>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
