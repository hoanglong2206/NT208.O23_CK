import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log({
      email: formData.get("email"),
      password: formData.get("password"),
    });
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg="gray.50">
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
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
            <Stack spacing={4}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text cursor={"pointer"} color={"teal.400"}>
                  Forgot password?
                </Text>
              </Stack>
              <Button
                type="submit"
                bg={"teal.400"}
                color={"white"}
                _hover={{
                  bg: "teal.500",
                }}
              >
                Sign in
              </Button>
            </Stack>

            <Text
              align={"center"}
              display={"flex"}
              justifyContent={"center"}
              gap={2}
            >
              Don't have an account?
              <Text
                cursor={"pointer"}
                color={"teal.400"}
                as={"b"}
                _hover={{ color: "teal.500" }}
                onClick={() => navigate("/register")}
              >
                Sign up
              </Text>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
