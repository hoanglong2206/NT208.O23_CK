import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import customAxios from "../config/customAxios";
import { useSelector } from "react-redux";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const passwordConfirm = formData.get("confirm-password");

      const response = await customAxios.post("/user/signup", {
        name,
        email,
        password,
        passwordConfirm,
      });

      if (response.data.status === "success") {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const checkIsLoggedIn = () => {
      if (user.token) {
        navigate("/");
      }
    };
    checkIsLoggedIn();

    return () => {
      checkIsLoggedIn();
    };
  }, [user, navigate]);
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
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input name="name" type="text" />
            </FormControl>
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
